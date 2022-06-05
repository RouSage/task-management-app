import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider } from "native-base";
import theme from "./theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style={"auto"} />
      <Box>Hello world!</Box>
    </NativeBaseProvider>
  );
}
