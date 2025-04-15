import { Image, Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from '../../../../../styles/home-options'
import { router } from "expo-router"
import React, { useContext, useEffect, useState } from "react"
import { TransferData } from "@/constants/stateType"
import { BankContext } from "@/app/_layout"
import { useHandleInputChange } from "@/app/custom-funcs/handle-inputs-func"

const AmountOfMoneyToSend=()=>{
    const {newTransfer,setNewTransfer }: any = useContext(BankContext);
    const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
    const { handleInputChange } = useHandleInputChange(); 
       
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
    const cleanAccountNumberChange = () => {
            setNewTransfer((prev:TransferData) => ({ ...prev, amount_to_send: "" }));
          };
    return(
        <>
                <View style={styles.topTitleContainer}>
                    <Text style={styles.topTittleName}>Transfeir & Dimo</Text>
                    <TouchableOpacity 
                        style={styles.cancelBtnTop}
                        onPress={()=>router.back()}>
                        <Image source={require('../../../../../assets/images/x.png')} style={{width:20,height:20,tintColor:'#ffffff'}} resizeMode="cover"/>                                        
                    </TouchableOpacity>
                </View>
                <View style={styles.boxAmountScreen}>
                    <View style={{width:'100%',height:isKeyboardVisible ? '45%' :'35%',backgroundColor:'#ffffff',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <View style={[styles.boxAmount,{height:'100%'}]}>
                            <View style={styles.resumeTitleBoxAmount}>
                                <Text style={styles.typeInputTitle}>IMPORTE</Text>
                                <Text style={styles.currentPositionText}>(3 de 4)</Text>
                            </View>
                            <View style={[styles.resumeInputBoxAmount,{position:'relative',borderBottomColor:newTransfer.amount_to_send.length > 0 ? '#000000bd' : '#efefef',borderBottomWidth:2}]}>
                                <TextInput 
                                    onChangeText={(text)=>handleInputChange("amount_to_send",text)}
                                    style={{width:'90%',height:'100%',paddingLeft:15}}
                                    placeholder="Importe"
                                    keyboardType="number-pad"
                                    value={newTransfer.amount_to_send}
                                />
                                {newTransfer.amount_to_send.length > 0 ?
                                <Image source={require('../../../../../assets/images/dolar.png')} resizeMode="contain" style={styles.priceSymbol}/> : null
                            }
                                <Text style={{width:'auto',height:'auto',position:'absolute',left:30,top:'15%', transform: [{ translateX: '-50%' }, { translateY: '-50%' }],fontSize:14,color:'#cccccc'}}>{ newTransfer.amount_to_send.length >= 1 ? 'Importe' : ''}</Text>                                                    
                                <TouchableOpacity 
                                        onPress={cleanAccountNumberChange}
                                        disabled={newTransfer.amount_to_send.length === 0}                
                                        activeOpacity={1}
                                        style={{height:'100%',width:40,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <Image source={require('../../../../../assets/images/x.png')} style={{width:20,height:20,tintColor:  newTransfer.amount_to_send.length > 0 ? '#004481' : '#efefef'}} resizeMode="cover"/>
                                </TouchableOpacity>
                            </View>
                            <View style={{width:'95%',height:'auto',display:'flex',flexDirection:'row'}}>
                                <Image source={require('../../../../../assets/images/alert.png')} resizeMode="cover" style={{width:20,height:20}}/>
                                <Text style={{fontSize:14,marginLeft:5}}>Dispones en tu cuenta un saldo de  $1,338.33</Text>
                            </View>
                            <TouchableOpacity 
                                onPress={()=>router.push('/home/transfer/adresee/amount/reference/reference')}
                                style={newTransfer.amount_to_send.length > 0 ? styles.aviableButton : styles.notAviableButton}>
                                <Text style={{fontSize:18,fontWeight:'bold',color:newTransfer.amount_to_send.length > 0 ? '#ffffff' : '#dbdbdb'}}>Continuar</Text>
                            </TouchableOpacity>
                        </View>                                          
                    </View>
                        <View style={[styles.boxConcept,{height:'45%',marginBottom:'auto'}]}>
                            <View style={styles.resumeTitleBoxConcept}>
                                <Text style={styles.typeNotAviableInputTitle}>CONCEPTO</Text>
                                <Text style={styles.hiddenPositionText}>(4 de 4)</Text>
                            </View>
                            <View style={styles.resumeInputBoxAmount}>
                                <Text style={{marginLeft:10,fontSize:14,fontWeight:'bold',color:'#9c9c9c'}}>Referencia</Text>
                            </View>
                            <View style={styles.resumeInputBoxAmount}>
                                <Text style={{marginLeft:10,fontSize:14,fontWeight:'bold',color:'#9c9c9c'}}>Concepto</Text>
                            </View>
                            <View style={styles.notAviableButton}>
                                <Text style={{fontSize:18,fontWeight:'bold',color:'#dbdbdb'}}>Continuar</Text>
                            </View>
                        </View>
                </View>
        </>
    )
}
export default AmountOfMoneyToSend