import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { SetStateAction, useState } from 'react';
import { TaskProps } from '../screens/home';

function getId() {
	return Math.floor(Math.random() * 1000);
}

export function Header({
	addTask,
}: {
	addTask: React.Dispatch<SetStateAction<TaskProps[]>>;
}) {
	const [task, setTask] = useState('');

	return (
		<View className="p-4 bg-g-700 h-40 mb-10 pt-8">
			<View className="flex-row items-center justify-center">
				<FontAwesome name="rocket" size={25} color="#4EA8DE" />
				<Text className="text-blue text-4xl font-extrabold ml-2">
					to
					<Text className="text-purple-dark">do</Text>
				</Text>
			</View>

			<View className="flex-row mt-14">
				<TextInput
					className="bg-g-500 text-g-100 rounded-md p-3 flex-1 text-base border-g-100 focus:border focus:border-purple-dark"
					value={task}
					onChangeText={(text) => setTask(text)}
					placeholder="Adicione uma nova tarefa"
					placeholderTextColor="#808080"
				/>

				<TouchableOpacity
					className="bg-blue-dark justify-center items-center p-4 rounded-md ml-1"
					onPress={() => {
						if (task) {
							addTask((prevState) => [
								{ name: task, completed: false, id: getId() },
								...prevState,
							]);
							setTask('');
						}
					}}
				>
					<Feather name="plus-circle" size={18} color="#F2F2F2" />
				</TouchableOpacity>
			</View>
		</View>
	);
}
