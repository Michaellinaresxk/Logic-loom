import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Pressable,
  TextInput,
} from 'react-native';
import { ThemedText } from '@/components/ui/ThemeText';
import { Search, TrendingUp, Clock, Star, Zap } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const topCategories = [
    { id: '1', name: 'Web Development', icon: Zap, count: 25 },
    { id: '2', name: 'Mobile Apps', icon: Star, count: 18 },
    { id: '3', name: 'Data Science', icon: TrendingUp, count: 15 },
    { id: '4', name: 'New Releases', icon: Clock, count: 10 },
  ];

  const trendingCourses = [
    {
      id: '1',
      title: 'Learn Basic HTML & CSS',
      instructor: 'John Doe',
      rating: 4.8,
      students: 1200,
      thumbnail: 'https://picsum.photos/300/200',
      price: 0,
    },
    {
      id: '2',
      title: 'React Native Masterclass',
      instructor: 'Jane Smith',
      rating: 4.9,
      students: 850,
      thumbnail: 'https://picsum.photos/300/200',
      price: 49.99,
    },
  ];

  const popularSkills = [
    'JavaScript',
    'React',
    'Python',
    'Node.js',
    'TypeScript',
    'UI Design',
  ];

  const handleCoursePress = (courseId: string) => {
    router.push(`/course/${courseId}`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <Search size={20} color='#6B7280' />
        <TextInput
          style={styles.searchInput}
          placeholder='Search courses...'
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Top Categorías */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Top Categories</ThemedText>
        <View style={styles.categoriesGrid}>
          {topCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Pressable key={category.id} style={styles.categoryCard}>
                <Icon size={24} color='#4F46E5' />
                <ThemedText style={styles.categoryName}>
                  {category.name}
                </ThemedText>
                <ThemedText style={styles.categoryCount}>
                  {category.count} courses
                </ThemedText>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* Cursos Trending */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Trending Courses</ThemedText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {trendingCourses.map((course) => (
            <Pressable
              key={course.id}
              style={styles.courseCard}
              onPress={() => handleCoursePress(course.id)}
            >
              <View style={styles.thumbnailContainer}>
                {course.price === 0 && (
                  <View style={styles.freeTag}>
                    <ThemedText style={styles.freeText}>Free</ThemedText>
                  </View>
                )}
              </View>
              <View style={styles.courseInfo}>
                <ThemedText style={styles.courseTitle}>
                  {course.title}
                </ThemedText>
                <ThemedText style={styles.instructorName}>
                  {course.instructor}
                </ThemedText>
                <View style={styles.courseStats}>
                  <ThemedText style={styles.rating}>
                    ★ {course.rating}
                  </ThemedText>
                  <ThemedText style={styles.students}>
                    {course.students} students
                  </ThemedText>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Popular Skills */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Popular Skills</ThemedText>
        <View style={styles.skillsContainer}>
          {popularSkills.map((skill) => (
            <Pressable key={skill} style={styles.skillTag}>
              <ThemedText style={styles.skillText}>{skill}</ThemedText>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F3F4F6',
    margin: 16,
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#1F2937',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '47%',
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
    textAlign: 'center',
  },
  categoryCount: {
    fontSize: 14,
    color: '#6B7280',
  },
  courseCard: {
    width: 280,
    marginRight: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  thumbnailContainer: {
    height: 160,
    backgroundColor: '#F3F4F6',
  },
  freeTag: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#4F46E5',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  freeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  courseInfo: {
    padding: 12,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  instructorName: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  courseStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  rating: {
    fontSize: 14,
    color: '#F59E0B',
    fontWeight: '500',
  },
  students: {
    fontSize: 14,
    color: '#6B7280',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillTag: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  skillText: {
    color: '#4F46E5',
    fontSize: 14,
    fontWeight: '500',
  },
});
