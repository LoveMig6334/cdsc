import React from 'react';
import { University } from '../../PortfolioTypes';
import Image from 'next/image';
interface UniversityCardProps {
  university: University;
  onClick: (university: University) => void;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ university, onClick }) => {
    return (
      <div
        className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg cursor-pointer"
        onClick={() => onClick(university)}
      >
        <div className="h-40 bg-white-50 relative flex items-center justify-center">
          <Image
            src={university.image}
            alt={university.name}
            className="object-contain"
            width={100}
            height={100}
          />
        </div>
        <div className="p-4">
          <h3 className="text-center font-medium text-gray-800">{university.name}</h3>
        </div>
      </div>
    );
  };

export default UniversityCard;