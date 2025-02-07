import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from '../../../../../styles/home-options'
import { router } from "expo-router"
import React from "react"

const AmountOfMoneyToSend=()=>{
    return(
        <>
                <View style={styles.topTitleContainer}>
                    <Text style={styles.topTittleName}>Transfeir & Dimo</Text>
                    <TouchableOpacity 
                        style={styles.cancelBtnTop}
                        onPress={()=>router.back()}>
                        <Text style={{color:'#ffffff',fontSize:20}}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxAmountScreen}>
                    <View style={{width:'100%',height:'35%',backgroundColor:'#ffffff',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <View style={[styles.boxAmount,{height:'100%'}]}>
                            <View style={styles.resumeTitleBoxAmount}>
                                <Text style={{fontSize:18,fontWeight:'bold'}}>IMPORTE</Text>
                                <Text style={{fontSize:14,fontWeight:100,marginLeft:10}}>(3 de 4)</Text>
                            </View>
                            <View style={styles.resumeInputBoxAmount}>
                                <TextInput 

                                    placeholder="Importe"
                                />
                            </View>
                            <View style={{width:'95%',height:'auto',display:'flex',flexDirection:'row'}}>
                                <Image source={require('../../../../../assets/images/alerttext.png')} resizeMode="cover" style={{width:20,height:20}}/>
                                <Text style={{fontSize:14,marginLeft:5}}>Dispones en tu cuenta un saldo de  $1,338.33</Text>
                            </View>
                            <TouchableOpacity 
                                onPress={()=>router.push('/home/transfer/adresee/amount/reference/reference')}
                                style={styles.notAviableButton}>
                                <Text style={{fontSize:18,fontWeight:'bold',color:'#dbdbdb'}}>Continuar</Text>
                            </TouchableOpacity>
                        </View>                                          
                    </View>
                        <View style={[styles.boxConcept,{height:'45%',marginBottom:'auto'}]}>
                            <View style={styles.resumeTitleBoxConcept}>
                                <Text style={{fontSize:18,fontWeight:'bold',color:'#a8a8a8'}}>CONCEPTO</Text>
                                <Text style={{fontSize:14,fontWeight:100,color:'#cccccc',marginLeft:10}}>(4 de 4)</Text>
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
export default AmountOfMoneyToSend