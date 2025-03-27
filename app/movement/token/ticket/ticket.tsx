import { Text, TouchableOpacity, View,Image, StatusBar, ScrollView, ImageBackground } from "react-native"
import styles from '../../../../styles/notification-view'
import { router} from "expo-router"
import Entypo from '@expo/vector-icons/Entypo';
import { BankContext } from "@/app/_layout";
import { useContext } from "react";


const OperationTicket=()=>{
     const {newTransfer,setNewTransfer }: any = useContext(BankContext);
    return(
        <ScrollView  contentContainerStyle={styles.mainScrollContainer}>
            <StatusBar backgroundColor="#038715"/>
            <View style={styles.topBoxInformationTicket}>
                <View style={[styles.topTitleContainer,{backgroundColor:'#038715'}]}>
                        <Text style={styles.topTittleName}>Transferir</Text>
                        <TouchableOpacity 
                            style={styles.cancelBtnTop}
                            onPress={()=>router.back()}>
                            <Image source={require('../../../../assets/images/x.png')} style={[styles.iconsAlert,{tintColor:'#ffffff'}]} resizeMode="cover"/>                                        
                        </TouchableOpacity>
                </View>
                <View style={styles.topBoxBigInfoTicket}>
                    <Text style={styles.dateTextTitle}>Operacion exitosa</Text>
                    <Text style={[styles.dateTextTitle,{fontStyle:'italic'}]}>27 de enero 2025 13:19:05 h</Text>
                    <Text style={styles.dateTextTitleInformation}>Importe a transferir</Text>
                    <Text style={styles.dateAmountIformation}>${newTransfer.amount_to_send}</Text>                               
                    <Text style={[styles.dateTextTitleInformation,{fontStyle:'italic'}]}>Comision $0.00</Text>
                </View>
            </View>
            <View style={styles.bottomBoxInformationTicket}>
                <ImageBackground                 
                    source={require('../../../../assets/images/giftbg.png')}
                    resizeMode="cover"
                    style={styles.btnGif}>
                    <Image source={require('../../../../assets/images/cardticket.png')} style={{width:50,height:25}} resizeMode="contain"/>
                    <View style={styles.bubbleTicket}>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'#ffffff'}}>AC</Text>
                    </View>
                </ImageBackground>
                <View style={styles.bottomBoxBigInfoTicket}>
                    <View style={styles.ticketAccountData}>
                        <View style={styles.ticketAccountDataContainerInfo}>
                            <Text style={{fontWeight:'bold'}}>Cuenta ahorro</Text>
                            <Text>*90878</Text>
                        </View>
                        <View style={styles.ticketAccountDataContainerInfo}>
                            <Text style={{fontWeight:'bold'}}>Prueba</Text>
                            <Text>*43625</Text>
                            <Text>Cuenta BANAMEX</Text>
                        </View>
                    </View>
                    <View style={styles.tickeAccountInfo}>
                        <Text style={{fontWeight:300}}>Concepto</Text>
                        <Text style={{fontStyle:'italic'}}>{newTransfer.concept}</Text>
                    </View>
                    <View style={styles.tickeAccountInfo}>
                        <Text style={{fontWeight:300}}>Referencia</Text>
                        <Text>{newTransfer.reference}</Text>
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
            <Text style={{fontWeight:300, textAlign:'center'}}>Recibiras el comprobante de transferencia en tu correo a<Text style={{fontWeight:'bold'}}> .@hotmail.com</Text> </Text>
            </View>
            <View style={styles.boxAlertContainer}>
                <View style={[styles.boxAlertAboutNews,{height:'40%'}]}>
                    <Image source={require('../../../../assets/images/alert.png')} resizeMode="contain" style={styles.iconsAlert}/>
                    <Text style={{width:'90%',textAlign:'center'}}>El nombre del beneficiario de esta operacion es un dato no verificado por esta institucion</Text>
                </View>
                <View style={[styles.boxAlertAboutNews,{height:'55%'}]}>
                    <Image source={require('../../../../assets/images/alert.png')} resizeMode="contain" style={styles.iconsAlert}/>
                    <Text style={{width:'90%',textAlign:'center'}}>Conoce los requisitos para realizar una aclaracion SPEI</Text>
                    <Text style={{fontWeight:'bold',color:'#55aee8'}}>Mas informacion</Text>
                </View>
            </View>
            <View style={styles.lastOptionNotificationView}>
                <TouchableOpacity style={styles.shareBtn}>
                    <Entypo name="share" size={24} color="#55aee8" />
                    <Text style={{fontWeight:'bold',color:'#55aee8'}}>Compartir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSizeDisplay}
                    onPress={()=>router.push('/home/home')}
                >
                    <Text style={{fontWeight:'bold',color:'#ffffff'}}>Salir</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default OperationTicket