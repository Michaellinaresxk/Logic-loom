import { StyleSheet, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { LoginScreen } from '../Screen/LoginScreen';
import { SignedIn, SignedOut } from '@clerk/clerk-expo';
import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <View>
        <SignedIn>
          {/* <ThemedText>Hello {user?.emailAddresses[0].emailAddress}</ThemedText> */}
        </SignedIn>
        <SignedOut>
          <Link href='/(auth)/sign-in'>
            <ThemedText>Sign in</ThemedText>
          </Link>
          <Link href='/(auth)/sign-up'>
            <ThemedText>Sign up</ThemedText>
          </Link>
        </SignedOut>
      </View>
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
