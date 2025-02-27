import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Movement={
    name:string;
    opertationType:string;
    value:number,
    status?:string
}

type MovementProps={
    movement:Movement
}

const MoveItemDetails : React.FC<MovementProps>  =({movement})=>{
    return(
        <TouchableOpacity 
            onPress={()=>console.log('enviar id :D')}
            activeOpacity={1}
             style={{ width:'100%', borderBottomWidth: 1, borderBottomColor: '#ccc',height:70,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'  }}>
            <View style={{width:'60%',height:'100%',rowGap:4}}>
                <Text style={{color:'#55aee8'}}>{movement.name}</Text>
                <Text>{movement.opertationType}</Text>
                <Text>{movement.status}</Text>
            </View>
            <View style={{width:'35%',height:'100%',display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                <Text style={{fontSize:18}}>${movement.value}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default MoveItemDetails