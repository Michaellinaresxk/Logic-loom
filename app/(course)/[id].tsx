import { useLocalSearchParams } from 'expo-router';
import CourseDetailsScreen from './CourseDetailsScreen';
import React from 'react';

export default function CourseDetails() {
  const { id } = useLocalSearchParams();

  // Aquí normalmente harías una llamada a tu API o base de datos
  // Por ahora usaremos datos de ejemplo
  const courseData = {
    id: id as string,
    title: 'Learn Basic HTML',
    instructor: 'Tubeguruji',
    duration: '2h 30min',
    level: 'Basic',
    chaptersCount: 15,
    description:
      'Welcome to an exciting journey of building a cutting-edge FullStack Learning Management System (LMS) application with Next.js 13! In this in-depth tutorial, we will explore the power of Next.js, React.js.',
    thumbnail: 'https://picsum.photos/800/600',
    price: 0,
    chapters: [
      {
        id: '1',
        title: 'Introduction',
        isLocked: false,
        isCompleted: true,
      },
      {
        id: '2',
        title: 'Getting Started',
        isLocked: false,
        isCompleted: false,
      },
      {
        id: '3',
        title: 'What is HTML',
        isLocked: true,
      },
    ],
  };

  return <CourseDetailsScreen course={courseData} />;
}
