import React from 'react';
import FacultyCard from '../Cards/FacultyCard';
import BackButton from '../UI/BackButton';
import { University, Faculty } from '../../PortfolioTypes';
import Image from 'next/image';
interface UniversityViewProps {
  university: University;
  faculties: Faculty[];
  handleBackClick: () => void;
  handleFacultyClick: (faculty: Faculty) => void;
}

const UniversityView: React.FC<UniversityViewProps> = ({
  university,
  faculties,
  handleBackClick,
  handleFacultyClick,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton onClick={handleBackClick} />
      
      <div className="flex items-center mb-8">
        <div className="w-16 h-16 rounded-lg bg-white-50flex items-center justify-center text-white text-2xl font-bold mr-4">
          {/* {university.name.charAt(0)} */}
          {/* Uncomment when you have actual images */}
          <Image
            src={university.image}
            alt={university.name}
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">{university.name}</h1>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">คณะทั้งหมด</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculties.map((faculty) => (
          <FacultyCard
            key={faculty.id}
            faculty={faculty}
            onClick={handleFacultyClick}
          />
        ))}
      </div>
    </div>
  );
};

export default UniversityView;