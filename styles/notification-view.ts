import { StyleSheet,ImageStyle,ViewStyle,TextStyle } from "react-native";

interface NotificationProps{
    container:ViewStyle
}
const notificationStyles : NotificationProps = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#ffffff'
    },
})
export default notificationStyles