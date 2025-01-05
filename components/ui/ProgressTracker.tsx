// components/ui/ProgressTracker.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CourseProgress } from './CourseProgress';

interface EnrolledCourse {
  id: string;
  name: string;
  progress: number;
  lastAccessed?: string;
}

interface ProgressTrackerProps {
  enrolledCourses: EnrolledCourse[];
}

export const ProgressTracker = ({ enrolledCourses }: ProgressTrackerProps) => {
  if (!enrolledCourses.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          You haven't enrolled in any courses yet!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Your Progress</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {enrolledCourses.map((course) => (
          <View key={course.id} style={styles.courseCard}>
            <CourseProgress
              courseName={course.name}
              progress={course.progress}
              lastAccessed={course.lastAccessed}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 16,
    marginBottom: 12,
  },
  scrollContent: {
    paddingRight: 16, // Extra padding for last item
  },
  courseCard: {
    width: 300, // Fixed width for cards
  },
  emptyContainer: {
    padding: 16,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
});
