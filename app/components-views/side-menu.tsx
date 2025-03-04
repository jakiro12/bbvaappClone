import React from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"

interface ChildProps{
    onCloseMenu:React.Dispatch<React.SetStateAction<boolean>>
}
const SideMenuOptions:React.FC<ChildProps>=({onCloseMenu})=>{
    return(
        <View style={{width:'90%',height:'95%',display:'flex',justifyContent:'space-between',flexDirection:'column',alignItems:'center'}}>
            
            <View style={{width:'100%',height:'20%'}}>
                <Text style={{width:'auto',height:'auto',fontSize:24,color:'#ffffff'}}>Aranza Castillo Blanqueto</Text>
                <TouchableOpacity>
                    <Text style={{fontSize:18,color:'#55aee8'}}>Perfil</Text>
                </TouchableOpacity>
            </View>
            <View style={{width:'100%',height:'76%',display:'flex',justifyContent:'space-between',flexDirection:'column',alignItems:'center'}}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{width:'100%',rowGap:15,display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{width:230,height:40,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={{width:230,height:40,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={{width:230,height:40,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={{width:230,height:40,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={{width:230,height:40,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={{width:230,height:40,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={{width:230,height:40,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>  
                    <View style={{width:230,height:40,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={{width:230,height:40,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={{width:230,height:40,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>  
                    <View style={{width:230,height:40,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={{width:230,height:40,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Image source={require('../../assets/images/lupa.png')} style={{width:30,height:30}} resizeMode="cover"/>
                        <Text style={{marginLeft:10,color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Configuracion</Text>
                    </View>
                    <View style={{width:230,height:40,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
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