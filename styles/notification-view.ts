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
    mainBoxesBigInfoTitle:ViewStyle
    mainBoxesBigInfoData:ViewStyle
    mainBoxesBigInfoDataDisplay:ViewStyle
    mainBoxesFinalInfoDataDisplay:ViewStyle
    btnSizeDisplay:ViewStyle
    tokenInfoContainer:ViewStyle
    tokenTopInfoContainer:ViewStyle
    tokenMainInfo:ViewStyle
    tokenButtonsContainer:ViewStyle
    resumeInputBoxAmount:ViewStyle
    topBoxInformationTicket:ViewStyle
    topBoxBigInfoTicket:ViewStyle
    bottomBoxInformationTicket:ViewStyle
    bottomBoxBigInfoTicket:ViewStyle
    btnGif:ViewStyle
    ticketAccountData:ViewStyle
    tickeAccountInfo:ViewStyle
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
        display:'flex' ,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'column'
    },
    mainBoxesBigInfo:{
        width:'100%',
        height:'22%',
        borderBottomColor:'#ffffff',
        borderBottomWidth:1,
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'column',
        alignItems:'center',
    },
    mainBoxesBigInfoTitle:{
        width:'90%',
        height:'20%',      
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    mainBoxesBigInfoData:{
        width:'90%',
        height:'70%',          
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    mainBoxesBigInfoDataDisplay:{
        width:'45%',
        height:'100%',        
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'column',
        alignItems:'center'
    },
    mainBoxesFinalInfo:{
        width:'100%',
        height:'34%',
        borderWidth:2,
        borderColor:'#000000',  
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    mainBoxesFinalInfoDataDisplay:{
        width:'45%',
        height:'100%',        
        display:'flex',
        justifyContent:'flex-start',
        flexDirection:'column',
        rowGap:10
    },
    btnSizeDisplay:{
        width:140,
        height:50,
        backgroundColor:'#55aee8',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    tokenInfoContainer:{
        width:'100%',
        height:'65%',        
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    tokenTopInfoContainer:{
        width:'100%',
        height:'35%',      
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#9b7239'
    },
    tokenMainInfo:{
        width:'90%',
        height:'30%',         
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'column',
        alignItems:'center'
    },
    tokenButtonsContainer:{
        width:'auto',
        height:'auto',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    resumeInputBoxAmount:{
        width:'100%',
        height:50,        
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#efefef'
    },
    topBoxInformationTicket:{
        width:'100%',
        height:'35%',        
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#038715'
    },
    topBoxBigInfoTicket:{
        width:'100%',
        height:'70%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',       
        marginBottom:'auto'
    },
    bottomBoxInformationTicket:{
        width:'100%',
        height:'65%',        
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center',
        position:'relative'       
    },
    btnGif:{
        width:120,
        height:50,
        position: 'absolute',
        top: '0%',
        left: '50%',
        transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
        borderRadius:25,
        backgroundColor:'#000000'
    },
    bottomBoxBigInfoTicket:{
        width:'100%',
        height:'90%',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'column',
        alignItems:'center',        
        marginBottom:5
    },
    ticketAccountData:{
        width:'100%',
        height:'14%',       
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        columnGap:15
    },
    tickeAccountInfo:{
        width:'100%',
        height:'14%',       
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'column',
        alignItems:'center',        
    },
})
export default notificationStyles