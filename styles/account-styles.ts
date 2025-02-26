import { StyleSheet,ImageStyle,ViewStyle,TextStyle } from "react-native";

interface AccountProps{
    container:ViewStyle
    topTittleName:TextStyle
    titleTopContainer:ViewStyle
    topScrollContainer:ViewStyle
    nameAccountBoxTop:ViewStyle
    nameAccountBoxBottom:ViewStyle
    mainBtnsOptions:ViewStyle
    btnMainOptionContainer:ViewStyle
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
    titleTopContainer:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#004481',
        zIndex: 1, 
        height:50,
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row'
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
    topScrollContainer:{
        width:'95%',
        height:400,        
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'column',
    },
    nameAccountBoxTop:{
        width:'100%',
        height:180,
        boxShadow:'0px 0px 5px 0pxrgba(0, 0, 0, 0.34)',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },
    nameAccountBoxBottom:{
        width:'100%',
        height:150,
        boxShadow:'0px 0px 5px 0pxrgba(0, 0, 0, 0.34)',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
    },
    mainBtnsOptions:{
        width:'100%',
        height:80,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',  
        backgroundColor:'#55aee8' 
    },
    btnMainOptionContainer:{
        width:'22%',
        height:'100%',      
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },
})

export default accountStyles