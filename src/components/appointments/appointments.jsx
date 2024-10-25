import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "./appointments.style"
import icon from "../../constants/icon"
import Button from "../button/button"


function Appointments(props) {

    
    const dt = new Date(props.date + "T" + props.hour)

    return <View style={styles.appointment}>
                <Text style={styles.title}>{props.service} - {props.doctor}</Text>
                <Text style={styles.specialty}>{props.specialty}</Text>
                <View style={styles.group}>
                    <View>
                    <View style={styles.line}>
                        <Image source={icon.calendar} style={styles.icon}/>
                        <Text style={styles.dateandtime}>{dt.toLocaleDateString()}</Text>
                    </View>
                    <View style={styles.line}>
                        <Image source={icon.clock} style={styles.icon}/>
                        <Text style={styles.dateandtime}>{props.hour}h</Text>
                    </View>
                    </View>
                    <View>
                        <Button text="Cancelar Agendamento"
                        theme="danger"
                        onPress={() => props.onPress(props.id_appointment)}
                        />
                    </View>
                </View>
                
             </View>
}

export default Appointments