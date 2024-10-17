import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
    },
    banner:{
        backgroundColor: COLORS.blue,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 100,
        paddingBottom: 25
    },
    name:  {
        fontSize: FONT_SIZE.lg,
        color: COLORS.white,
        marginTop: 10,
        fontWeight: "bold"
        
    },
    
    specialty:  {
        fontSize: FONT_SIZE.md,
        color: COLORS.white,
        marginTop: 3
        
    },

}