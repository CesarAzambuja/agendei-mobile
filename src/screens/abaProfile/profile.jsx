import { View, Text } from "react-native"
import {styles} from "./profile.style"

function Profile(){
    return <View style={styles.profile}>
        <View style={styles.item}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.value}>César Azambuja</Text>
        </View>
        <View View style={styles.item}>
        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.value}>cesar@email.com.br</Text>
        </View>
        
        
    </View>
}

export default Profile