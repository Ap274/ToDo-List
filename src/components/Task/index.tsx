import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Trash from 'react-native-vector-icons/Feather';
import { useState } from "react";

import { styles } from "./styles";

export function Task() {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheck = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleCheck}>
                <View style={[styles.circle, isChecked && styles.circleChecked]}>
                    {isChecked && <Text><Icon name="check" size={8} style={styles.check} color="white" /></Text>}
                </View>
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.text}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</Text>
            </View>
            
            <TouchableOpacity>
                <Trash name="trash-2" size={20} style={styles.trashButton} />
            </TouchableOpacity>
        </View>
    )
}