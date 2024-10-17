import { View, Text, Image, FlatList } from "react-native"
import { styles } from '../abahome/home.style'
import icon from "../../constants/icon"
import {doctors} from "../../constants/data"
import Doctor from "../../components/doctor/doctor"

function Home (){
    return <View style={styles.container}>
        
        <Text style={styles.text}>Agende sua consulta médica!</Text>

        <FlatList data={doctors}
            keyExtractor={(doc) => doc.id_doctor}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <Doctor 
                    name={item.name} 
                    icon={item.icon == "M" ? icon.male : icon.female} 
                    specialty={item.specialty}/>
            }}
        />
    </View>
}

export default Home