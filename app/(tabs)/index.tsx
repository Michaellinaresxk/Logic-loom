import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ModernHeader } from '@/components/ui/ModernHeader';
import { CourseList } from '@/components/ui/CourseList';
import { sampleCourses } from '@/constants/sampleCourses';

export default function HomeScreen() {
  const handleCoursePress = (courseId: string) => {
    console.log('Course pressed:', courseId);
  };

  return (
    <View style={styles.container}>
      <ModernHeader title='Welcome back!' />
      <View style={styles.listContainer}>
        <View style={styles.listContainer}>
          <CourseList courses={sampleCourses} />
        </View>{' '}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  listContainer: {
    marginTop: 20,
  },
});
