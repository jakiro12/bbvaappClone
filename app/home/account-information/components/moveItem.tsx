import React from "react";
import { Text, View } from "react-native";

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
        <View  style={{ width:'100%', borderBottomWidth: 1, borderBottomColor: '#ccc',height:45 }}>
            <Text style={{color:'#55aee8'}}>{movement.name}</Text>
            <Text>{movement.opertationType}</Text>
        </View>
    )
}
export default MoveItemDetails