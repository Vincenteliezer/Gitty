import React from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const ModalComponent = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View
        style={{
          flex: 1,
          padding: 14,
          backgroundColor: "#373e47",
          marginTop: 100,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          elevation: 8,
        }}
      >
        <TouchableOpacity onPress={onClose} style={{ alignSelf: "flex-end" }}>
          <EvilIcons name="close" size={24} color="gray" />
        </TouchableOpacity>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/images/adaptive-icon.png")}
              style={{ height: 150, width: 150 }}
            />
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
                fontFamily: "",
                letterSpacing: 5,
              }}
            >
              GITTY
            </Text>
            <Text
              style={{
                fontFamily: "",
                fontSize: 14,
                color: "gray",
                letterSpacing: 3,
                marginTop: 4,
              }}
            >
              V.1.0.23
            </Text>
            <Text
              style={{
                fontFamily: "",
                fontSize: 14,
                color: "gray",
                marginTop: 4,
              }}
            >
              Vincenteliezer
            </Text>
            <Text style={{ marginTop: 20, fontSize: 16, color: "white" }}>
              Welcome to the Gitty App!
            </Text>
            <Text
              style={{
                fontFamily: "",
                fontSize: 14,
                color: "#adbac7",
                marginTop: 10,
                lineHeight: 26,
                textAlign: "justify",
              }}
            >
              Gitty is a mobile application that allows you to explore GitHub
              users in Kenya. With Gitty, you can discover developers and their
              projects in kenya, helping you connect with fellow developers and
              explore the thriving GitHub community. Key Features: Search for
              GitHub users in Kenya specifically. View user profiles and their
              repositories. Infinite scrolling for effortless browsing
              User-friendly interface for a seamless experience. Whether you're
              looking for inspiration, collaboration, or simply want to connect
              with developers Kenya, Gitty is here to make your GitHub
              exploration more enjoyable and efficient.
            </Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ModalComponent;
