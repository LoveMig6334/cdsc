import React from 'react';

interface MedalIconProps {
  position: number | null;
  className?: string;
}

export const MedalIcon: React.FC<MedalIconProps> = ({ position, className = "" }) => {
  if (!position || position === 0) {
    return <span className={`text-gray-400 ${className}`}>-</span>;
  }

  const medals = {
    1: "🥇",
    2: "🥈", 
    3: "🥉"
  };

  return <span className={className}>{medals[position as keyof typeof medals]}</span>;
};

export const getTeamBgClass = (team: 'green' | 'pink' | 'purple' | 'orange'): string => {
  const bgClasses = {
    green: 'bg-green-50',
    pink: 'bg-pink-50 ', 
    purple: 'bg-purple-50 ',
    orange: 'bg-orange-50'
  };
  return bgClasses[team];
};

export const getTeamTextClass = (team: 'green' | 'pink' | 'purple' | 'orange'): string => {
  const textClasses = {
    green: 'text-green-700',
    pink: 'text-pink-700',
    purple: 'text-purple-700', 
    orange: 'text-orange-700'
  };
  return textClasses[team];
};