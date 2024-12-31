import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { Star, Clock, BarChart2 } from 'lucide-react-native';
import { Course } from '@/types/Course';
import { CARD_WIDTH } from '@/constants/Dimentions';
import { router } from 'expo-router';
import { ThemedText } from '../ThemeText';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const handlePress = () => {
    router.push({
      pathname: '/(course)/[id]',
      params: { id: course.id },
    });
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] },
      ]}
      onPress={handlePress}
    >
      {/* Thumbnail con indicador de nivel */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: course.thumbnail }}
          style={styles.image}
          resizeMode='cover'
        />
        <View style={styles.levelBadge}>
          <ThemedText style={styles.levelText}>{course.level}</ThemedText>
        </View>
      </View>

      {/* Contenido del curso */}
      <View style={styles.content}>
        <ThemedText style={styles.title} numberOfLines={2}>
          {course.title}
        </ThemedText>
        {/* <Text style={styles.instructor}>{course.instructor}</Text> */}

        {/* Metadata del curso */}
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Clock size={14} color='#6B7280' />
            <ThemedText style={styles.metaText}>{course.duration}</ThemedText>
          </View>
          <View style={styles.metaItem}>
            <Star size={14} color='#F59E0B' />
            <ThemedText style={styles.metaText}>
              {course.rating.toFixed(1)}
            </ThemedText>
          </View>
          <View style={styles.metaItem}>
            <BarChart2 size={14} color='#6B7280' />
            <ThemedText style={styles.metaText}>{course.level}</ThemedText>
          </View>
        </View>

        {/* Barra de progreso (si existe) */}
        {course.progress !== undefined && (
          <View style={styles.progressContainer}>
            <View
              style={[styles.progressBar, { width: `${course.progress}%` }]}
            />
            <ThemedText style={styles.progressText}>
              {course.progress}% Complete
            </ThemedText>
          </View>
        )}

        {/* Precio */}
        <ThemedText style={styles.price}>${course.price.toFixed(2)}</ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  imageContainer: {
    position: 'relative',
    height: 140,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  levelBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 10,
  },
  instructor: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    marginVertical: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4F46E5',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4F46E5',
    marginTop: 8,
  },
});
