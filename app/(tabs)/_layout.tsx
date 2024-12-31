import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// Definimos la configuración de las pestañas
const TAB_CONFIG = {
  index: {
    title: 'Home',
    iconName: 'house.fill',
  },
  explore: {
    title: 'Explore',
    iconName: 'safari.fill',
  },
  'my-course': {
    title: 'My Course',
    iconName: 'book.fill',
  },
  profile: {
    title: 'Profile',
    iconName: 'person.fill',
  },
} as const;

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const screenOptions = {
    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    headerShown: false,
    tabBarButton: HapticTab,
    tabBarBackground: TabBarBackground,
    tabBarStyle: Platform.select({
      ios: {
        position: 'absolute',
      },
      default: {},
    }),
  };

  return (
    <Tabs screenOptions={screenOptions}>
      {Object.entries(TAB_CONFIG).map(([name, config]) => (
        <Tabs.Screen
          key={name}
          name={name as keyof typeof TAB_CONFIG}
          options={{
            title: config.title,
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name={config.iconName} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
