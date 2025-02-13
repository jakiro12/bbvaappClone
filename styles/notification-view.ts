import { StyleSheet,ImageStyle,ViewStyle,TextStyle } from "react-native";

interface NotificationProps{
    container:ViewStyle
    topTitleContainer:ViewStyle
    topTittleName:TextStyle
    cancelBtnTop:ViewStyle
    bottomOptionsDisplay:ViewStyle
    mainInformationDisplay:ViewStyle
    mainBoxesFinalInfo:ViewStyle
    mainBoxesBigInfo:ViewStyle
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
    topTitleContainer:{
        width:'100%',
        height:60,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',     
        position:'relative',
        backgroundColor:'#004481'
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
    cancelBtnTop:{
        width:40,
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    mainInformationDisplay:{
        width:'100%',
        height:'70%',        
        marginBottom:'auto',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'#004481'
    },
    bottomOptionsDisplay:{
        width:'100%',
        height:'20%',
        borderWidth:2,
        borderColor:'#000000',  
    },
    mainBoxesBigInfo:{
        width:'100%',
        height:'20%',
        borderBottomColor:'#ffffff',
        borderBottomWidth:1  
    },
    mainBoxesFinalInfo:{
        width:'100%',
        height:'40%',
        borderWidth:2,
        borderColor:'#000000',  
    }
})
export default notificationStyles