import { Alert, View } from "react-native";
import { useState } from "react";

import { Header } from "../../components/Header";
import { TaskSection } from "../../components/TaskSection";
import { NewTask } from "../../components/NewTask";

import { styles } from "./styles";

export interface TasksProps {
    id: string,
    content: string,
    isCompleted: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<TasksProps[]>([]);

    function addTasks(taskContent: string) {
        setTasks([...tasks,
        {
            id: Math.random().toString(),
            content: taskContent,
            isCompleted: false,
        }])
    }

    function deleteTask(tasksId: string) {
        Alert.alert('Remover', `Você deseja remover esta tarefa?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(tasks => tasks.id !== tasksId))

            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function completeTask(taskId: string) {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted
                };
            }
            return task;
        });
        setTasks(newTasks);
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.newTaskContainer}>
                <NewTask onAddTask={addTasks}/>
            </View>
            <TaskSection 
                tasks={tasks} 
                onDelete={deleteTask}
                onComplete={completeTask}
            />
        </View>
    )
}