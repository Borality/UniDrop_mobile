import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from "./navigation/index";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation/>
    </SafeAreaProvider>
  );
}

