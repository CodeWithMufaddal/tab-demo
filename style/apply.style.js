import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES, images } from "../constants";

const applyStyles = StyleSheet.create({
    applyHeader: {
        flexDirection: "row",
        borderColor: "red",
        justifyContent: "space-between",
        paddingVertical: 10,
        height: 63,
        marginVertical: 11
    },
    tabText: {

        fontFamily: FONT.medium,
    },

    tab: {
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 120,
        borderRadius: 100,
        backgroundColor: "#3097FC",
    },
    status: (color) => ({
        paddingVertical: 10,
        paddingHorizontal: 12,
        display: "flex",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: color == "Pending" ? "#FFA500" : color == "Approved" ? "#408E40" : "#FF0000",
        
    }),

    applyButton: {
    },
    scanTab: {
        alignItems: "center",
        padding: 10,
        width: 120,
        justifyContent: "center",
        flex: 1,
    },



    // Scroll data
    applyContainer: {
        margin: 5,
        padding: 10

    },
    applyDateBox: {
        paddingVertical: SIZES.xxSmall,
        paddingHorizontal: SIZES.medium,
        // margin: SIZES.xxSmall,
    },
    messageBox: {
        margin: SIZES.small,
    },
    message: {
        fontFamily: FONT.medium,
        flex: 1,
        textAlign: "center",
        fontSize: 14,
    },
    dates: {
        fontFamily: FONT.medium,
        fontSize: 12,
    },

    // history
    hrLineHorizontal: {
        // backgroundColor: COLORS.hrLineColor,
        borderRightColor: COLORS.hrLineColor,
        borderRightWidth: 1,
        height: 45,
        width: 1, 
        marginHorizontal: 10,

        alignItems: "center",
        justifyContent: "center",
    },

    mainDetailsContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    innerDetailsContainer: {
        flexDirection: "row",
        flex:1,
    },
    grayText: {
        fontFamily: FONT.medium,
        color: COLORS.gray,
        marginHorizontal: 5,
    },
    detailText: {
        fontFamily: FONT.bold,
    },
    bottomApplyDate:{
        position: "absolute",
        right: 0,
        fontFamily: FONT.bold,
        fontSize: 10,
    },


    // Modal
    Modal:{
        padding: 10,
        marginHorizontal: SIZES.small,
        borderRadius: SIZES.IVSmall,

        elevation: 20,
        shadowColor: '#52006A',
    },
    ModalText: {
        marginVertical: 15,
        textAlign: "center",
        fontFamily: FONT.medium,
        fontSize: 14,
    },

    card: {  
       
      },  
      shadowProp: {  
      
      },  
});

export default applyStyles;
