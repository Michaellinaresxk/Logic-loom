// app/(course)/enroll/[id].tsx
import React from 'react';
import { View, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import {
  User,
  Clock,
  BookOpen,
  Download,
  MessageCircle,
} from 'lucide-react-native';
import { ThemedView } from '@/components/ui/ThemeView';
import { ThemedText } from '@/components/ui/ThemeText';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function EnrollmentSuccessScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  // Simulamos obtener los datos del curso usando el id
  const courseData = {
    id: id as string,
    title: 'Learn Basic HTML',
    instructor: 'Tubeguruji',
    instructorImage: 'https://picsum.photos/100/100', // Agregué esto para la imagen
    duration: '2h 30min',
    level: 'Basic',
    chaptersCount: 15,
    description:
      'Welcome to an exciting journey of building a cutting-edge FullStack Learning Management System (LMS) application with Next.js 13!',
    thumbnail: 'https://picsum.photos/800/600',
    price: 0,
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
    ],
  };

  const handleStartCourse = () => {
    router.push(`/course/${id}/content/${courseData.chapters[0].id}`);
  };

  const handleResourcesPress = () => {
    router.push(`/course/${id}/resources`);
  };

  const handleDiscussionPress = () => {
    router.push(`/course/${id}/discussion`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Success Header */}
      <View style={styles.headerContainer}>
        <View style={styles.successIcon}>
          <ThemedText style={styles.checkmark}>✓</ThemedText>
        </View>
        <ThemedText style={styles.successTitle}>Congratulations!</ThemedText>
        <ThemedText style={styles.successSubtitle}>
          You've successfully enrolled in
        </ThemedText>
        <ThemedText style={styles.courseName}>{courseData.title}</ThemedText>
      </View>

      {/* Course Overview Card */}
      <View style={styles.overviewCard}>
        <View style={styles.instructorSection}>
          <Image
            source={{ uri: courseData.instructorImage }}
            style={styles.instructorImage}
          />
          <View>
            <ThemedText style={styles.instructorName}>
              {courseData.instructor}
            </ThemedText>
            <ThemedText style={styles.instructorTitle}>
              Course Instructor
            </ThemedText>
          </View>
        </View>

        {/* Course Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Clock size={16} color='#6B7280' />
            <ThemedText style={styles.statText}>
              {courseData.duration}
            </ThemedText>
          </View>
          <View style={styles.statItem}>
            <BookOpen size={16} color='#6B7280' />
            <ThemedText style={styles.statText}>
              {courseData.chaptersCount} Chapters
            </ThemedText>
          </View>
        </View>

        {/* Progress Section */}
        <View style={styles.progressSection}>
          <ThemedText style={styles.progressText}>0% Completed</ThemedText>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.actionsContainer}>
        <Pressable style={styles.startButton} onPress={handleStartCourse}>
          <ThemedText style={styles.startButtonText}>Start Course</ThemedText>
        </Pressable>

        <View style={styles.quickActions}>
          <Pressable style={styles.actionButton} onPress={handleResourcesPress}>
            <Download size={24} color='#4F46E5' />
            <ThemedText style={styles.actionText}>Resources</ThemedText>
          </Pressable>

          <Pressable
            style={styles.actionButton}
            onPress={handleDiscussionPress}
          >
            <MessageCircle size={24} color='#4F46E5' />
            <ThemedText style={styles.actionText}>Discussion</ThemedText>
          </Pressable>
        </View>
      </View>

      {/* Curriculum Preview */}
      <View style={styles.curriculumContainer}>
        <ThemedText style={styles.sectionTitle}>Course Curriculum</ThemedText>
        {courseData.chapters.map((chapter, index) => (
          <View key={chapter.id} style={styles.chapterItem}>
            <View style={styles.chapterHeader}>
              <ThemedText style={styles.chapterNumber}>
                {String(index + 1).padStart(2, '0')}
              </ThemedText>
              <ThemedText style={styles.chapterTitle}>
                {chapter.title}
              </ThemedText>
              {index === 0 ? (
                <ThemedText style={styles.startNow}>Start Now</ThemedText>
              ) : (
                <View style={styles.lockIcon} />
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F3F4F6',
  },
  successIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#4F46E5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  successSubtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  courseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4F46E5',
    textAlign: 'center',
    marginTop: 4,
  },
  overviewCard: {
    margin: 16,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  instructorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  instructorImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  instructorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  instructorTitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statText: {
    fontSize: 14,
    color: '#6B7280',
  },
  progressSection: {
    marginTop: 8,
  },
  progressText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
  },
  progressFill: {
    width: '0%',
    height: '100%',
    backgroundColor: '#4F46E5',
    borderRadius: 2,
  },
  actionsContainer: {
    padding: 16,
  },
  startButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    alignItems: 'center',
    padding: 12,
  },
  actionText: {
    fontSize: 14,
    color: '#4F46E5',
    marginTop: 4,
  },
  curriculumContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  chapterItem: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    marginBottom: 8,
    padding: 16,
  },
  chapterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chapterNumber: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4F46E5',
  },
  chapterTitle: {
    flex: 1,
    fontSize: 15,
    color: '#1F2937',
  },
  startNow: {
    fontSize: 14,
    color: '#4F46E5',
    fontWeight: '500',
  },
  lockIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
  },
});
