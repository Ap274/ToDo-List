import { TextInput, View } from "react-native";

import { Button } from "../Button";

import { styles } from "./styles";
import { colors } from "../../../colors";

export function NewTask() {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={colors.gray300}
            />

            <Button />
        </View>
    )
}