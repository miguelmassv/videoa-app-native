import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

function Loader(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  }
});

export default Loader;
