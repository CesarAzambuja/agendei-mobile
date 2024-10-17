import {  Text, View } from "react-native"
import {styles} from "./service.style"
import Button from './../button/button';


function Service(props) {
    return <View style={styles.card}>
        <View>
            <Text style={styles.service}>{props.description}</Text>
            <Text style={styles.price}>
                {
                    new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(props.price)
                }
            </Text>
        </View>

       <View>
        <Button text="Agendar"/>
        </View> 

    </View>

}

export default Service