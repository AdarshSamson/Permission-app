import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import colors from "../theme/colors";

const CustomHeader = ({ navigation, route, options }) => {

  const screenName = options?.title || route?.name ;


  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("MainTabs", { screen: "Profile" });
    }
  };

  return (
    <SafeAreaView  >
      <View style={styles.header}>

        <TouchableOpacity onPress={handleBackPress}>
          <Ionicons name="arrow-undo-outline" size={26} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>{screenName}</Text>
        <View style={styles.rightIcons}>
          <TouchableOpacity style={{ marginRight: 16 }}>
            <Ionicons name="help-circle-outline" size={24} color={colors.primary} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={{ uri: "https://i.pravatar.cc/100" }}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
    marginHorizontal: 8, 
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
});