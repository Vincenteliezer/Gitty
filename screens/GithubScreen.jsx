import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { WebView } from "react-native-webview";
import NetInfo from "@react-native-community/netinfo";

const GithubScreen = () => {
  const [isConnected, setIsConnected] = useState(true);

  const route = useRoute();
  const { url } = route.params;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!isConnected ? (
        <Text
          style={{ color: "green", margin: 8, fontSize: 16, fontFamily: "" }}
        >
          No Internet Connection!
        </Text>
      ) : (
        <WebView
          style={{ flex: 1, backgroundColor: "#22272e" }}
          source={{ uri: url }}
          javaScriptEnabled
          domStorageEnabled={true}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default GithubScreen;
