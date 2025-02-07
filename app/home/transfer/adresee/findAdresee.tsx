import { View, Text, TouchableOpacity, Image, TextInput } from "react-native"
import styles from '../../../../styles/home-options'
import React, { useContext, useState } from "react"
import { Pressable } from "react-native"
import { AntDesign, Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { BankContext } from "@/app/_layout"
import { TransferData } from "@/constants/stateType"
interface CheckAdreseeProps{
    setAdreseeStatus:(value:string | null)=> void
}
const CheckifAdreseeExist: React.FC<CheckAdreseeProps>=({setAdreseeStatus})=>{
    const [checked, setChecked] = useState<boolean>(false);
    const {newTransfer,setNewTransfer }: any = useContext(BankContext);
    const handleInputChange = (key: keyof TransferData, value: string | boolean) => {
        setNewTransfer((prev: TransferData) => ({ ...prev, [key]: value }))
      }    

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
                <Text>{newTransfer.account_number}</Text>
                <TouchableOpacity 
                    style={styles.inputViewForAddNewAdreseeData}>
                    <Text style={{marginLeft:10}}>Banco/Entidad</Text>
                    <AntDesign name="down" size={24} color="black" style={{marginRight:20}}/>
                </TouchableOpacity>
                <View style={styles.inputViewForAddNewAdreseeData}>
                     <TextInput
                        value={newTransfer.adresee_name}
                        onChangeText={(text) => handleInputChange("adresee_name", text)} 
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
                        aria-checked={newTransfer.save_data}
                        style={[styles.checkboxBase, newTransfer.save_data && styles.checkboxChecked]}
                        onPress={() => handleInputChange("save_data",!newTransfer.save_data)}>
                        {newTransfer.save_data && <Ionicons name="checkmark" size={40} color="white" />}
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
                        onChangeText={(text)=>handleInputChange("alias_adresee",text)}
                        value={newTransfer.alias_adresee}
                        placeholder="Alias del contacto"/>
                </View>
            </View>
            <View style={styles.boxToSendNewAdreseeExtraData}> 
                <Text>El codigo de seguridad para realizar esta operacion se generara de forma automatica al dar click en continuar</Text>
                <TouchableOpacity 
                    onPress={()=>router.push('/home/transfer/adresee/amount/amount')}
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