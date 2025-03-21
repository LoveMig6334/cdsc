import React from 'react';
import BackButton from '../UI/BackButton';
import { Student, University, Faculty } from '../../PortfolioTypes';
import Image from 'next/image';

interface ProfileViewProps {
  student: Student;
  university: University;
  faculty: Faculty;
  handleBackClick: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({
  student,
  university,
  faculty,
  handleBackClick,
}) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <BackButton onClick={handleBackClick} />
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 p-6 text-white">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl font-bold mb-4 sm:mb-0 sm:mr-6">
              {/* {student.name.charAt(0)} */}
              {/* Uncomment when you have actual images */}
              <Image
                src={student.image}
                alt={student.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold mb-1">{student.name}</h1>
              <p className="text-blue-100">{university.name}</p>
              <div className="flex items-center justify-center sm:justify-start mt-2">
                <span className="mr-2">{faculty.icon}</span>
                <span>คณะ{faculty.name}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-8 h-8 bg-yellow-400 rounded-full mr-2 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </span>
            ข้อมูลการศึกษา
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">ชั้นปี</p>
              <p className="text-xl font-semibold text-blue-700">ปีที่ {student.year}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">เกรดเฉลี่ย</p>
              <p className="text-xl font-semibold text-blue-700">{student.gpa}</p>
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-8 h-8 bg-yellow-400 rounded-full mr-2 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </span>
            ข้อมูลเพิ่มเติม
          </h2>
          
          <p className="text-gray-700">
            นี่เป็นข้อมูลตัวอย่างสำหรับ {student.name} ที่กำลังศึกษาอยู่ที่ {university.name} คณะ{faculty.name}
            คุณสามารถเพิ่มข้อมูลเพิ่มเติมเช่น ความสนใจ ผลงาน หรือข้อมูลการติดต่อได้ที่นี่
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;