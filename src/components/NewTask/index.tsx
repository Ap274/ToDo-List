import { Alert, TextInput, View } from "react-native";
import { useState } from "react";

import { Button } from "../Button";

import { styles } from "./styles";
import { colors } from "../../../colors";


type Props = {
    onAddTask: (content: string) => void
}

export function NewTask({onAddTask}: Props) {
    const [content, setContent] = useState("");
    
    function handleContentAdd() { 
        if (content.trim() === "") {
            return Alert.alert('Atenção', "Insira uma nova tarefa no seu ToDo List")
        }

        onAddTask(content);
        setContent("");
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={colors.gray300}
                value={content}
                onChangeText={setContent}
            />

            <Button onPress={handleContentAdd}/>
        </View>
    )
}