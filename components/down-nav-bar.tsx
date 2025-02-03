import { Image, Text, View } from "react-native";
import styles from '../styles/home-styles'
import React from "react";
const DownNavBar:React.FC<{routePath:string}>=({routePath})=>{
    return(
        <View style={styles.navbarContainer}>
        <View style={styles.btnNavBarContainer}>
             <Image source={require('../assets/images/inicio.png')} resizeMode="contain" style={{width:20,height:20, tintColor: routePath === '/home/home' ? '#ff0000' : '#5e5e5e'}}/>                     
             <Text style={{fontSize:12,color:routePath === '/home/home' ? '#ff0000' : '#5e5e5e'}}>Inicio</Text>
        </View>
        <View style={styles.btnNavBarContainer}>
         <Image source={require('../assets/images/salud.png')} resizeMode="contain" style={{width:20,height:20}}/>                     
         <Text style={{fontSize:12,color:'#757575'}}>Salud</Text>
        </View>
        <View style={styles.btnNavBarContainer}>
         <Image source={require('../assets/images/oportunidadesbar.png')} resizeMode="contain" style={{width:20,height:20}}/>                     
         <Text style={{fontSize:12,color:'#757575'}} numberOfLines={1}>Oportunidades</Text>
        </View>
        <View style={styles.btnNavBarContainer}>
         <Image source={require('../assets/images/notificaciones.png')} resizeMode="contain" style={{width:20,height:20}}/>                     
         <Text style={{fontSize:12,color:'#757575'}} numberOfLines={1}>Notificaciones</Text>
        </View>
        <View style={styles.btnNavBarContainer}>
         <Image source={require('../assets/images/ayuda.png')} resizeMode="contain" style={{width:20,height:20}}/>                     
         <Text style={{fontSize:12,color:'#757575'}}>Ayuda</Text>
        </View>
    </View>
    )
}
export default React.memo(DownNavBar)