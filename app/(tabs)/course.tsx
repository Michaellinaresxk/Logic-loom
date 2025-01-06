import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { ThemedText } from '@/components/ui/ThemeText';
import { useRouter } from 'expo-router';
import { Clock, BookOpen, AlertCircle, CheckCircle } from 'lucide-react-native';

export default function MyCoursesScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('in-progress');

  // Datos de ejemplo
  const coursesData = {
    'in-progress': [
      {
        id: '1',
        title: 'Learn Basic HTML & CSS',
        progress: 45,
        lastAccessed: '2 days ago',
        nextChapter: 'CSS Flexbox Basics',
        totalChapters: 15,
        completedChapters: 7,
      },
      {
        id: '2',
        title: 'React Native Development',
        progress: 30,
        lastAccessed: '5 days ago',
        nextChapter: 'Navigation in React Native',
        totalChapters: 20,
        completedChapters: 6,
      },
    ],
    completed: [
      {
        id: '3',
        title: 'JavaScript Fundamentals',
        completedDate: '15 Jan 2024',
        totalChapters: 12,
        completedChapters: 12,
      },
    ],
  };

  const handleCoursePress = (courseId: string) => {
    router.push(`/chapters/${courseId}`);
  };

  const renderInProgressCourses = () => (
    <View>
      {coursesData['in-progress'].map((course) => (
        <Pressable
          key={course.id}
          style={styles.courseCard}
          onPress={() => handleCoursePress(course.id)}
        >
          <View>
            <ThemedText style={styles.courseTitle}>{course.title}</ThemedText>

            {/* Progress Bar */}
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${course.progress}%` },
                  ]}
                />
              </View>
              <ThemedText style={styles.progressText}>
                {course.progress}% Complete
              </ThemedText>
            </View>

            {/* Course Stats */}
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Clock size={16} color='#6B7280' />
                <ThemedText style={styles.statText}>
                  {course.lastAccessed}
                </ThemedText>
              </View>
              <View style={styles.statItem}>
                <BookOpen size={16} color='#6B7280' />
                <ThemedText style={styles.statText}>
                  {course.completedChapters}/{course.totalChapters} Chapters
                </ThemedText>
              </View>
            </View>

            {/* Next Up Section */}
            <View style={styles.nextUpContainer}>
              <AlertCircle size={16} color='#4F46E5' />
              <ThemedText style={styles.nextUpText}>
                Next up: {course.nextChapter}
              </ThemedText>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );

  const renderCompletedCourses = () => (
    <View>
      {coursesData['completed'].map((course) => (
        <Pressable
          key={course.id}
          style={styles.courseCard}
          onPress={() => handleCoursePress(course.id)}
        >
          <View>
            <View style={styles.completedHeader}>
              <ThemedText style={styles.courseTitle}>{course.title}</ThemedText>
              <CheckCircle size={20} color='#10B981' />
            </View>

            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Clock size={16} color='#6B7280' />
                <ThemedText style={styles.statText}>
                  Completed on {course.completedDate}
                </ThemedText>
              </View>
              <View style={styles.statItem}>
                <BookOpen size={16} color='#6B7280' />
                <ThemedText style={styles.statText}>
                  {course.completedChapters} Chapters
                </ThemedText>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <Pressable
          style={[styles.tab, activeTab === 'in-progress' && styles.activeTab]}
          onPress={() => setActiveTab('in-progress')}
        >
          <ThemedText
            style={[
              styles.tabText,
              activeTab === 'in-progress' && styles.activeTabText,
            ]}
          >
            In Progress ({coursesData['in-progress'].length})
          </ThemedText>
        </Pressable>
        <Pressable
          style={[styles.tab, activeTab === 'completed' && styles.activeTab]}
          onPress={() => setActiveTab('completed')}
        >
          <ThemedText
            style={[
              styles.tabText,
              activeTab === 'completed' && styles.activeTabText,
            ]}
          >
            Completed ({coursesData['completed'].length})
          </ThemedText>
        </Pressable>
      </View>

      {/* Course List */}
      <ScrollView style={styles.content}>
        {activeTab === 'in-progress'
          ? renderInProgressCourses()
          : renderCompletedCourses()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4F46E5',
  },
  tabText: {
    fontSize: 14,
    color: '#6B7280',
  },
  activeTabText: {
    color: '#4F46E5',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4F46E5',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 14,
    color: '#6B7280',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    fontSize: 14,
    color: '#6B7280',
  },
  nextUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  nextUpText: {
    fontSize: 14,
    color: '#4F46E5',
  },
  completedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
});
