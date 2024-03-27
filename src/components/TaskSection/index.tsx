import { Text, View, Image, FlatList } from "react-native";

import { Task } from "../Task";
import { TasksProps } from "../../screens/Home";

import { styles } from "./styles";

interface Props {
    tasks: TasksProps[];
    onDelete: (tasksId: string) => void;
    onComplete: (tasksId: string) => void;
}

export function TaskSection({tasks, onDelete, onComplete}: Props) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter((tasks) => !tasks.isCompleted).length

    const reversedTasks = tasks.slice().reverse();

    return (
        <View style={styles.container}>
            <View style={styles.definitions}>
                <View style={styles.definitionsContainer}>
                    <Text style={styles.created}>Criadas</Text>
                    <View style={styles.numberContainer}>
                        <Text style={styles.text}>{tasksQuantity}</Text>
                    </View>
                </View>
                <View style={styles.definitionsContainer}>
                    <Text style={styles.done}>Concluídas</Text>
                    <View style={styles.numberContainer}>
                        <Text style={styles.text}>{completedTasks}</Text>
                    </View>
                </View>
            </View>

            <View>
                <FlatList 
                    data={reversedTasks}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Task 
                            key={item.id}
                            content={item}
                            onDelete={onDelete} 
                            onComplete={onComplete}
                        />
                    )}
                    showsVerticalScrollIndicator={false}

                    // Caso não tenha nenhum item na lista de ToDo, podemos utilizar a propriedade ListEmptyComponent
                    ListEmptyComponent={() => (
                        <View style={styles.clipboard}>  
                            <Image source={require('../../assets/Clipboard.png')} style={styles.image}/>
                            <View>
                                <Text style={[styles.clipboardText, styles.fontBold]}>
                                    Você ainda não tem tarefas cadastradas
                                </Text>
                                <Text style={styles.clipboardText}>
                                    Crie tarefas e organize seus itens a fazer
                                </Text>
                            </View>
                        </View>
                    )}
                />
            </View>

        </View>
    )
}