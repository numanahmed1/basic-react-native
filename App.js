import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView,StyleSheet, Text, View, Image, TextInput } from "react-native";
import User from "./components/User/User";

export default function App() {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ScrollView>

   
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 40, marginTop: 40 }}>Hello, Fahiyan</Text>
      <Text style={{ color: "white", fontSize: 25, marginTop: 15 }}>
        You have {users.length} friends
      </Text>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat2.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput
        style={{
          width: 200,
          height: 50,
          borderColor: "gray",
          borderWidth: 1,
          color: "white",
        }}
        onChangeText={(text) => setText(text)}
        placeholder="Enter your value..."
      />
      <Text style={{ color: "white", fontSize: 20 }}>{text}</Text>
      {users.map((user) => (
        <User  user={user} key={user.id}></User>
      ))}
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    paddingBottom: 40,
    borderColor: "purple",
    borderWidth: 10,
    marginTop:25
  },
});
