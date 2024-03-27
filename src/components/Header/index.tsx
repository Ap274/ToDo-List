import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/Logo.png')} alt="logo-todo" style={styles.logo} />
            </View>
        </View>
    )
}