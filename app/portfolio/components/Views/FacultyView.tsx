import React from 'react';
import StudentCard from '../Cards/StudentCard';
import BackButton from '../UI/BackButton';
import { Faculty, Student, University } from '../../PortfolioTypes';

interface FacultyViewProps {
  faculty: Faculty;
  university: University | null;
  students: Student[];
  handleBackClick: () => void;
  handleStudentClick: (student: Student) => void;
}

const FacultyView: React.FC<FacultyViewProps> = ({
  faculty,
  university,
  students,
  handleBackClick,
  handleStudentClick,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton onClick={handleBackClick} />
      
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <div className="text-blue-600 text-3xl mr-3">{faculty.icon}</div>
          <h1 className="text-2xl font-bold text-gray-800">คณะ{faculty.name}</h1>
        </div>
        
        {university && (
          <h2 className="text-lg text-gray-500">{university.name}</h2>
        )}
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">นักศึกษาทั้งหมด</h2>
      
      {students.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onClick={handleStudentClick}
            />
          ))}
        </div>
      ) : (
        <div className="bg-blue-50 text-blue-700 p-6 rounded-lg text-center">
          ไม่พบข้อมูลนักศึกษา
        </div>
      )}
    </div>
  );
};

export default FacultyView;