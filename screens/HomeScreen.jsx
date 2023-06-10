import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { SimpleLineIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=location:Kenya&page=${page}&per_page=100`
      );
      const data = await response.json();

      if (data && data.items && data.items.length > 0) {
        const usersData = data.items; // Array of GitHub users in Kenya
        setUsers((prevUsers) => [...prevUsers, ...usersData]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching GitHub users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  // Search users function
  const handleSearch = (query) => {
    setSearchQuery(query);
    // Filter the users based on search query
    const filteredUsers = users.filter((user) =>
      user.login.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  };

  // Total count of all results
  const getTotalUsers = () => {
    const totalUsers = searchQuery ? filteredUsers.length : users.length;
    return totalUsers;
  };

  // Loading Component
  const renderEmptyList = () => (
    <View style={{ padding: 8 }}>
      <Text style={{ color: "gray" }}>Empty!</Text>
    </View>
  );

  // Navigate to Github Screen - Dynamic github url
  const navigateToWebView = (url) => {
    navigation.navigate("Github", { url });
  };

  const renderUserItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigateToWebView(item.html_url)}
      style={{
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2d333b",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: item.avatar_url }}
      />
      <View style={{}}>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            marginHorizontal: 14,
          }}
        >
          Username
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#adbac7",
            marginHorizontal: 14,
            marginTop: 8,
          }}
        >
          @ {item.login}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#2d333b",
          paddingHorizontal: 14,
          paddingVertical: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <SimpleLineIcons name="social-github" size={22} color="white" />
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "white",
                marginLeft: 6,
                fontFamily: "",
              }}
            >
              Gitty
            </Text>
          </View>

          <Text style={{ color: "white" }}>Results: {getTotalUsers()}</Text>
        </View>

        <TextInput
          cursorColor={"white"}
          placeholderTextColor={"gray"}
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            paddingLeft: 12,
            borderRadius: 10,
            marginTop: 8,
            color: "gray",
            fontSize: 16,
          }}
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <View style={{ backgroundColor: "#22272e", flex: 1 }}>
        <FlashList
          data={searchQuery ? filteredUsers : users}
          renderItem={renderUserItem}
          estimatedItemSize={1000}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          onEndReached={fetchUsers}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={renderEmptyList}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
