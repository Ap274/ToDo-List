import { StyleSheet } from "react-native";

import { colors } from "../../../colors";

export const styles = StyleSheet.create({
    container: {
        height: 173,
        width: "100%",
        backgroundColor: colors.gray700,
        justifyContent: "center",
        alignItems: "center",
    },

    logoContainer: {
        position: "absolute",
    },

    logo: {
        width: 110,
        height: 32,
        resizeMode: "contain"
    },

    newTaskContainer: {
        marginTop: 169,
    },
})