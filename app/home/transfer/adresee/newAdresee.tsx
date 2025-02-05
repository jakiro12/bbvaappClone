import React, { useState } from "react"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from '../../../../styles/home-options'

interface NewAdreseeProps{
    setAdreseeStatus:(value:string | null)=> void
}

const AddNewAdresee:React.FC<NewAdreseeProps>=({setAdreseeStatus})=>{
    const[numberAddIt,setNumberAddIt]=useState<string>('')
    const onChangeNumberValue=(value:string)=>{
        setNumberAddIt(value)
    }
    return(
        <View style={styles.boxAddNewAdresee}>
            <View style={styles.titleAddNewAdresee}>
                <Text style={[styles.topTittleName,{color:'#000000',fontWeight:300}]}>
                    Nuevo destinatario
                </Text>
                <TouchableOpacity
                    onPress={()=>setAdreseeStatus(null)}>
                    <Text style={{fontSize:20}}>X</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxAddNewAdreseeInfo}>
                <Text>
                    Ingresa el numero de cuenta, CABLE, tarjeta o celular del beneficiario
                </Text>
                <View style={styles.inputBoxAddNewAdreseeInfo}>
                    <View style={styles.inputViewForAddNewAdreseeData}>
                        <TextInput
                            keyboardType="number-pad"
                            onChangeText={(text)=>onChangeNumberValue(text)} 
                            placeholder="ingresar"/>
                        <View style={{width:'25%',height:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                            <TouchableOpacity>
                                <Text>X</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>B</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width:'95%',height:'auto',display:'flex',flexDirection:'row'}}>
                        <Image source={require('../../../../assets/images/alerttext.png')} resizeMode="cover" style={{width:20,height:20}}/>
                        <Text style={{fontSize:14,color:'#9c9c9c',marginLeft:5}}>Puedes hacer transferencias a cuentas o tarjetas de BBVA y otros bancos</Text>
                    </View>
                </View>                
            </View>
            <View style={styles.checkAddNewAdreseeInfo}>
                <TouchableOpacity 
                    onPress={()=>setAdreseeStatus('find')}
                    style={numberAddIt.length > 12 ?  styles.aviableButton  :styles.notAviableButton}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:numberAddIt.length > 0 ? '#ffffff' : '#dbdbdb'}}>Buscar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'auto',height:'auto'}}>
                    <Text style={{color:'#55aee8',fontWeight:'bold',fontSize:18}}>Elegir otro destino</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default AddNewAdresee