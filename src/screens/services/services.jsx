import { View, Text, Image, FlatList } from "react-native"
import { styles } from '../services/services.style'
import icon from "../../constants/icon"
import { doctors_services } from './../../constants/data';
import Service from "../../components/serviceItem/service";


function Services (){
    return <View style={styles.container}>
        
        <View style={styles.banner}>
            <Image source={icon.female}/>
            <Text style={styles.name}>Nome</Text>
            <Text style={styles.specialty}>Especialidade</Text>
        </View>

        <FlatList data={doctors_services}
            keyExtractor={(serv) => serv.id_service}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <Service
                description={item.description}
                price={item.price}/>
            }}
        />
    </View>
}

export default Services