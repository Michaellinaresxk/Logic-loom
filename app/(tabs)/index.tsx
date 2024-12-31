import { StyleSheet, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ScreenBackground } from '@/components/ui/ScreenBackground';
import { ModernHeader } from '@/components/ui/ModernHeader';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  const handleSearch = (text: string) => {
    // Implementa tu lógica de búsqueda aquí
    console.log('Searching for:', text);
  };

  return (
    <ThemedView style={styles.titleContainer}>
      <ScreenBackground>
        <ModernHeader title='Welcome back, Alex!' onSearch={handleSearch} />
      </ScreenBackground>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 50,
    height: 250,
  },
});
