import React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
  Dimensions,
  Platform,
} from 'react-native';
import { User, Clock, BookOpen, PlayCircle } from 'lucide-react-native';
import { ThemedView } from '@/components/ui/ThemeView';
import { ThemedText } from '@/components/ui/ThemeText';
import { CourseDetailsProps } from '@/types/Course';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const router = useRouter();

const handleEnroll = (courseId: string) => {
  router.push(`/enroll/${courseId}`);
};

export default function CourseDetailsScreen({ course }: CourseDetailsProps) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Thumbnail con gradiente */}
      <View style={styles.thumbnailContainer}>
        <Image
          source={{ uri: course.thumbnail }}
          style={styles.thumbnail}
          resizeMode='cover'
        />
        {course.price === 0 && (
          <ThemedView style={styles.freeTag}>
            <ThemedText style={styles.freeText}>Free</ThemedText>
          </ThemedView>
        )}
      </View>

      {/* Información principal del curso */}
      <View style={styles.contentContainer}>
        <ThemedText style={styles.title}>{course.title}</ThemedText>

        {/* Metadata del curso */}
        <View style={styles.metadataContainer}>
          <View style={styles.metadataItem}>
            <User size={16} color='#6B7280' />
            <ThemedText style={styles.metadataText}>
              {course.instructor}
            </ThemedText>
          </View>
          <View style={styles.metadataItem}>
            <Clock size={16} color='#6B7280' />
            <ThemedText style={styles.metadataText}>
              {course.duration}
            </ThemedText>
          </View>
          <View style={styles.metadataItem}>
            <BookOpen size={16} color='#6B7280' />
            <ThemedText
              style={styles.metadataText}
            >{`${course.chaptersCount} Chapter`}</ThemedText>
          </View>
          <View style={[styles.levelBadge, styles.metadataItem]}>
            <ThemedText style={styles.levelText}>{course.level}</ThemedText>
          </View>
        </View>

        {/* Descripción */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Description</ThemedText>
          <ThemedText style={styles.description}>
            {course.description}
          </ThemedText>
        </View>

        {/* Lista de capítulos */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Chapters</ThemedText>
          {course.chapters.map((chapter, index) => (
            <View key={chapter.id} style={styles.chapterItem}>
              <View style={styles.chapterHeader}>
                <ThemedText style={styles.chapterNumber}>
                  {String(index + 1).padStart(2, '0')}
                </ThemedText>
                <ThemedText style={styles.chapterTitle}>
                  {chapter.title}
                </ThemedText>
                {chapter.isLocked ? (
                  <View style={styles.lockIcon} />
                ) : chapter.isCompleted ? (
                  <View style={styles.completedIcon} />
                ) : (
                  <PlayCircle size={20} color='#4F46E5' />
                )}
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Botones de acción */}
      <View style={styles.actionContainer}>
        {course.price === 0 ? (
          <Pressable
            style={styles.enrollButton}
            onPress={() => handleEnroll(course.id)}
          >
            <ThemedText style={styles.enrollButtonText}>
              Enroll For Free
            </ThemedText>
          </Pressable>
        ) : (
          <View style={styles.pricingContainer}>
            <Pressable style={styles.membershipButton}>
              <ThemedText style={styles.membershipButtonText}>
                Membership ${course.price}/Mon
              </ThemedText>
            </Pressable>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  thumbnailContainer: {
    width: '100%',
    height: 220,
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  freeTag: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#4F46E5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  freeText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  metadataContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metadataText: {
    color: '#6B7280',
    fontSize: 14,
  },
  levelBadge: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelText: {
    color: '#4F46E5',
    fontSize: 14,
    fontWeight: '500',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 24,
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
  actionContainer: {
    padding: 20,
    paddingTop: 0,
  },
  enrollButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  membershipButton: {
    backgroundColor: '#60A5FA',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  membershipButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  lockIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#34D399',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pricingContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingBottom: Platform.OS === 'ios' ? 32 : 16,
  },
});
