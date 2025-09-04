import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomDropdown from "../../components/CustomDropdown";
import colors from "../../theme/colors";

export default function ProfileScreen() {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);

  const goalData = [
    { label: "Separate personal and business expenses", value: 1 },
    { label: "Track all business transactions", value: 2 },
    { label: "Manage multiple income sources", value: 3 },
    { label: "Organize tax documents", value: 4 },
  ];

  const workData = [
    { label: "Freelancer / Independent Contractor", value: 1 },
    { label: "Small Business Owner", value: 2 },
    { label: "Employee", value: 3 },
    { label: "Consultant", value: 4 },
  ];

  const sectorData = [
    { label: "Real Estate (Agents, Property Management)", value: 1 },
    { label: "Technology & Software", value: 2 },
    { label: "Healthcare & Medical", value: 3 },
    { label: "Marketing & Advertising", value: 4 },
    { label: "Finance & Accounting", value: 5 },
    { label: "Education & Training", value: 6 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        We use this info to tailor categorization and suggest smart rules based on your work.
      </Text>

      <CustomDropdown
        label="What are you hoping to achieve?"
        placeholder="Select an option..."
        data={goalData}
        onSelect={setSelectedGoal}
        selectedValue={selectedGoal?.label}
      />

      <CustomDropdown
        label="Who are you, how do you work?"
        placeholder="Select an option..."
        data={workData}
        onSelect={setSelectedWork}
        selectedValue={selectedWork?.label}
      />

      <CustomDropdown
        label="What sector do you primarily operate in?"
        placeholder="Select an option..."
        data={sectorData}
        onSelect={setSelectedSector}
        selectedValue={selectedSector?.label}
      />

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
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
    color: colors.subtitle,
    lineHeight: 20,
    marginBottom: 15,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    left: 15,
    right: 15,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});