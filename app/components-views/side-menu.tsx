import React from "react"
import { Text, TouchableOpacity, View } from "react-native"

interface ChildProps{
    onCloseMenu:React.Dispatch<React.SetStateAction<boolean>>
}
const SideMenuOptions:React.FC<ChildProps>=({onCloseMenu})=>{
    return(
        <View style={{width:'90%',height:'90%',borderWidth:1,borderColor:'#000000'}}>
            <TouchableOpacity
                onPress={()=>onCloseMenu(false)}
                >
                <Text>Cerrar</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SideMenuOptions