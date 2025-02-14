import { Text, TouchableOpacity, View,Image } from "react-native"
import styles from '../../../styles/notification-view'
import { router } from "expo-router"
const NewTokenCreated=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.tokenTopInfoContainer}>
                <View style={[styles.topTitleContainer,{backgroundColor:'#9b7239'}]}>
                        <Text style={styles.topTittleName}>Transfeir & Dimo</Text>
                        <TouchableOpacity 
                            style={styles.cancelBtnTop}
                            onPress={()=>router.back()}>
                            <Image source={require('../../../assets/images/x.png')} style={{width:20,height:20,tintColor:'#ffffff'}} resizeMode="cover"/>                                        
                        </TouchableOpacity>
                </View>
                <View style={{width:150,height:'70%',borderWidth:1,borderColor:'#000000'}}></View>
            </View>
            <View style={styles.tokenInfoContainer}>
                <View style={styles.tokenMainInfo}>
                    <Text>Tu codigo de seguridad se generara a traves de tu Token movil de forma automatica</Text>
                    <View style={{width:150,height:50,borderWidth:1,borderColor:'#000000'}}></View>
                </View>
                <View style={styles.tokenButtonsContainer}>
                    <TouchableOpacity style={styles.btnSizeDisplay}>
                            <Text style={{width:'auto',height:'auto',color:'#ffffff',fontWeight:'bold'}}>Continuar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnSizeDisplay,{backgroundColor:'#ffffff'}]}>
                            <Text style={{width:'auto',height:'auto',color:'#55aee8',fontWeight:'bold'}}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default NewTokenCreated