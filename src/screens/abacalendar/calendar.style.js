import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        paddingTop: 70,
        paddingBottom: 70,
        paddingLeft: 30,
        paddingRight: 30,
    },
    containerLogo: {
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 23
    },
    text:{
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center"
        
    }

}