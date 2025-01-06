// app/(course)/chapters/[id]/content/[chapterId].tsx
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ui/ThemeText';
import { ThemedView } from '@/components/ui/ThemeView';
import { Book, Video, Code, ListChecks } from 'lucide-react-native';

const TabContent = ({ activeTab, chapterData }) => {
  switch (activeTab) {
    case 'content':
      return (
        <ScrollView style={styles.tabContent}>
          <ThemedText style={styles.contentTitle}>
            {chapterData.title}
          </ThemedText>
          <ThemedText style={styles.contentText}>
            {chapterData.content}
          </ThemedText>

          {/* Reading Progress */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '30%' }]} />
            </View>
            <ThemedText style={styles.progressText}>30% Read</ThemedText>
          </View>
        </ScrollView>
      );

    case 'quiz':
      return (
        <ScrollView style={styles.tabContent}>
          {chapterData.quiz.questions.map((question, index) => (
            <View key={index} style={styles.quizQuestion}>
              <ThemedText style={styles.questionText}>
                {question.text}
              </ThemedText>
              {question.options.map((option, optIndex) => (
                <Pressable
                  key={optIndex}
                  style={styles.optionButton}
                  onPress={() => handleAnswerSelect(index, optIndex)}
                >
                  <ThemedText style={styles.optionText}>{option}</ThemedText>
                </Pressable>
              ))}
            </View>
          ))}
        </ScrollView>
      );

    case 'video':
      return (
        <View style={styles.tabContent}>
          <View style={styles.videoContainer}>
            {/* Aquí iría el componente de video real */}
            <View style={styles.videoPlaceholder}>
              <Video size={48} color='#6B7280' />
            </View>
          </View>
          <ThemedText style={styles.videoTitle}>
            {chapterData.videoTitle}
          </ThemedText>
          <ThemedText style={styles.videoDescription}>
            {chapterData.videoDescription}
          </ThemedText>
        </View>
      );

    case 'challenges':
      return (
        <ScrollView style={styles.tabContent}>
          {chapterData.challenges.map((challenge, index) => (
            <View key={index} style={styles.challengeCard}>
              <View style={styles.challengeHeader}>
                <ThemedText style={styles.challengeTitle}>
                  {challenge.title}
                </ThemedText>
                <ThemedText style={styles.challengeDifficulty}>
                  {challenge.difficulty}
                </ThemedText>
              </View>
              <ThemedText style={styles.challengeDescription}>
                {challenge.description}
              </ThemedText>
              <View style={styles.codeEditor}>
                <ThemedText style={styles.codeText}>
                  {challenge.starterCode}
                </ThemedText>
              </View>
              <Pressable style={styles.submitButton}>
                <ThemedText style={styles.submitButtonText}>
                  Submit Solution
                </ThemedText>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      );

    default:
      return null;
  }
};

export default function ChapterContent() {
  const [activeTab, setActiveTab] = useState('content');
  const { id, chapterId } = useLocalSearchParams();

  // Datos de ejemplo del capítulo
  const chapterData = {
    id: chapterId as string,
    title: 'Introduction to HTML Basics',
    content:
      'HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser...',
    videoTitle: 'HTML Fundamentals',
    videoDescription:
      'Learn the basic structure of HTML documents and essential tags.',
    quiz: {
      questions: [
        {
          text: 'What does HTML stand for?',
          options: [
            'HyperText Markup Language',
            'HighText Machine Language',
            'HyperText Machine Language',
            'HighText Markup Language',
          ],
          correctAnswer: 0,
        },
      ],
    },
    challenges: [
      {
        title: 'Create a Basic HTML Structure',
        difficulty: 'Easy',
        description:
          'Create an HTML document with proper DOCTYPE, html, head, and body tags.',
        starterCode: '<!DOCTYPE html>\n<html>\n  // Your code here\n</html>',
      },
    ],
  };

  const tabs = [
    { id: 'content', icon: Book, label: 'Content' },
    { id: 'quiz', icon: ListChecks, label: 'Quiz' },
    { id: 'video', icon: Video, label: 'Video' },
    { id: 'challenges', icon: Code, label: 'Challenges' },
  ];

  return (
    <View style={styles.container}>
      {/* Tab Navigation */}
      <View style={styles.tabBar}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <Pressable
              key={tab.id}
              style={[styles.tab, isActive && styles.activeTab]}
              onPress={() => setActiveTab(tab.id)}
            >
              <Icon size={24} color={isActive ? '#4F46E5' : '#6B7280'} />
              <ThemedText
                style={[styles.tabLabel, isActive && styles.activeTabLabel]}
              >
                {tab.label}
              </ThemedText>
            </Pressable>
          );
        })}
      </View>

      {/* Tab Content */}
      <TabContent activeTab={activeTab} chapterData={chapterData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    gap: 4,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4F46E5',
  },
  tabLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  activeTabLabel: {
    color: '#4F46E5',
    fontWeight: '500',
  },
  tabContent: {
    flex: 1,
    padding: 16,
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4B5563',
  },
  progressContainer: {
    marginTop: 24,
    padding: 16,
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
  quizQuestion: {
    marginBottom: 24,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  optionButton: {
    padding: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    marginBottom: 8,
  },
  optionText: {
    fontSize: 16,
    color: '#4B5563',
  },
  videoContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#F3F4F6',
    marginBottom: 16,
    borderRadius: 8,
  },
  videoPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  videoDescription: {
    fontSize: 16,
    color: '#4B5563',
  },
  challengeCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  challengeDifficulty: {
    fontSize: 14,
    color: '#4F46E5',
    fontWeight: '500',
  },
  challengeDescription: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 16,
  },
  codeEditor: {
    backgroundColor: '#1F2937',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#E5E7EB',
  },
  submitButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
