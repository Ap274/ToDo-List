import { Text, View } from "react-native";
import { styles } from "./styles";

export function Tasks() {
    return (
        <View style={styles.container}>
            <View style={styles.definitions}>
                <View style={styles.definitionsContainer}>
                    <Text style={styles.created}>Criadas</Text>
                    <View style={styles.numberContainer}>
                        <Text style={styles.text}>0</Text>
                    </View>
                </View>
                <View style={styles.definitionsContainer}>
                    <Text style={styles.done}>Concluídas</Text>
                    <View style={styles.numberContainer}>
                        <Text style={styles.text}>0</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}