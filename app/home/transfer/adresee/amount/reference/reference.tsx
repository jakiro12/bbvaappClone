import { router } from "expo-router"
import { Keyboard, Text, TextInput, TouchableOpacity, View, Image } from "react-native"
import styles from '../../../../../../styles/home-options'
import { BankContext } from "@/app/_layout";
import { useContext, useEffect, useState } from "react";
import { TransferData } from "@/constants/stateType";

const AddReference=()=>{
    const {newTransfer,setNewTransfer }: any = useContext(BankContext);
    const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);    
    const handleInputChange = (key: keyof TransferData, value: string | boolean) => {
            setNewTransfer((prev: TransferData) => ({ ...prev, [key]: value }))
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
      const cleanCurrentInputValue = (key: keyof TransferData) => {
                  setNewTransfer((prev:TransferData) => ({ ...prev,[key]: "" }));
                };
    return(
        <>
        <View style={{width:'100%',height:'100%',backgroundColor:'#ffffff',display:'flex',justifyContent:'center',alignItems:'center'}}>                
            <View style={styles.topTitleContainer}>
                    <Text style={styles.topTittleName}>Transfeir & Dimo</Text>
                    <TouchableOpacity 
                        style={styles.cancelBtnTop}
                        onPress={()=>router.back()}>
                        <Image source={require('../../../../../../assets/images/x.png')} style={{width:20,height:20,tintColor:'#ffffff'}} resizeMode="cover"/>                                                               
                    </TouchableOpacity>
                </View>
                <View style={[styles.boxConcept,{height:isKeyboardVisible ? '70%' :'45%',marginBottom:'auto'}]}>
                            <View style={styles.resumeTitleBoxConcept}>
                                <Text style={{fontSize:18,fontWeight:'bold'}}>CONCEPTO</Text>
                                <Text style={styles.currentPositionText}>(4 de 4)</Text>
                            </View>
                            <View style={[styles.resumeInputBoxAmount,{borderBottomColor:newTransfer.reference.length > 0 ? '#000000bd' : '#cccccc',borderBottomWidth:2}]}>
                                <TextInput 
                                    onChangeText={(text) => handleInputChange("reference", text)} 
                                    style={{width:'90%',height:'100%'}}
                                    placeholder="Referencia"
                                    value={newTransfer.reference}
                                />
                                <TouchableOpacity 
                                      onPress={()=>cleanCurrentInputValue("reference")}
                                      disabled={newTransfer.reference.length === 0}                
                                      activeOpacity={1}
                                      style={{height:'100%',width:40,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                      <Image source={require('../../../../../../assets/images/x.png')} style={{width:20,height:20,tintColor:  newTransfer.reference.length > 0 ? '#004481' : '#efefef'}} resizeMode="cover"/>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.resumeInputBoxAmount,{borderBottomColor:newTransfer.concept.length > 0 ? '#000000bd' : '#cccccc',borderBottomWidth:2}]}>
                                <TextInput 
                                    onChangeText={(text) => handleInputChange("concept", text)} 
                                    style={{width:'90%',height:'100%'}}
                                    value={newTransfer.concept}
                                    placeholder="Concepto"
                                />
                                 <TouchableOpacity 
                                      onPress={()=>cleanCurrentInputValue("concept")}                                      
                                      disabled={newTransfer.concept.length === 0}                
                                      activeOpacity={1}
                                      style={{height:'100%',width:40,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                      <Image source={require('../../../../../../assets/images/x.png')} style={{width:20,height:20,tintColor:  newTransfer.concept.length > 0 ? '#004481' : '#efefef'}} resizeMode="cover"/>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity 
                                activeOpacity={1}
                                onPress={()=>router.push('/movement/current')}
                                style={newTransfer.reference.length > 0 && newTransfer.concept.length > 0 ? styles.aviableButton :
                                  styles.notAviableButton}>
                                <Text style={newTransfer.reference.length > 0 && newTransfer.concept.length > 0 ? styles.aviableText :
                                  styles.notAviableText}>Continuar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
        </>
    )
}
export default AddReference