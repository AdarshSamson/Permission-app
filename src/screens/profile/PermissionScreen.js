import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity, Linking } from 'react-native';
import { EvilIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as SMS from 'expo-sms';
import { useFocusEffect } from '@react-navigation/native';
import Button from '../../components/Button';
import PermissionItem from '../../components/PermissionItem';
import PERMISSIONS_DATA from '../../data/permissionData.json';


export default function PermissionScreen() {
  const [permissions, setPermissions] = useState({
    camera: 'unknown',
    photos: 'unknown',
    messages: 'unknown',
    location: 'unknown',
  });

  const checkAllPermissions = async () => {
    try {
      const cameraStatus = await Camera.getCameraPermissionsAsync();
      const locationStatus = await Location.getForegroundPermissionsAsync();
      const mediaStatus = await MediaLibrary.getPermissionsAsync();
      const smsAvailable = await SMS.isAvailableAsync();

      setPermissions({
        camera: cameraStatus.status === 'granted' ? 'granted' : 'denied',
        location: locationStatus.status === 'granted' ? 'granted' : 'denied',
        photos: mediaStatus.status === 'granted' ? 'granted' : 'denied',
        messages: smsAvailable ? 'granted' : 'denied',
      });
    } catch (error) {
      console.log('Error checking permissions:', error);
    }
  };

  useEffect(() => {
    checkAllPermissions();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      checkAllPermissions();
    }, [])
  );

  const requestPermission = async (permissionId) => {
    try {
      let result;

      switch (permissionId) {
        case 'camera':
          // First check current status
          const cameraStatus = await Camera.getCameraPermissionsAsync();

          if (cameraStatus.status === 'granted') {
            setPermissions(prev => ({ ...prev, camera: 'granted' }));
            return;
          }

          // Request permission
          result = await Camera.requestCameraPermissionsAsync();
          setPermissions(prev => ({
            ...prev,
            camera: result.status === 'granted' ? 'granted' : 'denied'
          }));

          if (result.status !== 'granted') {
            showPermissionDeniedAlert('Camera');
          }
          break;

        case 'location':

          const locationStatus = await Location.getForegroundPermissionsAsync();

          if (locationStatus.status === 'granted') {
            setPermissions(prev => ({ ...prev, location: 'granted' }));
            return;
          }
          result = await Location.requestForegroundPermissionsAsync();
          setPermissions(prev => ({
            ...prev,
            location: result.status === 'granted' ? 'granted' : 'denied'
          }));

          if (result.status !== 'granted') {
            showPermissionDeniedAlert('Location');
          }
          break;

        case 'photos':
          const photosStatus = await MediaLibrary.getPermissionsAsync();

          if (photosStatus.status === 'granted') {
            setPermissions(prev => ({ ...prev, photos: 'granted' }));
            return;
          }
          result = await MediaLibrary.requestPermissionsAsync();
          setPermissions(prev => ({
            ...prev,
            photos: result.status === 'granted' ? 'granted' : 'denied'
          }));

          if (result.status !== 'granted') {
            showPermissionDeniedAlert('Photos');
          }
          break;

        case 'messages':
          const isAvailable = await SMS.isAvailableAsync();

          if (isAvailable) {
            setPermissions(prev => ({ ...prev, messages: 'granted' }));
            Alert.alert(
              'Messages Access',
              'SMS functionality is available on your device for receipt detection.',
              [{ text: 'OK' }]
            );
          } else {
            setPermissions(prev => ({ ...prev, messages: 'denied' }));
            Alert.alert(
              'Not Available',
              'SMS functionality is not available on this device.',
              [{ text: 'OK' }]
            );
          }
          break;

        default:
          console.log('Unknown permission type:', permissionId);
          break;
      }
    } catch (error) {
      console.log(`Error requesting ${permissionId} permission:`, error);
      showPermissionDeniedAlert(permissionId);
    }
  };

  const showPermissionDeniedAlert = (permissionName) => {
    Alert.alert(
      `${permissionName} Permission Required`,
      `Please grant ${permissionName} permission in your device settings to use this feature.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => Linking.openSettings()
        }
      ]
    );
  };

  const handleContinue = () => {
    console.log('Continue with permissions:', permissions);
  };

  const renderIcon = (iconName, color) => (
    <View style={[styles.iconBackground, { backgroundColor: color }]}>
      <MaterialIcons name={iconName} size={20} color="#FFFFFF" />
    </View>
  );
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.description}>
        Enable access to automate receipt capture and mileage tracking. No manual uploads.
      </Text>

      <View style={styles.permissionsCard}>
        {PERMISSIONS_DATA.map((permission, index) => (
          <React.Fragment key={permission.id}>
            <PermissionItem
              icon={renderIcon(permission.icon, permission.iconColor)}
              title={permission.title}
              description={permission.description}
              status={permissions[permission.id]}
              onPress={() => requestPermission(permission.id)}
            />
          </React.Fragment>
        ))}
      </View>

      <View style={styles.securitySection}>
        <EvilIcons name="lock" size={38} color="#2c6fe2ff" />
        <Text style={styles.securityText}>
          You'll now see system permission popups.{'\n'}
          Please allow access to keep things automatic and organized from day one.
        </Text>
      </View>

      <Button text="Continue" type="secondary" onPress={handleContinue} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
    paddingTop: 30,
  },
  description: {
    fontSize: 14,
    color: '#808388ff',
    lineHeight: 20,
    marginBottom: 14,
    fontWeight: '600',
  },
  permissionsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    marginBottom: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  permissionItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  permissionContent: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  iconContainer: {
    marginRight: 12,
  },
  iconBackground: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginRight: 2,
  },
  permissionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  permissionDescription: {
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 14,
    fontWeight: '400',
  },
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: -15,
    minWidth: 70,
  },
  emptyCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9CA3AF',
  },
  statusTextGranted: {
    fontSize: 10,
    color: '#10B981',
    fontWeight: '500',
    marginTop: 2,
  },
  statusTextDenied: {
    fontSize: 10,
    color: '#EF4444',
    fontWeight: '500',
    marginTop: 2,
  },
  securitySection: {
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 1,
  },
  securityText: {
    fontSize: 12,
    color: '#7d838eff',
    textAlign: 'center',
    lineHeight: 16,
    marginLeft: 12,
    marginTop: 20,
    fontWeight: '500',
    flex: 1,
  },
});