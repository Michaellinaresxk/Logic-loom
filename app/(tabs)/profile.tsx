import React, { useState } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Switch,
} from 'react-native';
import { ThemedText } from '@/components/ui/ThemeText';
import { ThemedView } from '@/components/ui/ThemeView';
import { MaterialIcons } from '@expo/vector-icons';

const PRIMARY_COLOR = '#4F46E5';

const ProfileSection = ({ title, children }) => (
  <ThemedView style={styles.section}>
    <ThemedText style={styles.sectionTitle}>{title}</ThemedText>
    {children}
  </ThemedView>
);

const ProfileMenuItem = ({ icon, title, onPress, rightElement }) => (
  <TouchableOpacity
    style={styles.menuItem}
    onPress={onPress}
    disabled={rightElement !== undefined}
  >
    <MaterialIcons name={icon} size={24} color={PRIMARY_COLOR} />
    <ThemedText style={styles.menuItemText}>{title}</ThemedText>
    {rightElement || (
      <MaterialIcons name='chevron-right' size={24} color={PRIMARY_COLOR} />
    )}
  </TouchableOpacity>
);

export default function TabFourScreen() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://via.placeholder.com/100',
  });

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleEditProfile = () => {
    // Implement edit profile logic
    console.log('Edit profile');
  };

  const handleLogout = () => {
    // Implement logout logic
    console.log('Logout');
  };

  const handleDeleteAccount = () => {
    // Implement account deletion logic
    console.log('Delete account');
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <TouchableOpacity onPress={handleEditProfile}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
        </TouchableOpacity>
        <ThemedText style={styles.name}>{user.name}</ThemedText>
        <ThemedText style={styles.email}>{user.email}</ThemedText>
      </ThemedView>

      <ProfileSection title='Account Settings'>
        <ProfileMenuItem
          icon='person-outline'
          title='Edit Profile'
          onPress={handleEditProfile}
        />
        <ProfileMenuItem
          icon='notifications-none'
          title='Notifications'
          rightElement={
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#767577', true: PRIMARY_COLOR }}
              thumbColor={notificationsEnabled ? '#fff' : '#f4f3f4'}
            />
          }
        />
        <ProfileMenuItem
          icon='description'
          title='Terms & Privacy Policy'
          onPress={() => console.log('Terms & Privacy')}
        />
      </ProfileSection>

      <ProfileSection title='Preferences'>
        <ProfileMenuItem
          icon='settings'
          title='App Settings'
          onPress={() => console.log('App Settings')}
        />
        <ProfileMenuItem
          icon='help-outline'
          title='Help & Support'
          onPress={() => console.log('Help')}
        />
        <ProfileMenuItem
          icon='info-outline'
          title='About'
          onPress={() => console.log('About')}
        />
      </ProfileSection>

      <ProfileSection title='Danger Zone'>
        <ProfileMenuItem
          icon='delete-outline'
          title='Request Account Deletion'
          onPress={handleDeleteAccount}
        />
      </ProfileSection>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <ThemedText style={styles.logoutText}>Logout</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
  },
  logoutButton: {
    margin: 20,
    padding: 15,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
