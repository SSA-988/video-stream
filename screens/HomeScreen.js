import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,

} from "react-native";
import { WebView } from "react-native-webview";
import React, { useEffect, useState, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Video } from "expo-av";
const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
   const video = React.useRef(null);
   const [status, setStatus] = React.useState({});
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const movieData = async () => {
      await fetch(`https://private-c31a5-task27.apiary-mock.com/videos`)
        .then((response) => response.json())
        .then((data) => setMovies(data.videos));
    };
    movieData();
  }, []);
  return (
    <>
      <FlatList
        numColumns={2}
        data={movies}
        renderItem={({ item, id }) => (
          <>
            <Pressable onPress={() => setModal(true)} key={id}>
              <Image
                source={{ uri: item.thumbnail_url }}
                style={{ width: 170, height: 160, margin: 10 }}
              />
            </Pressable>
            <Modal
              animationType="slide"
              visible={modal}
              transparent={true}
              onCloseRequest={() => setModal(false)}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  //   backgroundColor: "rgba(0,0,0,0.7)",
                }}
              >
                <Pressable
                  onPress={() => setModal(false)}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AntDesign
                    style={{ paddingBottom: 10 }}
                    name="closecircle"
                    size={34}
                    color="black"
                  />
                </Pressable>

                <View
                  style={{
                    backgroundColor: "white",
                    height: 500,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}
                >
                  <View style={{ flex: 1, backgroundColor: "yellow" }}>
                    <WebView
                      javaScriptEnabled={true}
                      style={{
                        flex: 1,
                        borderColor: "red",
                        borderWidth: 1,
                        height: 400,
                        width: 400,
                      }}
                      source={{
                        uri: item.video_url,
                      }}
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </>
        )}
      />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
