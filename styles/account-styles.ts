import { StyleSheet,ImageStyle,ViewStyle,TextStyle } from "react-native";

interface AccountProps{
    container:ViewStyle
    topTittleName:TextStyle
}
const accountStyles : AccountProps = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#ffffff'
    },
    topTittleName:{
        width:'auto',
        height:'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
        fontSize:18,
        color:'#ffffff',
        fontWeight:100
    },

})

export default accountStyles