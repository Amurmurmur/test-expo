import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants, { ExecutionEnvironment } from "expo-constants";
import * as Sentry from "sentry-expo";
import { useEffect } from "react";

Sentry.init({
  environment: Constants?.expoConfig?.extra?.sentryEnvironment,
  dsn: Constants?.expoConfig?.extra?.sentryDsn,
  enableInExpoDevelopment: true,
  debug: true,
});

export default function App() {
  useEffect(() => {
    Promise.allSettled([]);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
