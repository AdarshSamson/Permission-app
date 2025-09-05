import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Cards from '../../components/cards';
import Button from '../../components/Button';
import GmailIcon from '../../../assets/gmailIcon.png';
import OutlookIcon from '../../../assets/outlookIcon.png';

export default function EmailScreen() {
  const handleGoogleConnect = () => {
    console.log('Connect Google Workspace');
  };

  const handleMicrosoftConnect = () => {
    console.log('Connect Microsoft 365');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.description}>
        Connect to your email to unlock automatic receipt and invoice detection. No more forwarding or manual uploads.
      </Text>

      <View style={styles.cardsContainer}>
        <Cards
          icon={<Image source={GmailIcon} style={styles.Icon} />}
          title="Connect Google Workspace (Gmail)"
          subtitle="Mail + Calendar"
          onPress={handleGoogleConnect}
          style={styles.card}
        />

        <Cards
          icon={<Image source={OutlookIcon} style={styles.Icon} />}
          title="Connect Microsoft 365 (Outlook)"
          subtitle="Mail + Calendar"
          onPress={handleMicrosoftConnect}
          style={styles.card}
        />
      </View>

      <View style={styles.securitySection}>
        <EvilIcons name="lock" size={38} color="#2c6fe2ff" />
        <Text style={styles.securityText}>
          We'll only scan for receipts - not your personal emails.{'\n'}
          Your credentials are never shared with us.
        </Text>
      </View>

      <Button text='Continue' type='seconday' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingTop: 30,
    padding: 20,
  },
  description: {
    fontSize: 14,
    color: '#808388ff',
    lineHeight: 20,
    fontWeight: '600',
    marginBottom: 32,
    textAlign: 'left',
  },
  cardsContainer: {
    flexDirection: 'row',
    marginBottom: 190,
    marginHorizontal: -10,
  },
  card: {
    minHeight: 120,
  },
  securitySection: {
    alignItems: 'center',
    marginBottom: 55,
    paddingHorizontal: 1,
  },
  securityText: {
    fontSize: 12,
    color: '#7d838eff',
    textAlign: 'center',
    lineHeight: 16,
    marginTop: 12,
    fontWeight: '500',
  },
  Icon: {
    width: 38,
    height: 38,
    backgroundColor: '#ffffffff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#edededff',
  },
  gmailText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },

});