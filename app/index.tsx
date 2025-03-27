import { Image, Text, TouchableOpacity, View, ImageBackground, StatusBar } from "react-native"
import styles from '../styles/login-styles'
import { useState } from "react"
import PasswordAccess from "./components-views/pass-access"
import React from "react"
const GetInApp=()=>{
    const [getAccess,setGetAccess]=useState<boolean>(false)

    return(
        <>
            {getAccess ? <PasswordAccess backToLogin={()=>setGetAccess(false)}/> :   <View style={styles.container}>
            <StatusBar  backgroundColor="#004274" />
            <View style={styles.topContainer}>
              <ImageBackground source={require('../assets/images/fondoarriba.png')} resizeMode="cover" style={styles.backgroundTopContainer}>
                <View style={styles.topOptionsBox}>
                    <Image source={require('../assets/images/bbva.png')} resizeMode="contain" style={{width:80,height:30}}/>
                    <View style={styles.btnMenuTop}>
                        <Image source={require('../assets/images/menu.png')} resizeMode="contain" style={{width:60,height:20}}/> 
                        <Text style={{fontSize:12,fontWeight:'bold',color:'#ffffff',marginLeft:5,marginTop:5}}>Menu</Text>
                    </View>
                </View>
                <View style={styles.nameUserBox}>
                    <View style={styles.nameDataUser}>
                        <Text style={styles.textNameTitle}>Hola Aranza</Text>
                        <Text style={styles.textAnotherUserBtn}>Cambiar de usuario</Text>
                    </View>
                    <View style={styles.bubbleUser}>
                        <Text style={{fontSize:20,color:'#ffffff',fontWeight:'bold'}}>AC</Text>
                    </View>
                </View>
                <TouchableOpacity 
                    onPress={()=>setGetAccess(true)}
                    activeOpacity={1}
                    style={styles.btnSignIn}>
                    <Text style={styles.textGetInTitle}>Iniciar Sesion</Text>
                </TouchableOpacity>
                <View style={styles.btnOptionsContainer}>
                    <View style={styles.boxBtns}>
                        <TouchableOpacity style={styles.btnOptionLogin}>
                           <Image source={require('../assets/images/btnin1.png')} style={styles.indexIconsActions} resizeMode="cover"/>
                        </TouchableOpacity>
                        <Text style={{fontSize:12,color:'#ffffff'}}>Token Movil</Text>
                    </View>
                    <View style={styles.boxBtns}>
                        <TouchableOpacity style={styles.btnOptionLogin}>
                        <Image source={require('../assets/images/btnin2.png')} style={styles.indexIconsActions} resizeMode="cover"/>
                        </TouchableOpacity>
                        <Text style={{fontSize:12,color:'#ffffff',marginTop:10}}>Operacion QR + CoDi*</Text>
                    </View>
                    <View style={styles.boxBtns}>
                        <TouchableOpacity style={styles.btnOptionLogin}>
                        <Image source={require('../assets/images/btnin3.png')} style={styles.indexIconsActions} resizeMode="cover"/>
                        </TouchableOpacity>
                        <Text style={{fontSize:12,color:'#ffffff'}}>Emergencias</Text>
                    </View>
                </View>
                </ImageBackground>
            </View>
            <View style={styles.bottomContainer}>
              <Image source={require('../assets/images/fondoabajo.png')} style={{width:'100%',height:'100%'}} resizeMode="contain"/>
            </View>
        </View>}
        </>
    )
}
export default GetInApp