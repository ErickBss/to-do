import { Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export function EmptyList() {
	return (
		<View className="items-center border-t-2 border-g-400 py-8">
			<Feather name="clipboard" size={80} color="#333333" />
			<Text className="font-bold text-g-300 text-base mt-4">
				Você ainda não tem tarefas cadastradas
			</Text>
			<Text className=" text-g-300 text-base">
				Crie tarefas e organize seus itens a fazer
			</Text>
		</View>
	);
}
