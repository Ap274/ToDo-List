import { StyleSheet } from "react-native";
import { colors } from "../../../colors";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },

    input: {
        backgroundColor: colors.gray500,
        width: 271,
        height: 53,
        padding: 16,
        color: colors.gray100,
        borderRadius: 6,
    },
})