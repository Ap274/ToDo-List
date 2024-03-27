import { StyleSheet } from "react-native";
import { colors } from "../../../colors";
import { fontFamily, fontSize } from "../../../fonts";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 55,
        paddingHorizontal: 24,
        paddingBottom: 20,
    },

    definitions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },

    definitionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10
    },

    created: {
        color: colors.blue,
        fontSize: fontSize.md,
        fontFamily: fontFamily.bold
    },
    
    done: {
        color: colors.purple,
        fontSize: fontSize.md,
        fontFamily: fontFamily.bold
    },

    numberContainer: {
        backgroundColor: colors.gray400,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10
    },

    text: {
        color: colors.gray200,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.sm
    },

    clipboard: {
        paddingVertical: 48,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 16,
    },
    
    image: {
        height: 56,
        width: 56
    },

    clipboardText: {
        color: colors.gray300,
        fontFamily: fontFamily.regular,
        fontSize: fontSize.md,
    },
    fontBold: {
        fontFamily: fontFamily.bold
    }
})