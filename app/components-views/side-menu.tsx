import React from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from '../../styles/home-styles'
interface ChildProps{
    onCloseMenu:React.Dispatch<React.SetStateAction<boolean>>
}
const SideMenuOptions:React.FC<ChildProps>=({onCloseMenu})=>{
    return(
        <View style={styles.menuContainerOptions}>
            
            <View style={styles.menuTopInformation}>
                <Text style={styles.menuTopInformationName}>Aranza Castillo Blanqueto</Text>
                <TouchableOpacity>
                    <Text style={{fontSize:18,color:'#55aee8'}}>Perfil</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.menuMainOptionsContainer}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.menuScrollOptions}>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={styles.menuItemDisplayed}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>    
                </ScrollView>
                <TouchableOpacity
                    style={{height:50,width:'100%',borderColor:'#000000',borderWidth:1,display:'flex',justifyContent:'center',alignItems:'center'}}
                onPress={()=>onCloseMenu(false)}
                >
                <Text style={{color:'#ffec20',fontSize:18}}>Salir</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default SideMenuOptions