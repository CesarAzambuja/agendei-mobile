import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    card: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.white,
        padding: 20,
        flexDirection: "row",  
        borderWidth: 1,
        borderColor: COLORS.gray4,
    },
    service:  {
        fontSize: FONT_SIZE.lg,
        color: COLORS.gray2,
        marginTop: 10,
        marginBottom: 5  
    },
    price:  {
        fontSize: FONT_SIZE.md,
        color: COLORS.blue,
    },

}