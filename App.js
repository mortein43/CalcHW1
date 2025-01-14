import Convert from "./components/Convert";
import Figures from "./components/Figures";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Convert />
        <Figures />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
