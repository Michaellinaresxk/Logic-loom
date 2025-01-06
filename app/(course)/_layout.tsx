import { Stack } from 'expo-router';
import React from 'react';

export default function CourseLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='[id]' />
      <Stack.Screen name='enroll/[id]' />
      <Stack.Screen
        name='chapters/[id]'
        options={{
          headerShown: true,
          headerTitle: 'Course Content',
        }}
      />
      <Stack.Screen
        name='chapters/[id]/content/[chapterId]'
        options={{
          headerShown: true,
          headerTitle: 'Chapter Content',
        }}
      />
    </Stack>
  );
}
