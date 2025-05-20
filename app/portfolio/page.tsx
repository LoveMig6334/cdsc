"use client";
import React, { useState, useEffect } from "react";
// import { EngineeringIcon, ScienceIcon, BusinessIcon, AccountBalanceIcon, LocalHospitalIcon, ComputerIcon } from '@mui/icons-material';
import {
  MdOutlineEngineering,
  MdBusiness,
  MdOutlineAccountBalance,
  MdLocalHospital,
  MdComputer,
} from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import Header from "./components/Header";
import MainView from "./components/Views/MainView";
import UniversityView from "./components/Views/UniversityView";
import FacultyView from "./components/Views/FacultyView";
import ProfileView from "./components/Views/ProfileView";
import { University, Faculty, Student } from "./PortfolioTypes";

type ViewType = "main" | "university" | "faculty" | "profile";

export default function Directory() {
  const [view, setView] = useState<ViewType>("main");
  const [selectedUniversity, setSelectedUniversity] =
    useState<University | null>(null);
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [filterTab, setFilterTab] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [universities, setUniversities] = useState<University[]>([]);
  const [faculties, setFaculties] = useState<Faculty[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPortfolioData() {
      try {
        const res = await fetch("/api/portfolio");
        const data = await res.json();
        setUniversities(data.universities);
        setFaculties(data.faculties);
        setStudents(data.students);
      } catch (err) {
        console.error("Failed to fetch portfolio data:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPortfolioData();
  }, []);

  const handleTabChange = (newValue: number): void => {
    setFilterTab(newValue);
  };

  const handleUniversityClick = (university: University): void => {
    setSelectedUniversity(university);
    setView("university");
  };

  const handleFacultyClick = (faculty: Faculty): void => {
    setSelectedFaculty(faculty);
    setView("faculty");
  };

  const handleStudentClick = (student: Student): void => {
    setSelectedStudent(student);
    setView("profile");
  };

  const handleBackClick = (): void => {
    if (view === "profile") {
      if (selectedUniversity) {
        setView("university");
      } else {
        setView("faculty");
      }
    } else if (view === "university" || view === "faculty") {
      setView("main");
      setSelectedUniversity(null);
      setSelectedFaculty(null);
    }
  };

  const getFacultiesByUniversity = (universityId: number): Faculty[] => {
    return faculties.filter((faculty) =>
      faculty.universities.includes(universityId)
    );
  };

  const getStudentsByFaculty = (
    facultyId: number,
    universityId: number | null = null
  ): Student[] => {
    if (universityId) {
      return students.filter(
        (student) =>
          student.facultyId === facultyId &&
          student.universityId === universityId
      );
    } else {
      return students.filter((student) => student.facultyId === facultyId);
    }
  };

  const getUniversityById = (id: number): University | undefined => {
    return universities.find((university) => university.id === id);
  };

  const getFacultyById = (id: number): Faculty | undefined => {
    return faculties.find((faculty) => faculty.id === id);
  };

  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFaculties = faculties.filter((faculty) =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <p>กำลังโหลด...</p>
    </div>;
  }

  // console.log("Portfolio data:", universities, faculties, students);

  // Error View if data is not found
  if (
    (view === "university" && !selectedUniversity) ||
    (view === "faculty" && !selectedFaculty) ||
    (view === "profile" &&
      (!selectedStudent ||
        !getUniversityById(selectedStudent.universityId) ||
        !getFacultyById(selectedStudent.facultyId)))
  ) {
    return (
      <div className="min-h-screen py-12 bg-gray-50">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-red-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              เกิดข้อผิดพลาดในการแสดงผล
            </h2>
            <p className="text-gray-600 mb-6">
              ไม่พบข้อมูลที่ต้องการ กรุณาลองใหม่อีกครั้ง
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              รีเฟรชหน้า
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className=" bg-gray-50">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {view === "main" && (
          <MainView
            filterTab={filterTab}
            handleTabChange={handleTabChange}
            filteredUniversities={filteredUniversities}
            filteredFaculties={filteredFaculties}
            handleUniversityClick={handleUniversityClick}
            handleFacultyClick={handleFacultyClick}
          />
        )}

        {view === "university" && selectedUniversity && (
          <UniversityView
            university={selectedUniversity}
            faculties={getFacultiesByUniversity(selectedUniversity.id)}
            handleBackClick={handleBackClick}
            handleFacultyClick={handleFacultyClick}
          />
        )}

        {view === "faculty" && selectedFaculty && (
          <FacultyView
            faculty={selectedFaculty}
            university={selectedUniversity}
            students={getStudentsByFaculty(
              selectedFaculty.id,
              selectedUniversity?.id || null
            )}
            handleBackClick={handleBackClick}
            handleStudentClick={handleStudentClick}
          />
        )}

        {view === "profile" && selectedStudent && (
          <ProfileView
            student={selectedStudent}
            university={getUniversityById(selectedStudent.universityId)!}
            faculty={getFacultyById(selectedStudent.facultyId)!}
            handleBackClick={handleBackClick}
          />
        )}
      </div>
    </div>
  );
}
