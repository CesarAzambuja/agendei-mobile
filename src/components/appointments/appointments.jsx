import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "./appointments.style"
import icon from "../../constants/icon"
import Button from "../button/button"


function Appointments(props) {
    return <View style={styles.appointment}>
                <Text style={styles.title}>{props.service} - {props.doctor}</Text>
                <Text style={styles.specialty}>{props.specialty}</Text>
                <View style={styles.group}>
                    <View>
                    <View style={styles.line}>
                        <Image source={icon.calendar} style={styles.icon}/>
                        <Text style={styles.dateandtime}>{props.date}</Text>
                    </View>
                    <View style={styles.line}>
                        <Image source={icon.clock} style={styles.icon}/>
                        <Text style={styles.dateandtime}>{props.hour}</Text>
                    </View>
                    </View>
                    <TouchableOpacity>
                        <Button text="Cancelar Agendamento"
                        theme="danger"
                        />
                    </TouchableOpacity>
                </View>
                
             </View>
}

export default Appointments