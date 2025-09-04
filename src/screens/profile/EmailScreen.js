import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Cards from '../../components/cards';

export default function EmailScreen() {
  const handleGoogleConnect = () => {
    console.log('Connect Google Workspace');
  };

  const handleMicrosoftConnect = () => {
    console.log('Connect Microsoft 365');
  };

  const handleContinue = () => {
    console.log('Continue');
  };

  // Gmail icon component
  const GmailIcon = () => (
    <MaterialIcons name="email" size={32} color="#EA4335" />
  );

  // Outlook icon component  
  const OutlookIcon = () => (
    <MaterialIcons name="email" size={32} color="#0078D4" />
  );

  // Shield icon component
  const ShieldIcon = () => (
    <MaterialIcons name="security" size={48} color="#9CA3AF" />
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.description}>
        Connect to your email to unlock automatic receipt and invoice detection. No more forwarding or manual uploads.
      </Text>

      <View style={styles.cardsContainer}>
        <Cards
          icon={<GmailIcon />}
          title="Connect Google Workspace (Gmail)"
          subtitle="Mail • Calendar"
          onPress={handleGoogleConnect}
          style={styles.card}
        />
        
        <Cards
          icon={<OutlookIcon />}
          title="Connect Microsoft 365 (Outlook)"
          subtitle="Mail • Calendar"
          onPress={handleMicrosoftConnect}
          style={styles.card}
        />
      </View>

      <View style={styles.securitySection}>
        <ShieldIcon />
        <Text style={styles.securityText}>
          We'll only scan for receipts - not your personal emails.{'\n'}
          Your credentials are never shared with us.
        </Text>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 22,
    marginBottom: 32,
    textAlign: 'left',
  },
  cardsContainer: {
    flexDirection: 'row',
    marginBottom: 80,
    marginHorizontal: -8,
  },
  card: {
    minHeight: 180,
  },
  securitySection: {
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  securityText: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 16,
  },
  continueButton: {
    backgroundColor: '#E5E7EB',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#9CA3AF',
  },
});