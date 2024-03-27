import { View } from "react-native";
import { Header } from "../../components/Header";
import { TaskSection } from "../../components/TaskSection";

import { styles } from "./styles";

export function Home() {
    
    return (
        <View style={styles.container}>
            <Header />
            <TaskSection/>
        </View>
    )
}