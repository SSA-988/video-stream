import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const signIn = () => {
    navigation.navigate("Home");
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
      }}
    >
      <Text style={{fontWeight: "bold",fontSize:20,paddingBottom:20}}>Welcome to Video stream</Text>
      <View style={{ width: 300 }}>
        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          autoFocus
          type="email"
        />
        <Input
          value={password}
          onChangeText={(text) => setpassword(text)}
          placeholder="Password"
          secureTextEntry
          type="password"
          onSubmitEditing={signIn}
        />
      </View>
      <Button
        containerStyle={{ width: 200, marginTop: 6 }}
        disabled={!password || !email}
        onPress={signIn}
        title="Login"
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
