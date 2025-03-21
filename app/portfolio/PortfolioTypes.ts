import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export interface University {
  id: number;
  name: string;
  image: StaticImageData;
}

export interface Faculty {
  id: number;
  name: string;
  icon: ReactNode;
  universities: number[];
}

export interface Student {
  id: number;
  name: string;
  universityId: number;
  facultyId: number;
  year: number;
  gpa: number;
  image: StaticImageData;
}