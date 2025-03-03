import { StyleSheet,ImageStyle,ViewStyle,TextStyle } from "react-native";

interface PlusProps{
    container:ViewStyle
    topTittleName:TextStyle
    topTitleContainer:ViewStyle
    titleDescription:TextStyle
    btnBackContainer:ViewStyle
}

const plusStyles : PlusProps = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',      
    },
    topTitleContainer:{
        width:'100%',
        height:60,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
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
    titleDescription:{
        width:'100%',
        height:'10%',
        textAlign:'left',
        verticalAlign:'middle',
        fontWeight:'bold'
    },
    btnBackContainer:{
        width:40,
        height:35,        
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    }
})

export default plusStyles