import { View, Image, FlatList } from "react-native"
import { styles } from '../abacalendar/calendar.style'
import icon from "../../constants/icon"
import {appointments} from "../../constants/data"
import Appointments from "../../components/appointments/appointments"


function Calendar (){
    return  <FlatList data={appointments}
                keyExtractor={(appoint) => appoint.id_appointment}
                showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return <Appointments 
                        service={item.service}
                        doctor={item.doctor}
                        specialty={item.specialty}
                        date={item.booking_date}
                        hour={item.booking_hour}
                    />
            }}
        />
    
}

export default Calendar