export interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  thumbnail: string;
  price: number;
  progress?: number; // porcentaje de progreso opcional
}

export interface CourseDetailsProps {
  course: {
    title: string;
    instructor: string;
    duration: string;
    level: string;
    chaptersCount: number;
    description: string;
    thumbnail: string;
    price: number;
    chapters: Array<{
      id: string;
      title: string;
      isLocked: boolean;
      isCompleted?: boolean;
    }>;
  };
}
