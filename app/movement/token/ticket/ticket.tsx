import { Text, TouchableOpacity, View,Image, StatusBar } from "react-native"
import styles from '../../../../styles/notification-view'
import { router } from "expo-router"

const OperationTicket=()=>{
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#038715"/>
            <View style={styles.topBoxInformationTicket}>
                <View style={[styles.topTitleContainer,{backgroundColor:'#038715'}]}>
                        <Text style={styles.topTittleName}>Transferir</Text>
                        <TouchableOpacity 
                            style={styles.cancelBtnTop}
                            onPress={()=>router.back()}>
                            <Image source={require('../../../../assets/images/x.png')} style={{width:20,height:20,tintColor:'#ffffff'}} resizeMode="cover"/>                                        
                        </TouchableOpacity>
                </View>
                <View style={styles.topBoxBigInfoTicket}>
                    <Text style={{width:'auto',height:'auto',fontSize:16,fontWeight:'bold',color:'#ffffff'}}>Operacion exitosa</Text>
                    <Text style={{width:'auto',height:'auto',fontSize:14,fontWeight:'bold',color:'#ffffff',fontStyle:'italic'}}>27 de enero 2025 13:19:05 h</Text>
                    <Text style={{width:'auto',height:'auto',fontSize:16,color:'#ffffff',fontWeight:100}}>Importe a transferir</Text>
                    <Text style={{width:'auto',height:'auto',fontSize:24,color:'#ffffff'}}>$1.00</Text>                               
                    <Text style={{width:'auto',height:'auto',fontSize:14,fontWeight:100,color:'#ffffff',fontStyle:'italic'}}>Comision $0.00</Text>
                </View>
            </View>
            <View style={styles.bottomBoxInformationTicket}>
                <View style={styles.btnGif}></View>
                <View style={styles.bottomBoxBigInfoTicket}>
                    <View>
                        <Text>info</Text>
                    </View>
                    <View>
                        <Text>info</Text>
                    </View>
                    <View>
                        <Text>info</Text>
                    </View>
                    <View>
                        <Text>info</Text>
                    </View>
                    <View>
                        <Text>info</Text>
                    </View>
                    <View>
                        <Text>info</Text>
                    </View>
                    <View>
                        <Text>info</Text>
                    </View>                    
                </View>
            </View>
        </View>
    )
}
export default OperationTicket