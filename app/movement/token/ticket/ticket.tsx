import { Text, TouchableOpacity, View,Image, StatusBar, ScrollView } from "react-native"
import styles from '../../../../styles/notification-view'
import { router } from "expo-router"

const OperationTicket=()=>{
    return(
        <ScrollView  contentContainerStyle={{
            width:'100%',
            height:'180%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center',
            backgroundColor:'#ffffff'
        }}>
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
                    <View style={styles.ticketAccountData}>
                        <View style={{width:'auto',height:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-end',rowGap:4}}>
                            <Text style={{fontWeight:'bold'}}>Cuenta ahorro</Text>
                            <Text>*90878</Text>
                        </View>
                        <View style={{width:'auto',height:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',rowGap:4}}>
                            <Text style={{fontWeight:'bold'}}>Prueba</Text>
                            <Text>*43625</Text>
                            <Text>Cuenta BANAMEX</Text>
                        </View>
                    </View>
                    <View style={styles.tickeAccountInfo}>
                        <Text style={{fontWeight:300}}>Concepto</Text>
                        <Text style={{fontStyle:'italic'}}>01</Text>
                    </View>
                    <View style={styles.tickeAccountInfo}>
                        <Text style={{fontWeight:300}}>Referencia</Text>
                        <Text>1712240</Text>
                    </View>
                    <View style={styles.tickeAccountInfo}>
                        <Text style={{fontWeight:300}}>Tipo de operacion</Text>
                        <Text>Transferencia a otros bancos</Text>
                    </View>
                    <View style={styles.tickeAccountInfo}>
                        <Text style={{fontWeight:300}}>Folio de operacion</Text>
                        <Text>6886345529</Text>
                    </View>
                    <View style={styles.tickeAccountInfo}>
                        <Text style={{fontWeight:300}}>Clave de rastreo</Text>
                        <Text>MBAN01002501270096085119</Text>
                    </View>
                    <View style={styles.tickeAccountInfo}>
                        <Text style={{fontWeight:300}}>Verifica el estatus de tu transferencia</Text>
                        <TouchableOpacity 
                            activeOpacity={1}
                            style={{width:'auto',height:'auto'}}
                        >
                            <Text style={{fontWeight:'bold',color:'#55aee8'}}>www.banxico.org.mx/cep</Text>
                        </TouchableOpacity>
                    </View>                    
                </View>
            <Text style={{fontWeight:300}}>Recibiras el comprobante de transferencia en tu correo</Text>
            </View>
            <View style={styles.boxAlertContainer}>
                <View style={styles.boxAlertAboutNews}>

                </View>
                <View style={styles.boxAlertAboutNews}>

                </View>
            </View>
            <View style={styles.lastOptionNotificationView}>
                <TouchableOpacity>
                    <Text>A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSizeDisplay}>
                    <Text>Salir</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default OperationTicket