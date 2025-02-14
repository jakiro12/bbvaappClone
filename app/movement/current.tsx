import { Text, View } from "react-native"
import styles from '../../styles/notification-view'
import { TouchableOpacity } from "react-native"
import { router } from "expo-router"
import { Image } from "react-native"
const SeeLastMovement=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.topTitleContainer}>
                    <Text style={styles.topTittleName}>Transfeir & Dimo</Text>
                    <TouchableOpacity 
                        style={styles.cancelBtnTop}
                        onPress={()=>router.back()}>
                        <Image source={require('../../assets/images/x.png')} style={{width:20,height:20,tintColor:'#ffffff'}} resizeMode="cover"/>                                        
                    </TouchableOpacity>
                </View>
                <View style={styles.mainInformationDisplay}>
                    <View style={styles.mainBoxesBigInfo}>
                        <View style={styles.mainBoxesBigInfoTitle}>
                            <Text style={{width:'100%',height:'auto',textAlign:'left',color:'#ffffff',fontWeight:'bold'}}>ORIGEN</Text>
                        </View>
                        <View style={styles.mainBoxesBigInfoData}>
                            <View style={[styles.mainBoxesBigInfoDataDisplay,{alignItems:'flex-start'}]}>
                                <Text style={{width:'auto',height:'auto',color:'#ffffff',fontWeight:'bold'}}>Aranza Castillo</Text>
                                <Text style={{width:'auto',height:'auto',color:'#ffffff',fontStyle:'italic'}}>*90878</Text>
                            </View>
                            <View style={[styles.mainBoxesBigInfoDataDisplay,{alignItems:'flex-end'}]}>
                                <Text style={{width:'auto',height:'auto',color:'#ffffff',fontSize:20}}>$1,388.33</Text>
                                <Text style={{width:'auto',height:'auto',color:'#ffffff'}}>Saldo disponible</Text>                               
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainBoxesBigInfo}>
                        <View style={styles.mainBoxesBigInfoTitle}>
                            <Text style={{width:'auto',height:'auto',textAlign:'left',color:'#ffffff',fontWeight:'bold'}}>DESTINATARIO</Text>
                            <TouchableOpacity style={{width:'auto',height:'auto'}}>
                                <Text style={{width:'auto',height:'auto',fontWeight:'bold',color:'#55aee8',fontSize:16}}>Cambiar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.mainBoxesBigInfoData}>
                            <View style={{width:40,height:40,borderColor:'#000000',borderWidth:2,borderRadius:40}}></View>
                            <View style={[styles.mainBoxesBigInfoDataDisplay,{alignItems:'flex-start',width:'80%'}]}>
                                <Text style={{width:'auto',height:'auto',color:'#ffffff',fontWeight:'bold'}}>prueba</Text>
                                <Text style={{width:'auto',height:'auto',color:'#ffffff',fontStyle:'italic'}}>4152313458243625</Text>
                                    <Text style={{width:'auto',height:'auto',color:'#ffffff',fontStyle:'italic'}}>BANAMEX</Text>                               
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainBoxesBigInfo}>
                        <View style={styles.mainBoxesBigInfoTitle}>
                            <Text style={{width:'auto',height:'auto',textAlign:'left',color:'#ffffff',fontWeight:'bold'}}>IMPORTE</Text>
                            <TouchableOpacity style={{width:'auto',height:'auto'}}>
                                <Text style={{width:'auto',height:'auto',fontWeight:'bold',color:'#55aee8',fontSize:16}}>Cambiar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.mainBoxesBigInfoData}>
                            <View style={[styles.mainBoxesBigInfoDataDisplay,{alignItems:'flex-start',width:'80%'}]}>
                                <Text style={{width:'auto',height:'auto',color:'#ffffff',fontSize:24}}>$1.00</Text>                               
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainBoxesFinalInfo}>
                        <View style={styles.mainBoxesBigInfoTitle}>
                            <Text style={{width:'auto',height:'auto',textAlign:'left',color:'#ffffff',fontWeight:'bold'}}>CONCEPTO</Text>
                            <TouchableOpacity style={{width:'auto',height:'auto'}}>
                                <Text style={{width:'auto',height:'auto',fontWeight:'bold',color:'#55aee8',fontSize:16}}>Cambiar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.mainBoxesBigInfoData}>
                            <View style={[styles.mainBoxesFinalInfoDataDisplay,{alignItems:'flex-start'}]}>
                                <Text style={{width:'auto',height:'auto',color:'#ffffff',fontWeight:100}}>Referencia</Text>
                                <Text style={{width:'auto',height:'auto',color:'#ffffff',fontWeight:100}}>Concepto</Text>
                            </View>
                            <View style={[styles.mainBoxesFinalInfoDataDisplay,{alignItems:'flex-end'}]}>
                                <Text style={{width:'auto',height:'auto',color:'#ffffff',fontWeight:100}}>1712240</Text>
                                <Text style={{width:'auto',height:'auto',color:'#ffffff',fontWeight:100}}>01</Text>                               
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomOptionsDisplay}>
                        <Text>Importe a transferir</Text>
                        <Text style={{width:'auto',height:'auto',fontSize:24}}>$1.00</Text>                               
                        <Text>Comision $0.00</Text>
                        <TouchableOpacity style={styles.btnSizeDisplay}>
                            <Text style={{width:'auto',height:'auto',color:'#ffffff',fontWeight:'bold'}}>Continuar</Text>
                        </TouchableOpacity>
                </View>
        </View>
    )
}
export default SeeLastMovement