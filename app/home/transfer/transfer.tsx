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
                    <Image source={require('../../../assets/images/x.png')} style={{width:20,height:20,tintColor:'#ffffff'}} resizeMode="cover"/>                                                        
                </TouchableOpacity>
            </View>
            <View style={styles.originBox}>
                <View style={styles.titleBoxOrigin}>
                    <Text style={styles.typeInputTitle}>ORIGEN</Text>
                    <Text style={styles.currentPositionText}>(1 de 4)</Text>
                </View>
                <View style={styles.nameUserBoxOrigin}>
                <View style={[styles.boxInfoDisplay,{alignItems:'flex-start'}]}>
                            <Text style={{fontSize:18,fontWeight:'bold',color:'#55aee8'}}>Aranza Castillo</Text>
                            <Text style={{fontSize:18,fontStyle:'italic'}}>*90878</Text>
                        </View>
                        <View style={[styles.boxInfoDisplay,{alignItems:'flex-end'}]}>
                            <View style={styles.amountAccountContainer}>
                                <Text style={styles.valueSymbol}>$</Text><Text style={styles.valueNumber}>3226.33</Text>
                            </View>                            
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
                        <Text style={styles.typeNotAviableInputTitle}>DESTINATARIO</Text>
                        <Text style={styles.hiddenPositionText}>(2 de 4)</Text>
                    </View>
                    <View style={styles.resumeActionsAdresee}>
                        <View style={styles.resumeActionsAdreseeDescription}>
                            <Image source={require('../../../assets/images/plusnot.png')} style={styles.notAviableButtonIcon} resizeMode="cover"/>
                            <Text style={styles.notAviableInformation}>Nuevo</Text>
                        </View>
                        <View style={styles.resumeActionsAdreseeDescription}>
                            <Image source={require('../../../assets/images/accountnot.png')} style={styles.notAviableButtonIcon} resizeMode="cover"/>
                            <Text style={styles.notAviableInformation}>Mis cuentas y Tarjetas</Text>
                        </View>
                        <View style={styles.resumeActionsAdreseeDescription}>
                            <Image source={require('../../../assets/images/contactnot.png')} style={styles.notAviableButtonIcon} resizeMode="cover"/>
                            <Text style={styles.notAviableInformation}>Contactos guardados</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.boxAmount}>
                    <View style={styles.resumeTitleBoxAmount}>
                        <Text style={styles.typeNotAviableInputTitle}>IMPORTE</Text>
                        <Text style={styles.hiddenPositionText}>(3 de 4)</Text>
                    </View>
                    <View style={styles.resumeInputBoxAmount}>
                        <Text style={styles.placeholderInputNoAviable}>Importe</Text>
                    </View>
                    <View style={styles.notAviableButton}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'#dbdbdb'}}>Continuar</Text>
                    </View>
                </View>
                <View style={styles.boxConcept}>
                    <View style={styles.resumeTitleBoxConcept}>
                        <Text style={styles.typeNotAviableInputTitle}>CONCEPTO</Text>
                        <Text style={styles.hiddenPositionText}>(4 de 4)</Text>
                    </View>
                    <View style={styles.resumeInputBoxAmount}>
                        <Text style={styles.placeholderInputNoAviable}>Referencia</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default TransferMoneyTo