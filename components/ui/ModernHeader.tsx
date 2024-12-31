// components/ui/ModernHeader.tsx
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Search } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

interface ModernHeaderProps {
  title?: string;
  onSearch?: (text: string) => void;
}

export function ModernHeader({
  title = 'Welcome back!',
  onSearch,
}: ModernHeaderProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Background con gradiente */}
        <View style={styles.backgroundGradient}>
          <View style={styles.circle1} />
          <View style={styles.circle2} />
        </View>

        {/* Contenido */}
        <View style={styles.content}>
          {/* Texto de bienvenida */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>{title}</Text>
            <Text style={styles.subtitleText}>Find your favorite course</Text>
          </View>

          {/* Barra de búsqueda */}
          <View style={styles.searchContainer}>
            <Search size={20} color='#9CA3AF' style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder='Search for courses...'
              placeholderTextColor='#9CA3AF'
              onChangeText={onSearch}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // safeArea: {
  //   backgroundColor: '#4F46E5',
  // },
  container: {
    width: width, // Ancho completo de la pantalla
    height: height * 0.3, // 30% de la altura de la pantalla
    overflow: 'hidden',
  },
  backgroundGradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#4F46E5',
  },
  circle1: {
    position: 'absolute',
    width: width,
    height: width,
    borderRadius: width / 2,
    backgroundColor: 'rgba(99, 102, 241, 0.4)',
    top: -width * 0.6,
    left: -width * 0.2,
  },
  circle2: {
    position: 'absolute',
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    backgroundColor: 'rgba(129, 140, 248, 0.3)',
    top: -width * 0.3,
    right: -width * 0.3,
  },
  content: {
    padding: 20,
    paddingTop: 40,
    width: width, // Asegura que el contenido ocupe todo el ancho
  },
  welcomeContainer: {
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 55,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
    height: '100%', // Asegura que el input ocupe toda la altura del contenedor
  },
});
