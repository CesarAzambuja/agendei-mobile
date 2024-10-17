import {  Text, View } from "react-native"
import {styles} from "./service.style"
import Button from './../button/button';


function Service(props) {
    return <View style={styles.card}>
        <View>
            <Text style={styles.service}>{props.description}</Text>
            <Text style={styles.price}>{props.price}</Text>
        </View>

       <View>
        <Button text="Agendar"/>
        </View> 

    </View>

}

export default Service