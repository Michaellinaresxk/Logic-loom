const courseData = {
  title: 'Learn Basic HTML',
  instructor: 'Tubeguruji',
  duration: '2h 30min',
  level: 'Basic',
  chaptersCount: 15,
  description:
    'Welcome to an exciting journey of building a cutting-edge FullStack Learning Management System (LMS) application with Next.js 13! In this in-depth tutorial, we will explore the power of Next.js, React.js.',
  thumbnail: 'https://your-image-url.com',
  price: 0, // o 1.99 para mostrar el botón de membresía
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
    // ... más capítulos
  ],
};
