// app/(course)/chapters/[id].tsx
import React from 'react';
import { View, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ui/ThemeText';
import { ThemedView } from '@/components/ui/ThemeView';
import { PlayCircle, Lock, CheckCircle } from 'lucide-react-native';

export default function ChaptersScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  // Simulamos obtener los datos del curso
  const courseData = {
    id: id as string,
    title: 'Learn Basic HTML',
    description: 'Master the fundamentals of HTML',
    progress: 30, // porcentaje de progreso
    chapters: [
      {
        id: '1',
        title: 'Introduction to HTML',
        duration: '10min',
        isCompleted: true,
        isLocked: false,
      },
      {
        id: '2',
        title: 'Basic HTML Tags',
        duration: '15min',
        isCompleted: false,
        isLocked: false,
      },
      {
        id: '3',
        title: 'HTML Forms',
        duration: '20min',
        isCompleted: false,
        isLocked: true,
      },
    ],
  };

  const handleChapterPress = (chapterId: string) => {
    if (
      !courseData.chapters.find((chapter) => chapter.id === chapterId)?.isLocked
    ) {
      router.push(`/chapters/${id}/content/${chapterId}`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <ThemedText style={styles.title}>{courseData.title}</ThemedText>

        <ThemedText style={styles.description}>
          {courseData.description}
        </ThemedText>

        {/* Barra de progreso */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${courseData.progress}%` },
              ]}
            />
          </View>
          <ThemedText style={styles.progressText}>
            {courseData.progress}% Complete
          </ThemedText>
        </View>

        {/* Lista de capítulos */}
        {courseData.chapters.map((chapter) => (
          <Pressable
            key={chapter.id}
            style={styles.chapterCard}
            onPress={() => handleChapterPress(chapter.id)}
          >
            <View style={styles.chapterContent}>
              <View style={styles.chapterInfo}>
                <ThemedText style={styles.chapterTitle}>
                  {chapter.title}
                </ThemedText>
                <ThemedText style={styles.chapterDuration}>
                  {chapter.duration}
                </ThemedText>
              </View>

              {chapter.isLocked ? (
                <Lock size={24} color='#9CA3AF' />
              ) : chapter.isCompleted ? (
                <CheckCircle size={24} color='#10B981' />
              ) : (
                <PlayCircle size={24} color='#4F46E5' />
              )}
            </View>
          </Pressable>
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
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1F2937',
  },
  description: {
    color: '#6B7280',
    marginBottom: 16,
    fontSize: 16,
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4F46E5',
    borderRadius: 2,
  },
  progressText: {
    marginTop: 8,
    color: '#6B7280',
    fontSize: 14,
  },
  chapterCard: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  chapterContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chapterInfo: {
    flex: 1,
  },
  chapterTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: '#1F2937',
  },
  chapterDuration: {
    color: '#6B7280',
    fontSize: 14,
  },
});
