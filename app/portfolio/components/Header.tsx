import React from 'react';
import { IoIosSearch } from "react-icons/io";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="bg-blue-700 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">พอร์ตพี่มีให้น้องดู</h1>
        <div className="relative w-full max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="ค้นหา..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 px-4 pr-10 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <div className="absolute right-3 top-2.5">
            <IoIosSearch className="h-5 w-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;