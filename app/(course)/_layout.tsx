import { Stack } from 'expo-router';
import React from 'react';
import EnrollmentSuccessScreen from './EnrollmentSuccessScreen';

export default function CourseLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='[id]'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='enroll/[id]'
        options={{
          title: 'Enrollment Successful',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
