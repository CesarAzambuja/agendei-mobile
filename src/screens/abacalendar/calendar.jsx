import {FlatList, Alert } from "react-native"
import Appointments from "../../components/appointments/appointments"
import { useEffect, useState } from "react"
import api from "../../constants/api"


function Calendar (){

    const [appointments, setAppointments] = useState({})

    async function LoadAppointments(){
        try {
            const response = await api.get("/appointments")

            if (response.data)
                setAppointments(response.data)
               
        
        } catch (error) {
            if(error.response?.data.error)
                Alert.alert(error.response.data.error)
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde!")
        }
    }

    async function DeteleAppointments(id_appointment){
        try {
            const response = await api.delete("/appointments/" + id_appointment)


            if (response.data?.id_appointment)
                LoadAppointments()
               
        
        } catch (error) {
            if(error.response?.data.error)
                Alert.alert(error.response.data.error)
            else
                Alert.alert("Ocorreu um erro ao cancelar. Tente novamente mais tarde!")
        }
    }


    useEffect(() => {
        LoadAppointments()
    }, [])


    return  <FlatList data={appointments}
                keyExtractor={(appoint) => appoint.id_appointment}
                showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return <Appointments 
                        id_appointment={item.id_appointment}
                        service={item.service}
                        doctor={item.doctor}
                        specialty={item.specialty}
                        date={item.booking_date}
                        hour={item.booking_hour}
                        onPress={DeteleAppointments}
                    />
            }}
        />
    
}

export default Calendar