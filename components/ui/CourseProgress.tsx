// components/ui/CourseProgress.tsx
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import * as Progress from 'expo-progress'; // Make sure to install this package

interface CourseProgressProps {
  courseName: string;
  progress: number; // 0 to 100
  lastAccessed?: string;
}

export const CourseProgress = ({
  courseName,
  progress,
  lastAccessed,
}: CourseProgressProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.courseTitle} numberOfLines={1}>
          {courseName}
        </Text>
        <Text style={styles.progressText}>{progress}%</Text>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>
      </View>

      {lastAccessed && (
        <Text style={styles.lastAccessed}>Last accessed: {lastAccessed}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
    marginRight: 8,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2563EB',
  },
  progressContainer: {
    marginVertical: 8,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#2563EB',
    borderRadius: 4,
  },
  lastAccessed: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
});
