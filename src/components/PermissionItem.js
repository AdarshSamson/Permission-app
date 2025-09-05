import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const PermissionItem = ({
  icon, title, description, status, onPress
}) => {
  return (
    <TouchableOpacity style={styles.permissionItem} onPress={onPress}>
      <View style={styles.permissionContent}>
        <View style={styles.iconContainer}>{icon}</View>

        <View style={styles.textContainer}>
          <Text style={styles.permissionTitle}>{title}</Text>
          <Text style={styles.permissionDescription}>{description}</Text>
        </View>

        <View style={styles.statusContainer}>
          {status === 'unknown' && (
            <View style={styles.emptyCircle} />
          )}
          {status === 'granted' && (
            <>
              <FontAwesome name="check-circle" size={20} color="#10B981" />
              <Text style={styles.statusTextGranted}>Granted</Text>
            </>
          )}
          {status === 'denied' && (
            <>
              <FontAwesome name="times-circle" size={20} color="#EF4444" />
              <Text style={styles.statusTextDenied}>Denied</Text>
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default PermissionItem;