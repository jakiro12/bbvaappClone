import { Image, Text, View } from "react-native"
import React from "react"
import styles from '../../../../styles/home-options'
import { TouchableOpacity } from "react-native"
import { router } from "expo-router"
interface MainOptionProps{
    setAdreseeStatus:(value:string | null)=> void
}
const MainOptionsToChoose:React.FC<MainOptionProps>=({setAdreseeStatus})=>{
    return(
        <>        
        <View style={styles.topTitleContainer}>
        <Text style={styles.topTittleName}>Transfeir & Dimo</Text>
        <TouchableOpacity 
            style={styles.cancelBtnTop}
            onPress={()=>router.back()}>
            <Image source={require('../../../../assets/images/x.png')} style={{width:20,height:20,tintColor:'#ffffff'}} resizeMode="cover"/>                                                
        </TouchableOpacity>
    </View>
    <View style={[styles.boxAdresee,{height:'25%',backgroundColor:'#ffffff'}]}>
            <View style={styles.resumeTitleBoxAdresee}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>DESTINATARIO</Text>
                <Text style={styles.currentPositionText}>(2 de 4)</Text>
            </View>
            <View style={styles.resumeActionsAdresee}>
                <TouchableOpacity 
                    onPress={()=>setAdreseeStatus('new')}
                    style={styles.resumeActionsAdreseeDescription}>
                    <Image source={require('../../../../assets/images/plus.png')} style={{width:40,height:40}} resizeMode="cover"/>                
                    <Text style={{color:'#55aee8',fontWeight:'bold',fontSize:18,marginLeft:10}}>Nuevo</Text>
                </TouchableOpacity>
                <View style={styles.resumeActionsAdreseeDescription}>
                    <Image source={require('../../../../assets/images/account.png')} style={{width:40,height:40,opacity:0.5}} resizeMode="cover"/>
                    <Text style={{color:'#55aee8',fontWeight:'bold',fontSize:18,marginLeft:10,opacity:0.5}}>Mis cuentas y Tarjetas</Text>
                </View>
                <View style={styles.resumeActionsAdreseeDescription}>
                    <Image source={require('../../../../assets/images/contact.png')} style={{width:40,height:40}} resizeMode="cover"/>
                    <Text style={{color:'#55aee8',fontWeight:'bold',fontSize:18,marginLeft:10}}>Contactos guardados</Text>
                </View>
            </View>
    </View>
    <View style={{width:'100%',height:'65%',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',backgroundColor:'#f4f4f4'}}>
        <View style={[styles.boxAmount,{height:'45%'}]}>
        <View style={styles.resumeTitleBoxAmount}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'#a8a8a8'}}>IMPORTE</Text>
                <Text style={styles.hiddenPositionText}>(3 de 4)</Text>
            </View>
            <View style={styles.resumeInputBoxAmount}>
                <Text style={{marginLeft:10,fontSize:14,fontWeight:'bold',color:'#9c9c9c'}}>Importe</Text>
            </View>
            <Text>Dispones en tu cuenta de un saldo de $3,226.33</Text>
            <View style={styles.notAviableButton}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'#dbdbdb'}}>Continuar</Text>
            </View>
        </View>
        <View style={[styles.boxConcept,{height:'55%'}]}>
            <View style={styles.resumeTitleBoxConcept}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'#a8a8a8'}}>CONCEPTO</Text>
                <Text style={styles.hiddenPositionText}>(4 de 4)</Text>
            </View>
            <View style={styles.resumeInputBoxAmount}>
                <Text style={{marginLeft:10,fontSize:14,fontWeight:'bold',color:'#9c9c9c'}}>Referencia</Text>
            </View>
            <View style={styles.resumeInputBoxAmount}>
                <Text style={{marginLeft:10,fontSize:14,fontWeight:'bold',color:'#9c9c9c'}}>Concepto (opcional)</Text>
            </View>
            <View style={styles.notAviableButton}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'#dbdbdb'}}>Continuar</Text>
            </View>
        </View>
    </View>
        </>
    )
}
export default MainOptionsToChoose