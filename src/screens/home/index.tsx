import {
	FlatList,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { Header } from '../../components/header';
import { EmptyList } from '../../components/emptyList';
import { Task } from '../../components/task';
import { useState } from 'react';

export type TaskProps = {
	id: number;
	name: string;
	completed: boolean;
};

export function Home() {
	const [tasks, setTask] = useState<TaskProps[]>([]);

	return (
		<>
			<Header addTask={setTask} />

			<View className="p-4 ">
				<View className="flex-row justify-between">
					<View className="flex-row items-center">
						<Text className="text-blue font-bold text-base">Criadas</Text>
						<Text className="bg-g-400 text-g-100 text-sm ml-2 rounded-full text-center w-7 font-bold">
							{tasks?.length}
						</Text>
					</View>
					<View className="flex-row items-center">
						<Text className="text-purple font-bold text-base">Concluídas</Text>
						<Text className="bg-g-400 text-g-100 text-sm ml-2 rounded-full text-center w-7 font-bold">
							{tasks?.filter((task) => task?.completed)?.length}
						</Text>
					</View>
				</View>
			</View>

			<FlatList
				className="p-4"
				data={tasks}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => <EmptyList />}
				renderItem={({ item }) => (
					<Task key={item.id} task={item} setTask={setTask} />
				)}
			/>
		</>
	);
}
