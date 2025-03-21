import React from 'react';
import { Student } from '../../PortfolioTypes';
import Image
 from 'next/image';
interface StudentCardProps {
  student: Student;
  onClick: (student: Student) => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg cursor-pointer"
      onClick={() => onClick(student)}
    >
      <div className="p-4 flex items-center">
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-medium mr-3">
          {/* {student.name.charAt(0)} */}
          {/* Uncomment when you have actual images */}
          <Image
            src={student.image}
            alt={student.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-800">{student.name}</h3>
          <p className="text-sm text-gray-500">ชั้นปีที่ {student.year}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;