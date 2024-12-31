// components/ui/ScreenBackground.tsx
import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function ScreenBackground({ children }) {
  return (
    <View className='flex-1'>
      <LinearGradient
        colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0)']}
        className='absolute h-full w-full'
      />
      {children}
    </View>
  );
}
