import { Text, TouchableOpacity, View,Image } from "react-native"
import styles from '../../../styles/notification-view'
import { router } from "expo-router"
const NewTokenCreated=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.tokenTopInfoContainer}>
                <View style={[styles.topTitleContainer,{backgroundColor:'#9b7239'}]}>
                        <Text style={styles.topTittleName}>Codigo de seguridad</Text>
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
                    <Text style={{fontWeight:'bold',textAlign:'center'}}>Tu código de seguridad se generará a través de tu Token móvil de forma automática</Text>
                    <View style={[styles.resumeInputBoxAmount,{borderBottomColor:'#000000',borderBottomWidth:1}]}>
                        <Text style={{width:'100%',height:'auto',textAlign:'center',fontWeight:'bold',fontSize:20}}>. . . . . . . </Text>
                    </View>
                </View>
                <View style={styles.tokenButtonsContainer}>
                    <TouchableOpacity style={styles.btnSizeDisplay}
                            onPress={()=>router.push('/movement/token/ticket/ticket')}
                            >
                            <Text style={{width:'auto',height:'auto',color:'#ffffff',fontWeight:'bold'}}>Confirmar</Text>                            
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