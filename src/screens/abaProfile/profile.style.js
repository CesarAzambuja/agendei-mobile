import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    profile: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 12, 
    },
    label:{
        fontSize: FONT_SIZE.md,
        color: COLORS.gray3,
        padding: 8
    },
    value:{
        fontSize: FONT_SIZE.lg,
        color: COLORS.gray1,
        padding: 8
    },
    item:{
        borderWidth: 1,
        borderColor: COLORS.gray3,
        paddingLeft: 8,
        paddingTop: 15,
        paddingBottom: 15
    }
}