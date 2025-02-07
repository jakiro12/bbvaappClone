import { router } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"
import styles from '../../../../../../styles/home-options'

const AddReference=()=>{
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
                                <Text style={{marginLeft:10,fontSize:14,fontWeight:'bold',color:'#9c9c9c'}}>Referencia</Text>
                            </View>
                            <View style={styles.resumeInputBoxAmount}>
                                <Text style={{marginLeft:10,fontSize:14,fontWeight:'bold',color:'#9c9c9c'}}>Concepto</Text>
                            </View>
                            <TouchableOpacity style={styles.notAviableButton}>
                                <Text style={{fontSize:18,fontWeight:'bold',color:'#dbdbdb'}}>Continuar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
        </>
    )
}
export default AddReference