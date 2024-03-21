import { StyleSheet } from "react-native";
import { colors } from "../../../colors";

export const styles = StyleSheet.create({
    button: {
        padding: 0,
        borderRadius: 6,
        height: 52,
        width: 52,
        backgroundColor: colors.blueDark,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    icon: {
        color: 'white',
    },
})