import { View, Text, Alert } from "react-native"
import {styles} from "./profile.style"
import api from "../../constants/api"
import { useContext, useEffect, useState } from "react"
import Button from "../../components/button/button"
import {AuthContext} from "../../contexts/auth"

function Profile(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const {setUser} = useContext(AuthContext)

    async function LoadProfile(){
        try {
            const response = await api.get("/users/profile")

            if (response.data?.name){
                setName(response.data?.name)
                setEmail(response.data?.email)
            }  
            
        } catch (error) {
            if(error.response?.data.error)
                Alert.alert(error.response.data.error)
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde!")
        }
    }

    function LogOut(){
        api.defaults.headers.common['Authorization'] = ""
        setUser({})
    }

    useEffect(() => {
        LoadProfile();
    })


    return <View style={styles.profile}>
        <View style={styles.item}>
            <Text style={styles.label}>Nome</Text>
            <Text style={styles.value}>{name}
            
            </Text>
        </View>
        <View View style={styles.item}>
            <Text style={styles.label}>E-mail</Text>
            <Text style={styles.value}>{email}</Text>
        </View>
        
        <View View style={styles.itemButton}>
            <Button  text="Desconectar" theme="danger" onPress={LogOut}/>
        </View>
    </View>
}

export default Profile