import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomDropdown from "../../components/CustomDropdown";
import colors from "../../theme/colors";
import Button from "../../components/Button";
import PROFILE_DATA from "../../data/profileData.json";

export default function ProfileScreen() {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        We use this info to tailor categorization and suggest smart rules based on your work.
      </Text>

      <CustomDropdown
        label="What are you hoping to achieve?"
        placeholder="Select an option..."
        data={PROFILE_DATA.goals}
        onSelect={setSelectedGoal}
        selectedValue={selectedGoal?.label}
      />

      <CustomDropdown
        label="Who are you, how do you work?"
        placeholder="Select an option..."
        data={PROFILE_DATA.workTypes}
        onSelect={setSelectedWork}
        selectedValue={selectedWork?.label}
      />

      <CustomDropdown
        label="What sector do you primarily operate in?"
        placeholder="Select an option..."
        data={PROFILE_DATA.sectors}
        onSelect={setSelectedSector}
        selectedValue={selectedSector?.label}
      />

      <View style={styles.bottomContainer}>
        <Button text='Continue' type='primary' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 15,
    backgroundColor: colors.background,
  },
  description: {
    fontSize: 14,
    color: '#808388ff',
    fontWeight: '600',
    lineHeight: 20,
    marginBottom: 15,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    left: 15,
    right: 15,
  },
});