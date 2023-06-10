import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const GithubScreen = () => {
  const route = useRoute();
  const { url } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1, backgroundColor: "#22272e" }}
        source={{ uri: url }}
        javaScriptEnabled
        domStorageEnabled={true}
        allowsBackForwardNavigationGestures
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default GithubScreen;
