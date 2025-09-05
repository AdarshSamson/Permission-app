import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";

const MAX_CHARS = 30;

const CustomDropdown = ({ label, data, onSelect, selectedValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedValue || "");

  const handleSelect = (item) => {
    setSelected(item.label);
    onSelect(item);
    setIsOpen(false);
  };


  const getDisplayText = () => {
    if (!selected) return "";
    return selected.length > MAX_CHARS
      ? selected.substring(0, MAX_CHARS) + "..."
      : selected;
  };

  return (
    <View style={{ marginVertical: 10 }}>

      <TouchableOpacity onPress={() => setIsOpen(true)} activeOpacity={0.9}>
        <TextInput
          label={label}
          value={getDisplayText()}
          underlineColor="transparent"
          editable={false}
          mode="outlined"
          style={styles.input}
          right={
            <TextInput.Icon
              icon={() => (
                <EvilIcons
                  name={isOpen ? "chevron-up" : "chevron-down"}
                  size={24}
                  color="#9CA3AF"
                />
              )}
            />
          }
        />
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPressOut={() => setIsOpen(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.option,
                    selected === item.label && styles.selectedOption,
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.optionText}
                  >
                    {item.label}
                  </Text>
                  {selected === item.label && (
                    <EvilIcons name="check" size={20} color="#3B82F6" />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 22,
    backgroundColor: "#fff",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    paddingHorizontal: 20,

  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 8,
    maxHeight: 300,
  },
  option: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#F9FAFB",
  },
  optionText: {
    fontSize: 16,
    color: "#111827",
  },
});

export default CustomDropdown;
