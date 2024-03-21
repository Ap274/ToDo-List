import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

export function Button() {
    return (
        <TouchableOpacity onPress={() => console.log('Botão pressionado')} style={styles.button}>
            <View style={styles.container}>
                <AntDesign name="pluscircleo" size={16} style={styles.icon} />
            </View>
        </TouchableOpacity>
    );
}
