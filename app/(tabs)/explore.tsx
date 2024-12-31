import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ui/ThemeText';
import { ThemedView } from '@/components/ui/ThemeView';
import React from 'react';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type='title'>Explore</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});
