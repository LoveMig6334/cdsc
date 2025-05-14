import { NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";
import { RowDataPacket } from "mysql2/promise";

function convertGoogleDriveLink(sharedLink: string): string | null {
  const match = sharedLink.match(/\/file\/d\/([^/]+)\//);
  if (!match || match.length < 2) {
    return null;
  }

  const fileId = match[1];
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

export interface University {
  id: number;
  name: string;
  image: string | null;
}

export interface Faculty {
  id: number;
  name: string;
  icon: string | null;
  universities: number[];
}

export interface Student {
  id: number;
  name: string;
  universityId: number;
  facultyId: number;
  year: number;
  gpa: number;
  image: string | null;
}

export async function GET(request: Request) {
    try {
      const [universitiesRows] = await mysqlPool.query<RowDataPacket[]>(
        "SELECT id, name, image_url FROM universities"
      );
  
      const [facultiesRows] = await mysqlPool.query<RowDataPacket[]>(
        "SELECT id, name, icon FROM faculties"
      );
  
      const [studentsRows] = await mysqlPool.query<RowDataPacket[]>(
        `SELECT s.id, s.name, s.university_id, s.faculty_id, s.year, s.gpa, s.image_url
        FROM students s`
      );
  
      // Map the data to match the new format, with fallback values for null fields
      const universities: University[] = universitiesRows.map((u) => ({
        id: u.id,
        name: u.name,
        image: u.image_url ? convertGoogleDriveLink(u.image_url) : "", // Fallback to empty string if null
      }));
  
      const faculties: Faculty[] = facultiesRows.map((f) => ({
        id: f.id,
        name: f.name,
        icon: f.icon ? convertGoogleDriveLink(f.icon) : "", // Fallback to empty string if null
        universities: [], // This will be populated later
      }));
  
      const students: Student[] = studentsRows.map((s) => ({
        id: s.id,
        name: s.name,
        universityId: s.university_id,
        facultyId: s.faculty_id,
        year: s.year,
        gpa: s.gpa,
        image: s.image_url ? convertGoogleDriveLink(s.image_url) : "", // Fallback to empty string if null
      }));
  
      // Populate faculties with the list of universities that offer them
      faculties.forEach((faculty) => {
        faculty.universities = students
          .filter((student) => student.facultyId === faculty.id)
          .map((student) => student.universityId);
      });
  
      // Return the structured data in the desired format
      return NextResponse.json({
        universities,
        faculties,
        students,
      });
    } catch (error) {
      console.error("Database error:", error);
      return NextResponse.json(
        { error: "Failed to fetch data from database." },
        { status: 500 }
      );
    }
  }
  