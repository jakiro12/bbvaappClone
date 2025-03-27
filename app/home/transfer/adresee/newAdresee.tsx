import React, { useContext } from "react"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from '../../../../styles/home-options'
import { BankContext } from "@/app/_layout"
import { TransferData } from "@/constants/stateType"

interface NewAdreseeProps{
    setAdreseeStatus:(value:string | null)=> void
}

const AddNewAdresee:React.FC<NewAdreseeProps>=({setAdreseeStatus})=>{
    const {newTransfer,setNewTransfer }: any = useContext(BankContext);
    const handleAccountNumberChange = (text: string) => {
        setNewTransfer((prev:TransferData) => ({ ...prev, account_number: text }));
      };
    const cleanAccountNumberChange = () => {
        setNewTransfer((prev:TransferData) => ({ ...prev, account_number: "" }));
      };
    return(
        <View style={styles.boxAddNewAdresee}>
            <View style={styles.titleAddNewAdresee}>
                <Text style={[styles.topTittleName,{color:'#000000',fontWeight:300}]}>
                    Nuevo destinatario
                </Text>
                <TouchableOpacity
                    onPress={()=>setAdreseeStatus(null)}>
                     <Image source={require('../../../../assets/images/x.png')} style={{width:20,height:20}} resizeMode="cover"/>
                </TouchableOpacity>
            </View>
            <View style={styles.boxAddNewAdreseeInfo}>
                <Text>
                    Ingresa el numero de cuenta, CABLE, tarjeta o celular del beneficiario
                </Text>
                <View style={styles.inputBoxAddNewAdreseeInfo}>
                    <View style={[styles.inputViewForAddNewAdreseeData,{borderBottomColor: newTransfer.account_number.length < 12 && newTransfer.account_number.length >= 1 ? '#ff00009c' : '#f4f4f4'}]}>
                        <TextInput
                            style={{width:'75%',height:'100%',backgroundColor: newTransfer.account_number.length < 12 && newTransfer.account_number.length >= 1 ? '#ff00009c' : '#f4f4f4'}}
                            keyboardType="number-pad"
                            value={newTransfer.account_number}
                            onChangeText={handleAccountNumberChange} 
                            placeholder="ingresar"/>
                        <View style={{width:'25%',height:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                            <TouchableOpacity 
                                onPress={cleanAccountNumberChange}
                                activeOpacity={1}
                                style={{height:'100%',width:'50%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor: newTransfer.account_number.length < 12 && newTransfer.account_number.length >= 1 ? '#ff00009c' : '#f4f4f4'}}>
                                <Image source={require('../../../../assets/images/x.png')} style={{width:20,height:20,tintColor: newTransfer.account_number.length < 12 && newTransfer.account_number.length >= 1 ? '#ff00009c' : '#004481'}} resizeMode="cover"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{height:'100%',width:'50%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#004481'}}>
                                <Image source={require('../../../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width:'95%',height:'auto',display:'flex',flexDirection:'row'}}>
                        {newTransfer.account_number.length < 12 && newTransfer.account_number.length >= 1 ? 
                        <>
                            <Image source={require('../../../../assets/images/alerttext.png')} resizeMode="cover" style={{width:20,height:20}}/>
                            <Text style={{fontSize:14,marginLeft:5}}>El numero debe tener al menos 10 digitos</Text> 
                        </>
                            :
                        <>
                        <Image source={require('../../../../assets/images/alerttext.png')} resizeMode="cover" style={{width:20,height:20}}/>
                            <Text style={{fontSize:14,color:'#9c9c9c',marginLeft:5}}>Puedes hacer transferencias a cuentas o tarjetas de BBVA y otros bancos</Text>
                        </>
                        }
                    </View>
                </View>                
            </View>
            <View style={styles.checkAddNewAdreseeInfo}>
                <TouchableOpacity 
                    onPress={()=>setAdreseeStatus('find')}
                    style={newTransfer.account_number.length > 12 ?  styles.aviableButton  :styles.notAviableButton}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:newTransfer.account_number.length > 12 ? '#ffffff' : '#dbdbdb'}}>Buscar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'auto',height:'auto'}}>
                    <Text style={{color:'#55aee8',fontWeight:'bold',fontSize:18}}>Elegir otro destino</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default AddNewAdresee