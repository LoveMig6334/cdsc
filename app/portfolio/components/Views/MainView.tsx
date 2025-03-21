import React from 'react';
import Tabs from '../Tabs';
import UniversityCard from '../Cards/UniversityCard';
import FacultyCard from '../Cards/FacultyCard';
import { University, Faculty } from '../../PortfolioTypes';

interface MainViewProps {
  filterTab: number;
  handleTabChange: (tab: number) => void;
  filteredUniversities: University[];
  filteredFaculties: Faculty[];
  handleUniversityClick: (university: University) => void;
  handleFacultyClick: (faculty: Faculty) => void;
}

const MainView: React.FC<MainViewProps> = ({
  filterTab,
  handleTabChange,
  filteredUniversities,
  filteredFaculties,
  handleUniversityClick,
  handleFacultyClick,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs filterTab={filterTab} handleTabChange={handleTabChange} />

      {(filterTab === 0 || filterTab === 1) && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">มหาวิทยาลัย</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.map((university) => (
              <UniversityCard
                key={university.id}
                university={university}
                onClick={handleUniversityClick}
              />
            ))}
          </div>
        </div>
      )}

      {(filterTab === 0 || filterTab === 2) && (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">คณะ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculties.map((faculty) => (
              <FacultyCard
                key={faculty.id}
                faculty={faculty}
                onClick={handleFacultyClick}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainView;