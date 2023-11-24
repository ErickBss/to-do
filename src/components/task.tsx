import { SetStateAction, useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { TaskProps } from '../screens/home';

export function Task({
	task,
	setTask,
}: {
	task: TaskProps;
	setTask: React.Dispatch<SetStateAction<TaskProps[]>>;
}) {
	return (
		<View className="bg-g-500 rounded-md justify-between p-3 flex-row items-center border border-g-400 mb-3">
			<TouchableOpacity
				className={`w-5 h-5 rounded-full text-center justify-center items-center ${
					task.completed ? 'bg-purple-dark' : 'border-2 border-blue'
				}`}
				onPress={() => {
					setTask((prevState) =>
						prevState.map((item) => {
							if (item.id === task.id) {
								item.completed = !task.completed;
							}

							return item;
						}),
					);
				}}
			>
				{task.completed && <Feather name="check" color="#F2F2F2" size={12} />}
			</TouchableOpacity>
			<Text
				className={`text-base flex-1 mx-4 ${
					task.completed ? 'text-g-300 line-through' : 'text-g-100'
				}`}
			>
				{task.name}
			</Text>
			<TouchableOpacity
				onPress={() =>
					setTask((prevState) =>
						prevState.filter((item) => item.id !== task.id),
					)
				}
			>
				<Feather name="trash-2" size={24} color="#808080" />
			</TouchableOpacity>
		</View>
	);
}
