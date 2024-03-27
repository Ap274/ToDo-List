import { Text, View, Image } from "react-native";

import { Task } from "../Task";

import { styles } from "./styles";

export function TaskSection() {
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


            <View>
                <Task />
                <Task />
                <Task />

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
            </View>

        </View>
    )
}