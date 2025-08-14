import { NextRequest, NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";

export async function GET() {
  try {
    const [rows] = await mysqlPool.query("SELECT * FROM sportsday ORDER BY id ASC");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch sports data" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, green, pink, purple, orange } = await request.json();
    
    // Validate inputs
    const positions = [green, pink, purple, orange];
    for (const pos of positions) {
      if (pos !== null && pos !== 0 && ![1, 2, 3].includes(pos)) {
        return NextResponse.json(
          { error: "Invalid position value. Must be 1 (gold), 2 (silver), 3 (bronze), or 0 (no medal)" },
          { status: 400 }
        );
      }
    }

    const [result] = await mysqlPool.query(
      "UPDATE sportsday SET green = ?, pink = ?, purple = ?, orange = ? WHERE id = ?",
      [green || null, pink || null, purple || null, orange || null, id]
    ) as any;

    if ((result as any).affectedRows === 0) {
      return NextResponse.json(
        { error: "Sport event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Results updated successfully" });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to update sports data" },
      { status: 500 }
    );
  }
}