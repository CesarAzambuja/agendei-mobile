import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-around"
    }, 
    theme: {
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: COLORS.blue,
        selectedDayTextColor: '#ffffff',
        todayTextColor: COLORS.blue,
        dayTextColor: '#2d4150',
        textDisabledColor: COLORS.gray4
    },
    hour:{
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.gray2,
        marginTop: 20,
        marginButtom: 20
    },
    btn:{
         marginTop: 30
    }
}