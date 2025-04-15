import { View, Text, TouchableOpacity, Image, TextInput, Keyboard, ScrollView } from "react-native"
import styles from '../../../../styles/home-options'
import React, { useContext, useEffect, useState } from "react"
import { Pressable } from "react-native"
import { AntDesign, Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { BankContext } from "@/app/_layout"
import { Modal } from "react-native"
import { useHandleInputChange } from "@/app/custom-funcs/handle-inputs-func"
interface CheckAdreseeProps{
    setAdreseeStatus:(value:string | null)=> void 
}
const CheckifAdreseeExist: React.FC<CheckAdreseeProps>=({setAdreseeStatus})=>{
    const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const {newTransfer}: any = useContext(BankContext);
    const { handleInputChange } = useHandleInputChange(); 
     
      const handleSelectBank = (bankName: string) => {
        handleInputChange("bank_name", bankName);
        setModalVisible(false);
    }
      useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
          "keyboardDidShow",
          () => {
            setKeyboardVisible(true);
          }
        );    
        const keyboardDidHideListener = Keyboard.addListener(
          "keyboardDidHide",
          () => {
            setKeyboardVisible(false);
          }
        );
    
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
      }, []);
      let banks=['Banco1','Banco2','Banco1','Banco2','Banco1','Banco2','Banco1','Banco2','Banco1','Banco2','Banco1','Banco2','Banco1','Banco2','Banco1','Banco2','Banco1','Banco2','Banco1','Banco2']
    return(
        <View style={styles.boxAddNewAdreseeExtraData}>
            <View style={styles.titleAddNewAdresee}>
                <Text style={[styles.topTittleName,{color:'#000000',fontWeight:300}]}>
                    Nuevo destinatario
                </Text>
                <TouchableOpacity
                    onPress={()=>setAdreseeStatus(null)}>
                    <Image source={require('../../../../assets/images/x.png')} style={{width:20,height:20}} resizeMode="cover"/>                    
                </TouchableOpacity>
            </View>
            {isKeyboardVisible === false ? 
                <View style={styles.boxAlertAboutNewAdresee}>
                    <Image source={require('../../../../assets/images/alert.png')} resizeMode="cover" style={{width:20,height:20,marginBottom:20}}/>                
                    <Text style={{width:'90%',height:'auto',textAlign:'center'}}>No hemos encontrado los datos del destinatario. Completa la informacion para realizar la transferencia</Text>
                </View>
                : null}                
            <View style={[styles.addExtraInfoAboutNewAdresee,{height:isKeyboardVisible ? '45%' : '25%',}]}> 
                <Text style={{color:'#9c9c9c'}}>Numero de cuenta</Text>
                <Text>{newTransfer.account_number}</Text>
                <TouchableOpacity 
                    activeOpacity={1}
                    onPress={()=>setModalVisible(true)}
                    style={styles.inputViewForAddNewAdreseeData}>
                    <Text style={{marginLeft:10,color:'#cccccc'}}>{newTransfer.bank_name.length === 0 ? "Banco/Entidad" : newTransfer.bank_name}</Text>
                    <AntDesign name="down" size={24} color="#004481" style={{marginRight:20}}/>
                </TouchableOpacity>
                <View style={[styles.inputViewForAddNewAdreseeData,{borderBottomColor:newTransfer.adresee_name.length > 0 ? '#000000bd' : '#cccccc',position:'relative'}]}>
                    <TextInput
                        style={{width:'100%',height:'100%'}}
                        value={newTransfer.adresee_name}
                        onChangeText={(text) => handleInputChange("adresee_name", text)} 
                        placeholder="Nombre del destinatario"/>
                    <Text style={{width:'auto',height:'auto',position:'absolute',left:80,top:'15%', transform: [{ translateX: '-50%' }, { translateY: '-50%' }],fontSize:14,color:'#cccccc'}}>{ newTransfer.adresee_name.length >= 1 ? 'Nombre del destinatario' : ''}</Text>                    
                </View>
                <View style={{width:'95%',height:'auto',display:'flex',flexDirection:'row'}}>
                        <Image source={require('../../../../assets/images/alert.png')} resizeMode="cover" style={{width:20,height:20}}/>
                        <Text style={{fontSize:14,color:'#9c9c9c',marginLeft:5}}>Dato no verificado por la institucion</Text>
                </View>
            </View>
            <View style={styles.boxToSaveData}> 
            <Pressable
                        role="checkbox"
                        aria-checked={newTransfer.save_data}
                        style={[styles.checkboxBase, newTransfer.save_data && styles.checkboxChecked]}
                        onPress={() => handleInputChange("save_data",!newTransfer.save_data)}>
                        {newTransfer.save_data && <Ionicons name="checkmark" size={30} color="white" />}
                 </Pressable>
                 <View style={{width:'70%',marginLeft:10,height:'auto'}}>
                    <Text style={{fontSize:20}}>
                        Guardar contacto
                    </Text>
                    <View style={{width:'auto',height:'auto',display:'flex',flexDirection:'row'}}>
                        <Image source={require('../../../../assets/images/alert.png')} resizeMode="cover" style={{width:20,height:20}}/>                        
                        <Text style={{height:'auto',marginLeft:5}}>Este destinatario quedara guardado en tus contactos de BBVA</Text>
                    </View>
                 </View>
            </View>
            <View style={styles.boxToAddAlias}>
                <View style={[styles.inputViewForAddNewAdreseeData,{backgroundColor:'#ffffff'}]}>
                     <TextInput
                        style={{width:'100%',height:'100%'}}
                        onChangeText={(text)=>handleInputChange("alias_adresee",text)}
                        value={newTransfer.alias_adresee}
                        placeholder="Alias del contacto"/>
                </View>
            </View>
            {
                isKeyboardVisible === false ?
                <View style={styles.boxToSendNewAdreseeExtraData}> 
                <Text>El codigo de seguridad para realizar esta operacion se generara de forma automatica al dar click en continuar</Text>
                <TouchableOpacity 
                    onPress={()=>router.push('/home/transfer/adresee/amount/amount')}
                    style={newTransfer.bank_name.length > 0 && newTransfer.adresee_name.length > 0 && newTransfer.alias_adresee.length > 0 ?  styles.aviableButton  : styles.notAviableButton}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:newTransfer.bank_name.length > 0 && newTransfer.adresee_name.length > 0 && newTransfer.alias_adresee.length > 0 ? '#ffffff' : '#dbdbdb'}}>Continuar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'auto',height:'auto'}}>
                    <Text style={{color:'#55aee8',fontWeight:'bold',fontSize:18}}>Hacer otra busqueda</Text>
                </TouchableOpacity>
            </View> : null
            }
           <Modal
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)} // Cierra el modal al presionar fuera de él
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                   
                    <ScrollView style={{ width: '100%'}} showsVerticalScrollIndicator={false}>
                        {banks.map((bank, index) => (
                            <TouchableOpacity
                                key={index}
                                style={{ padding: 15, backgroundColor: '#f0f0f0', marginBottom: 5, borderRadius: 5 }}
                                onPress={() => handleSelectBank(bank)} 
                            >
                                <Text>{bank}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>                   
                </View>
            </Modal>
        </View>
    )
}
export default CheckifAdreseeExist