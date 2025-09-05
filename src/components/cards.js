import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/colors';

const Cards = ({
  icon,
  title,
  subtitle,
  onPress,
  style
}) => {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <TouchableOpacity style={styles.connectButton} onPress={onPress}>
        <Text style={styles.connectButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: 16,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    flex: 1,
    marginHorizontal: 8,
    justifyContent: 'space-between',
  },
  iconContainer: {
    marginBottom: 4,
    marginTop: 1,

  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3f444eff',
    textAlign: 'center',
    lineHeight: 15,
    marginBottom: 5,
    marginHorizontal: -8,
  },
  subtitle: {
    fontSize: 13,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 12,
  },
  connectButton: {
    backgroundColor: colors.primary,
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -14,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 6.08,
    shadowRadius: 18,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  connectButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Cards;