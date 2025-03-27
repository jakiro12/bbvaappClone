import React from "react"
import { Modal, View, Text, TouchableOpacity } from "react-native"
interface CloseAppProps{
    visibility:boolean
    onCloseMenu:React.Dispatch<React.SetStateAction<boolean>>
}
const CloseAppAlert:React.FC<CloseAppProps>=({visibility,onCloseMenu})=>{
    return(
        <Modal 
        visible={visibility}
        transparent={true} // Esto hace que el fondo sea semitransparente
        animationType="fade" // Efecto de fade-in/fade-out al mostrar
        onRequestClose={() => {}} // Función que evita cerrar con el hardware back button
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
                    height: 200,
                    backgroundColor: '#ffffff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                }}
            >
                <Text style={{ fontSize: 18 }}>¿Estás seguro de que quieres cerrar la aplicacion?</Text>
                <View style={{width:'90%',height:'30%',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                    <TouchableOpacity
                        onPress={()=>console.log('cerrar')}>
                        <Text>Salir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>onCloseMenu(false)}>
                        <Text>Regresar</Text>
                    </TouchableOpacity>
                </View>
               
            </View>
        </View>
    </Modal>
    )
}
export default CloseAppAlert