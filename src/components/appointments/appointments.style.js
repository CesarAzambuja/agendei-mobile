import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    appointment: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12, 
        borderWidth: 1,
        borderColor: COLORS.gray4,
    
    },
    title:  {
        fontSize: FONT_SIZE.lg,
        color: COLORS.gray1,
        marginBottom: 2
        
    },
    icon:  {
        width: 30,
        height: 30,
        marginRight: 8

    },
    specialty:  {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 12
        
    },
    line: {
        flex: 1,
        color: COLORS.gray3,
        flexDirection: "row",
        alignItems: "center",
        
    },

    group: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",   
    },
    dateandtime:{
        color: COLORS.gray2
    }


}