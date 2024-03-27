import { View, Text, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Trash from 'react-native-vector-icons/Feather';
import { useState } from "react";

import { styles } from "./styles";
import { TasksProps } from "../../screens/Home";

interface TaskProps {
    content: TasksProps;
    onDelete: (tasksId: string) => void;
    onComplete: (tasksId: string) => void;
}

export function Task({content, onDelete, onComplete}: TaskProps) {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onComplete(content.id)}>
                <View style={[styles.circle, !content.isCompleted && styles.circleChecked]}>
                    {content.isCompleted ? null: <Icon name="check" size={12} style={styles.check} />}
                </View>
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={[styles.text, !content.isCompleted && styles.checkedText]}>{content.content}</Text>
            </View>
            
            <TouchableOpacity onPress={() => onDelete(content.id)}>
                <Trash name="trash-2" size={20} style={styles.trashButton} />
            </TouchableOpacity>
        </View>
    )
}