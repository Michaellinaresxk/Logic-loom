import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { CourseCard } from './card/CourseCard';
import { Course } from '@/types/Course';
import { width } from '@/constants/Dimentions';

interface CourseListProps {
  courses: Course[];
}

export function CourseList({ courses }: CourseListProps) {
  return (
    <FlatList
      data={courses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CourseCard
          course={item}
          onPress={function (courseId: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      snapToAlignment='center'
      snapToInterval={width * 0.8 + 16}
      decelerationRate='fast'
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
});
