// screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ModernHeader } from '@/components/ui/ModernHeader';
import { CourseList } from '@/components/ui/CourseList';
import { CategoryFilter } from '@/components/ui/CategoryFilter';
import { PromotionalBanner } from '@/components/ui/PromotionalBanner';
import { ProgressTracker } from '@/components/ui/ProgressTracker';
import { sampleCourses } from '@/constants/sampleCourses';

const categories = [
  { id: 'programming', name: 'Programming' },
  { id: 'design', name: 'Design' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'business', name: 'Business' },
];

// Datos de ejemplo para cursos en progreso
const enrolledCourses = [
  {
    id: '1',
    name: 'JavaScript Basics',
    progress: 50,
    lastAccessed: '2 days ago',
  },
  {
    id: '2',
    name: 'React Native Master',
    progress: 75,
    lastAccessed: 'Yesterday',
  },
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCoursePress = (courseId: string) => {
    console.log('Course pressed:', courseId);
  };

  const filteredCourses = selectedCategory
    ? sampleCourses.filter((course) => course.category === selectedCategory)
    : sampleCourses;

  return (
    <View style={styles.container}>
      <ModernHeader title='Welcome back!' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <PromotionalBanner
          message='🎉 50% off on all courses this weekend!'
          onPress={() => console.log('Promo banner pressed')}
        />
        <ProgressTracker enrolledCourses={enrolledCourses} />
        <View style={styles.content}>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <CourseList
            courses={filteredCourses}
            onCoursePress={handleCoursePress}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 16,
  },
});
