import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function App() {
  return (
    <StyledView className="flex-1 justify-center items-center bg-blue-600">
    <StyledText className="text-xl font-bold text-white">
      Hello, NativeWind!
    </StyledText>
  </StyledView>
  );
}
