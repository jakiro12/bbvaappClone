import { Text, TouchableOpacity, View, StatusBar } from "react-native"
import styles from '../../styles/login-styles'
import { TextInput } from "react-native"
import { useState } from "react"
import { Image } from "react-native"
import React from "react"
import { router } from "expo-router"

interface AccessProps{
    backToLogin:()=>void
}

const PasswordAccess:React.FC<AccessProps> =({backToLogin})=>{
    const [securityPass,setSecurityPass]=useState<boolean>(true)
    const [password,setPassword]=useState<string>('')
    const toggleSecureTextEntry = () => { 
        setSecurityPass(!securityPass);
      };
      const handleChange = (value: string) => {
        setPassword(value)
    };
    const checkCredentials=()=>{
        router.push('/home/home')    
      }
    return(
        <View style={[styles.container,{backgroundColor:'#004274'}]}>
            <StatusBar  backgroundColor="#004274"/>
            <View style={styles.headerSignAccess}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff'}}>Iniciar sesion</Text>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={backToLogin}
                >
                    <Image source={require('../../assets/images/x.png')} style={{width:20,height:20,tintColor:'#ffffff'}} resizeMode="cover"/>                                                            
                </TouchableOpacity>
            </View>
            <View style={styles.putCredentialsContainer}>
                <View style={[styles.nameUserBox,{width:'100%'}]}>
                  <Text style={{fontSize:22,fontWeight:'bold',color:'#ffffff'}}>Hola, Aranza</Text>
                  <View style={styles.bubbleUser}>
                        <Text style={{fontSize:20,color:'#ffffff',fontWeight:'bold'}}>AC</Text>
                    </View>   
                </View>
                    <View style={{width:'100%',height:40,display:'flex',flexDirection:'row'}}>
                        <TextInput
                        style={[styles.inputData,{width:'90%'}]}
                        placeholder="Contraseña"
                        autoCapitalize="none"
                        secureTextEntry={securityPass} 
                          
                        onChangeText={(text) => handleChange(text)}  // Actualizamos el estado
                        />
                        <TouchableOpacity style={styles.eyePass}
                            activeOpacity={1}
                            onPress={toggleSecureTextEntry}
                        >
                        <Image source={require('../../assets/images/ojo.png')} resizeMode="contain" style={{width:30,height:30,tintColor:'#075b99',marginTop:15}} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{color:'#55aee8',fontWeight:'bold',fontSize:16,width:'100%',textAlign:'left'}}>Olvidaste tu contraseña?</Text>
            </View>
            <View style={styles.getInWithPassBtn}>
                <TouchableOpacity 
                    onPress={checkCredentials}
                    style={[styles.btnAccessPass,{backgroundColor:password.length > 0 ? '#ffffff' : '#072146'}]}>
                    <Text style={{fontSize:20,color:'#004274',fontWeight:'bold'}}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default PasswordAccess