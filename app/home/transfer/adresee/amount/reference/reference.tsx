import { router } from "expo-router"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from '../../../../../../styles/home-options'
import { BankContext } from "@/app/_layout";
import { useContext } from "react";
import { TransferData } from "@/constants/stateType";

const AddReference=()=>{
    const {newTransfer,setNewTransfer }: any = useContext(BankContext);
    const handleInputChange = (key: keyof TransferData, value: string | boolean) => {
            setNewTransfer((prev: TransferData) => ({ ...prev, [key]: value }))
          }   
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
                <View style={[styles.boxConcept,{height:'45%',marginBottom:'auto'}]}>
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
                                onPress={()=>router.push('/movement/current')}
                                style={styles.notAviableButton}>
                                <Text style={{fontSize:18,fontWeight:'bold',color:'#dbdbdb'}}>Continuar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
        </>
    )
}
export default AddReference