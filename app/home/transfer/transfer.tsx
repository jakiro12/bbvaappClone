import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from '../../../styles/home-options'
import { router } from "expo-router"
const TransferMoneyTo=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.topTitleContainer}>
                <Text style={styles.topTittleName}>Transfeir & Dimo</Text>
                <TouchableOpacity 
                    style={styles.cancelBtnTop}
                    onPress={()=>router.back()}>
                    <Text style={{color:'#ffffff',fontSize:20}}>x</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.originBox}>
                <View style={styles.titleBoxOrigin}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>ORIGEN</Text>
                    <Text style={{fontSize:14,fontWeight:100,color:'#9c9c9c',marginLeft:10}}>(1 de 4)</Text>
                </View>
                <View style={styles.nameUserBoxOrigin}>
                <View style={[styles.boxInfoDisplay,{alignItems:'flex-start'}]}>
                            <Text style={{fontSize:18,fontWeight:'bold',color:'#55aee8'}}>Aranza Castillo</Text>
                            <Text style={{fontSize:18}}>*90878</Text>
                        </View>
                        <View style={[styles.boxInfoDisplay,{alignItems:'flex-end'}]}>
                            <Text style={{fontSize:22}}>$3226.33</Text>
                            <Text style={{fontSize:18,fontWeight:100,color:'#9c9c9c'}}>Saldo disponible</Text>
                        </View>
                </View>
                <View style={styles.btnContinueOrigin}>
                    <TouchableOpacity 
                        onPress={()=>router.push('/home/transfer/adresee/adresee')}
                        style={styles.btnSizeDisplay}>
                        <Text style={{color:'#ffffff'}}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.detailsBox}>
                <View style={styles.boxAdresee}>
                    <View style={styles.resumeTitleBoxAdresee}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'#a8a8a8'}}>DESTINATARIO</Text>
                        <Text style={{fontSize:14,fontWeight:100,color:'#cccccc',marginLeft:10}}>(2 de 4)</Text>
                    </View>
                    <View style={styles.resumeActionsAdresee}>
                        <View style={styles.resumeActionsAdreseeDescription}>
                            <Image source={require('../../../assets/images/plusnot.png')} style={{width:40,height:40}} resizeMode="cover"/>
                            <Text style={{color:'#9c9c9c',fontWeight:'bold',fontSize:18, marginLeft:10}}>Nuevo</Text>
                        </View>
                        <View style={styles.resumeActionsAdreseeDescription}>
                            <Image source={require('../../../assets/images/accountnot.png')} style={{width:40,height:40}} resizeMode="cover"/>
                            <Text style={{color:'#9c9c9c',fontWeight:'bold',fontSize:18, marginLeft:10}}>Mis cuentas y Tarjetas</Text>
                        </View>
                        <View style={styles.resumeActionsAdreseeDescription}>
                            <Image source={require('../../../assets/images/contactnot.png')} style={{width:40,height:40}} resizeMode="cover"/>
                            <Text style={{color:'#9c9c9c',fontWeight:'bold',fontSize:18, marginLeft:10}}>Contactos guardados</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.boxAmount}>
                <View style={styles.resumeTitleBoxAmount}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'#a8a8a8'}}>IMPORTE</Text>
                        <Text style={{fontSize:14,fontWeight:100,color:'#cccccc',marginLeft:10}}>(3 de 4)</Text>
                    </View>
                    <View style={styles.resumeInputBoxAmount}>
                        <Text style={{marginLeft:10,fontSize:14,fontWeight:'bold',color:'#9c9c9c'}}>Importe</Text>
                    </View>
                    <TouchableOpacity style={styles.notAviableButton}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'#dbdbdb'}}>Continuar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxConcept}>
                    <View style={styles.resumeTitleBoxConcept}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'#a8a8a8'}}>CONCEPTO</Text>
                        <Text style={{fontSize:14,fontWeight:100,color:'#cccccc',marginLeft:10}}>(4 de 4)</Text>
                    </View>
                    <View style={styles.resumeInputBoxAmount}>
                        <Text style={{marginLeft:10,fontSize:14,fontWeight:'bold',color:'#9c9c9c'}}>Referencia</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default TransferMoneyTo