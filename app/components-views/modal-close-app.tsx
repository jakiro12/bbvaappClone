import React from "react"
import { Modal, View, Text, TouchableOpacity, BackHandler } from "react-native"
interface CloseAppProps{
    visibility:boolean
    onCloseMenu:React.Dispatch<React.SetStateAction<boolean>>
}
const CloseAppAlert:React.FC<CloseAppProps>=({visibility,onCloseMenu})=>{
    const exitApp=()=>{
        onCloseMenu(false)
        BackHandler.exitApp()
    }
    return(
        <Modal 
        visible={visibility}
        transparent={true} 
        animationType="fade"        
    >
        <View 
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente
                position: "absolute", 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                zIndex: 1, // Asegura que el modal esté sobre otros elementos
            }}
        >
            <View 
                style={{
                    width: '80%',
                    height: 150,
                    backgroundColor: '#ffffff',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    borderRadius: 10,
                }}
            >
                <Text style={{ fontSize: 18 }}>¿Estás seguro de cerrar sesion?</Text>
                <View style={{width:'90%',height:'30%',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                    <TouchableOpacity
                        style={{width:'auto',height:30}}
                        onPress={exitApp}>
                        <Text
                        style={{color:'#004481',fontWeight:'bold'}}
                        >ACEPTAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{width:'auto',height:30}}
                        onPress={()=>onCloseMenu(false)}>
                        <Text
                        style={{color:'#004481',fontWeight:'bold'}}
                        >CANCELAR</Text>
                    </TouchableOpacity>
                </View>
               
            </View>
        </View>
    </Modal>
    )
}
export default CloseAppAlert