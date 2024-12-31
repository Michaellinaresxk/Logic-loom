import { router } from 'expo-router';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export const LoginScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Banner Image */}
      <Image
        source={{ uri: 'https://your-image-url.com/background.jpg' }} // Replace with your own image URL
        style={styles.bannerImage}
      />

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Welcome to Learnify</Text>
        <Text style={styles.subHeaderText}>Your journey starts here</Text>
        <Text style={styles.introText}>
          Sign in to access personalized lessons, track your progress, and more!
        </Text>

        {/* Google Sign-In Button */}
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png',
            }}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        <View>
          <Text>Don't have an account?</Text>
          <Text onPress={() => router.push('/')}>Sign up</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  bannerImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  subHeaderText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginVertical: 5,
  },
  introText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 15,
    lineHeight: 22,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginTop: 20,
    width: '80%',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    color: '#333',
  },
});
