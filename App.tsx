import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Home } from './src/screens/home';

export default function App() {
	return (
		<>
			<View className="flex-1 bg-g-600 ">
				<Home />
			</View>
			<StatusBar style="light" />
		</>
	);
}
