import { router } from "expo-router"
import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native"
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
    return(
        <>
        <View style={{width:'100%',height:'100%',backgroundColor:'#ffffff',display:'flex',justifyContent:'center',alignItems:'center'}}>                
            <View style={styles.topTitleContainer}>
                    <Text style={styles.topTittleName}>Transfeir & Dimo</Text>
                    <TouchableOpacity 
                        style={styles.cancelBtnTop}
                        onPress={()=>router.back()}>
                        <Text style={{color:'#ffffff',fontSize:20}}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.boxConcept,{height:isKeyboardVisible ? '70%' :'45%',marginBottom:'auto'}]}>
                            <View style={styles.resumeTitleBoxConcept}>
                                <Text style={{fontSize:18,fontWeight:'bold'}}>CONCEPTO</Text>
                                <Text style={{fontSize:14,fontWeight:100,marginLeft:10}}>(4 de 4)</Text>
                            </View>
                            <View style={styles.resumeInputBoxAmount}>
                                <TextInput 
                                    onChangeText={(text) => handleInputChange("reference", text)} 
                                    style={{width:'100%',height:'100%'}}
                                    placeholder="Referencia"
                                    value={newTransfer.reference}
                                />
                            </View>
                            <View style={styles.resumeInputBoxAmount}>
                                <TextInput 
                                    onChangeText={(text) => handleInputChange("concept", text)} 
                                    style={{width:'100%',height:'100%'}}
                                    value={newTransfer.concept}
                                    placeholder="Concepto"
                                />
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