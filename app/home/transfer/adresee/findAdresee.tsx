import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from '../../../../styles/home-options'
import React from "react"
interface CheckAdreseeProps{
    setAdreseeStatus:(value:string | null)=> void
}
const CheckifAdreseeExist: React.FC<CheckAdreseeProps>=({setAdreseeStatus})=>{
    return(
        <View style={styles.boxAddNewAdreseeExtraData}>
            <View style={styles.titleAddNewAdresee}>
                <Text style={[styles.topTittleName,{color:'#000000',fontWeight:300}]}>
                    Nuevo destinatario
                </Text>
                <TouchableOpacity
                    onPress={()=>setAdreseeStatus(null)}>
                    <Text style={{fontSize:20}}>X</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxAlertAboutNewAdresee}>
                <Image source={require('../../../../assets/images/alerttext.png')} resizeMode="cover" style={{width:20,height:20}}/>                
                <Text>No hemos encontrado los datos del destinatario. Completa la informacion para realizar la transferencia</Text>
            </View>
            <View style={styles.addExtraInfoAboutNewAdresee}> 
                <Text>numeros</Text>
            </View>
            <View style={styles.boxToSaveData}> 
                <Text>Guardar check box</Text>
            </View>
            <View style={styles.boxToAddAlias}>
                <Text>Alias</Text>
            </View>
            <View style={styles.boxToSendNewAdreseeExtraData}> 
                <Text>Codigo mas boton continuar</Text>
            </View>
        </View>
    )
}
export default CheckifAdreseeExist