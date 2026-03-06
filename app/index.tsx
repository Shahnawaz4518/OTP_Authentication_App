import { Text, View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-2xl font-bold text-blue-500 bg-gray-300 p-2 rounded-lg">Authentication Page Using OTP</Text>
    </View>
  );
}
