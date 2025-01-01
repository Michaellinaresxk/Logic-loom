import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CourseCard } from './card/CourseCard';
import { Course } from '@/types/Course';
import { width } from '@/constants/Dimentions';
import { ThemedView } from './ThemeView';
import { ThemedText } from './ThemeText';

interface CourseListProps {
  courses: Course[];
}

export function CourseList({ courses }: CourseListProps) {
  return (
    <View style={styles.content}>
      <ThemedView>
        <ThemedText style={styles.title}>Basics:</ThemedText>
      </ThemedView>
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
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    // marginTop: -100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 20,
    color: 'grey',
    // backgroundColor: '#4F46E5',
  },
  container: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
});
