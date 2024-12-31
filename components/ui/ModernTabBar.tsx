import React from 'react';
import { Pressable, View, Text, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import type { TabConfigType } from '@/types/TabConfigType';
import { ThemedText } from './ThemeText';

interface ModernTabBarProps {
  focused: boolean;
  routeName: string;
  config: TabConfigType;
}

export function ModernTabBar({
  focused,
  routeName,
  config,
}: ModernTabBarProps) {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const IconComponent = config.icon;

  return (
    <Pressable
      onPress={() => router.push(`/${routeName}`)}
      style={[
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 8,
          transform: [{ scale: focused ? 1.1 : 1 }],
        },
      ]}
    >
      {/* Indicador superior */}
      <View
        style={[
          {
            position: 'absolute',
            top: -3,
            height: 4,
            width: 32,
            borderRadius: 2,
            backgroundColor: config.gradientStart,
            opacity: focused ? 1 : 0,
          },
        ]}
      />

      {/* Contenedor del icono */}
      <View
        style={[
          {
            borderRadius: 16,
            padding: 12,
            backgroundColor: config.gradientStart,
            opacity: focused ? 0.2 : 0,
          },
        ]}
      >
        <IconComponent
          size={24}
          color={
            focused ? config.gradientStart : isDark ? '#9CA3AF' : '#6B7280'
          }
          strokeWidth={focused ? 2.5 : 2}
        />
      </View>

      {/* Texto */}
      <View
        style={[
          {
            marginTop: 4,
            opacity: focused ? 1 : 0.6,
          },
        ]}
      >
        <ThemedText
          style={[
            {
              fontSize: 12,
              fontWeight: '500',
              color: isDark ? '#E5E7EB' : '#4B5563',
            },
          ]}
        >
          {config.title}
        </ThemedText>
      </View>
    </Pressable>
  );
}
