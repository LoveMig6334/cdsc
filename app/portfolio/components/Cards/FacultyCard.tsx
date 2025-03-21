import React, { ReactNode } from 'react';
import { Faculty } from '../../PortfolioTypes';

interface FacultyCardProps {
  faculty: Faculty;
  onClick: (faculty: Faculty) => void;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ faculty, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg cursor-pointer"
      onClick={() => onClick(faculty)}
    >
      <div className="p-4 flex items-center">
        <div className="mr-3 text-blue-600 text-3xl">{faculty.icon}</div>
        <h3 className="font-medium text-gray-800">{faculty.name}</h3>
      </div>
    </div>
  );
};

export default FacultyCard;