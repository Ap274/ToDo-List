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
        justifyContent: "space-between"
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
        color: colors.gray200
    }
})