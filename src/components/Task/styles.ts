import { StyleSheet } from "react-native";
import { colors } from "../../../colors";
import { fontFamily, fontSize } from "../../../fonts";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center", 
        gap: 8,
        paddingRight: 8,
        paddingVertical: 12,
        paddingLeft: 12,
        borderWidth: 1, 
        borderColor: colors.gray400,
        borderRadius: 8,
        marginBottom: 12,
        backgroundColor: colors.gray500
    },

    circle: {
        width: 18,
        height: 18,
        borderRadius: 99,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.75,
        borderColor: colors.blue, 
    },

    circleChecked: {
        backgroundColor: colors.purpleDark, 
        borderColor: colors.purpleDark,
    },

    check: {
        color: colors.gray100,
    },

    text: {
        color: colors.gray100,
        fontFamily: fontFamily.regular,
        fontSize: fontSize.md,
    },

    checkedText: {
        textDecorationLine: "line-through",
        color: colors.gray300,
    },

    textContainer: {
        flex: 1, 
    },

    trashButton: {
        color: colors.gray300
    }
})