import { View, Text, Image, FlatList } from "react-native"
import { styles } from '../abahome/home.style'
import {doctors} from "../../constants/data"
import Doctor from "../../components/doctor/doctor"

function Home (props){

    function ClickDoctor(id_doctor, name, specialty, icon){
        props.navigation.navigate("services", {
            id_doctor, 
            name, 
            specialty, 
            icon
        })
    }

    return <View style={styles.container}>
        
        <Text style={styles.text}>Agende sua consulta médica!</Text>

        <FlatList data={doctors}
            keyExtractor={(doc) => doc.id_doctor}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <Doctor 
                    id_doctor={item.id_doctor}
                    name={item.name} 
                    icon={item.icon} 
                    specialty={item.specialty}
                    onPress={ClickDoctor}/>
            }}
        />
    </View>
}

export default Home