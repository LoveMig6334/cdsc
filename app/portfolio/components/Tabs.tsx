import React from 'react';

interface TabsProps {
  filterTab: number;
  handleTabChange: (tab: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ filterTab, handleTabChange }) => {
  return (
    <div className="flex justify-center border-b border-gray-200 mb-6">
      <div className="flex space-x-1">
        {['ทั้งหมด', 'มหาวิทยาลัย', 'คณะ'].map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={`px-4 py-2 font-medium text-sm rounded-t-lg transition-colors ${
              filterTab === index
                ? 'bg-blue-700 text-white'
                : 'text-blue-700 hover:bg-blue-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
