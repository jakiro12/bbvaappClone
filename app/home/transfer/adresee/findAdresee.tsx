import { View, Text, TouchableOpacity, Image, TextInput } from "react-native"
import styles from '../../../../styles/home-options'
import React, { useState } from "react"
import { Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
interface CheckAdreseeProps{
    setAdreseeStatus:(value:string | null)=> void
}
const CheckifAdreseeExist: React.FC<CheckAdreseeProps>=({setAdreseeStatus})=>{
    const [checked, setChecked] = useState<boolean>(false);

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
                <Text style={{color:'#9c9c9c'}}>Numero de cuenta</Text>
                <Text>Numero que anterior ej: 123456780</Text>
                <TouchableOpacity style={styles.inputViewForAddNewAdreseeData}>
                    <Text style={{marginLeft:10}}>Banco/Entidad</Text>
                    <Text>L</Text>
                </TouchableOpacity>
                <View style={styles.inputViewForAddNewAdreseeData}>
                     <TextInput
                        placeholder="Nombre del destinatario"/>
                </View>
                <View style={{width:'95%',height:'auto',display:'flex',flexDirection:'row'}}>
                        <Image source={require('../../../../assets/images/alerttext.png')} resizeMode="cover" style={{width:20,height:20}}/>
                        <Text style={{fontSize:14,color:'#9c9c9c',marginLeft:5}}>Dato no verificado por la institucion</Text>
                </View>
            </View>
            <View style={styles.boxToSaveData}> 
            <Pressable
                        role="checkbox"
                        aria-checked={checked}
                        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                        onPress={() => setChecked(!checked)}>
                        {checked && <Ionicons name="checkmark" size={40} color="white" />}
                 </Pressable>
                 <View style={{width:'70%',marginLeft:10,height:'auto'}}>
                    <Text style={{fontSize:20}}>
                        Guardar contacto
                    </Text>
                    <Text>Este destinatario quedara guardado en tus contactos de BBVA</Text>
                 </View>
            </View>
            <View style={styles.boxToAddAlias}>
                <View style={[styles.inputViewForAddNewAdreseeData,{backgroundColor:'#ffffff'}]}>
                     <TextInput
                        placeholder="Alias del contacto"/>
                </View>
            </View>
            <View style={styles.boxToSendNewAdreseeExtraData}> 
                <Text>El codigo de seguridad para realizar esta operacion se generara de forma automatica al dar click en continuar</Text>
                <TouchableOpacity 
                    onPress={()=>setAdreseeStatus('find')}
                    style={false ?  styles.aviableButton  :styles.notAviableButton}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:false ? '#ffffff' : '#dbdbdb'}}>Continuar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'auto',height:'auto'}}>
                    <Text style={{color:'#55aee8',fontWeight:'bold',fontSize:18}}>Hacer otra busqueda</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CheckifAdreseeExist