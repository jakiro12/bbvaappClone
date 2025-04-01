import React from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from '../../styles/home-styles'
import { FontAwesome } from "@expo/vector-icons"
interface ChildProps{
    onCloseMenu:React.Dispatch<React.SetStateAction<boolean>>
}
const SideMenuOptions:React.FC<ChildProps>=({onCloseMenu})=>{
    return(
        <View style={styles.menuContainerOptions}>
            
            <View style={styles.menuTopInformation}>
                <Text style={styles.menuTopInformationName}>Aranza Castillo Blanqueto</Text>
                <TouchableOpacity style={{width:'auto',height:'auto',marginTop:10}}>
                    <Text style={{fontSize:16,color:'#55aee8'}}>Perfil</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.menuMainOptionsContainer}>
                <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={styles.menuScrollOptions}
                    alwaysBounceHorizontal={false}
                    alwaysBounceVertical={false}
                    bounces={false}                    
                    >
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:16,fontWeight:'bold'}}>Configuración</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:16,fontWeight:'bold'}}>Seguridad y privacidad</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:16,fontWeight:'bold'}}>Token móvil</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:16,fontWeight:'bold'}}>Sostenibilidad</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:16,fontWeight:'bold'}}>Emergencias</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:16,fontWeight:'bold'}}>Zona de Cobro</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:16,fontWeight:'bold'}}>Puntos y promociones</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:16,fontWeight:'bold'}}>Operaciones QR + CoDi</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:16,fontWeight:'bold'}}>Consulta retiro sin tarjeta</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:16,fontWeight:'bold'}}>Sucursales y cajeros</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:16,fontWeight:'bold'}}>Aclaraciones</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:16,fontWeight:'bold'}}>Configuracion</Text>
                    </View>    
                </ScrollView>
                <TouchableOpacity
                    style={{height:50,width:'90%',display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}
                onPress={()=>onCloseMenu(false)}
                >
                <FontAwesome name="arrow-circle-left" size={24} color="#ffec20" style={{marginRight:10}}/>
                <Text style={{color:'#ffec20',fontSize:16}}>Salir</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default SideMenuOptions