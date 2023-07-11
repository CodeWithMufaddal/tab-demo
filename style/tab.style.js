import { StyleSheet } from "react-native";
import { COLORS, SIZES, images } from "../constants";

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },

    TabContainer: {
        height: 80,
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",

        position: 'absolute',
        borderTopWidth: 0,
        elevation: 0,
    },

    Tabs: {
        // marginBottom: "auto", marginTop: "auto", marginLeft: "auto", marginRight: "auto",
        marginHorizontal: SIZES.xSmall,
        fontSize: 14,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "white",
        paddingHorizontal: 14,
        paddingVertical: 7,
    },

    backgroundImage: {
        flex: 1,
        color: COLORS.lightWhite,
        backgroundColor: "red",
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    safeAreaView: {
        backgroundColor: "rgba(0,0,0,0.7)",
        flex: 1,
    },
    headerStyle: {
        flex: 1,
        backgroundColor: "none",
    },
    logo: {
        width: 100,
        height: 100,
        // backgroundColor: COLORS.white,
        // borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
        marginRight: SIZES.xSmall
    },
    container: {
        width: 100,
        height: 100,
        // backgroundColor: COLORS.white,
        // borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
        marginRight: SIZES.xSmall
    },
});

export default styles;
