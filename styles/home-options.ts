import { StyleSheet,ImageStyle,ViewStyle,TextStyle } from "react-native";

interface HomeOptionProps{
    container:ViewStyle
    topTitleContainer:ViewStyle
    topTittleName:TextStyle
    cancelBtnTop:ViewStyle
    detailsBox:ViewStyle
    originBox:ViewStyle
    titleBoxOrigin:ViewStyle
    nameUserBoxOrigin:ViewStyle
    btnContinueOrigin:ViewStyle
    boxInfoDisplay:ViewStyle
    btnSizeDisplay:ViewStyle
    boxAdresee:ViewStyle
    boxConcept:ViewStyle
    boxAmount:ViewStyle
    resumeTitleBoxAdresee:ViewStyle
    resumeActionsAdresee:ViewStyle
    resumeActionsAdreseeDescription:ViewStyle
    resumeTitleBoxAmount:ViewStyle
    resumeInputBoxAmount:ViewStyle
    notAviableButton:ViewStyle
    resumeTitleBoxConcept:ViewStyle
    boxAddNewAdresee:ViewStyle
    titleAddNewAdresee:ViewStyle
    boxAddNewAdreseeInfo:ViewStyle
    inputBoxAddNewAdreseeInfo:ViewStyle
    inputViewForAddNewAdreseeData:ViewStyle
    checkAddNewAdreseeInfo:ViewStyle
    aviableButton:ViewStyle
    boxAddNewAdreseeExtraData:ViewStyle
    boxAlertAboutNewAdresee:ViewStyle
    addExtraInfoAboutNewAdresee:ViewStyle
    boxToSaveData:ViewStyle
    boxToAddAlias:ViewStyle
    boxToSendNewAdreseeExtraData:ViewStyle
    checkboxBase:ViewStyle
    checkboxChecked:ViewStyle
    boxAmountScreen:ViewStyle
}

const homeOptionStyles : HomeOptionProps = StyleSheet.create({
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
    originBox:{
        width:'95%',
        height:'30%',        
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
    },
    detailsBox:{
        width:'100%',
        height:'60%',        
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#f4f4f4'
    },
    titleBoxOrigin:{
        width:'100%',
        height:'25%',        
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    nameUserBoxOrigin:{
        width:'100%',
        height:'35%',        
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    btnContinueOrigin:{
        width:'100%',
        height:'40%',        
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    btnSizeDisplay:{
        width:140,
        height:50,
        backgroundColor:'#55aee8',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    boxInfoDisplay:{
        width:'auto',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around'
    },
    boxAdresee:{
        width:'95%',
        height:'40%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',        
    },
    resumeTitleBoxAdresee:{
        width:'100%',
        height:'15%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    resumeActionsAdresee:{
        width:'100%',
        height:'80%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    resumeActionsAdreseeDescription:{
        width:'100%',
        height:'30%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    boxAmount:{
        width:'95%',
        height:'35%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',        
    },
    resumeTitleBoxAmount:{
        width:'100%',
        height:'15%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
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
    notAviableButton:{
        width:140,
        height:50,
        backgroundColor:'#efefef',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',        
    },
    aviableButton:{
        width:140,
        height:50,
        backgroundColor:'#55aee8',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',        
    },
    boxConcept:{
        width:'95%',
        height:'25%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',        
    },
    resumeTitleBoxConcept:{
        width:'100%',
        height:50,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    boxAddNewAdresee:{
        width:'95%',
        height:450,        
        marginBottom:'auto',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    titleAddNewAdresee:{
        width:'100%',
        height:60,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',     
        position:'relative',
    },
    boxAddNewAdreseeInfo:{
        width:'100%',
        height:'40%',        
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    inputBoxAddNewAdreseeInfo:{
        width:'100%',
        height:'70%',        
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'column'

    },
    inputViewForAddNewAdreseeData:{
        width:'100%',
        height:50,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:2,
        borderBottomColor:'#cccccc',
        backgroundColor:'#f4f4f4'
    },
    checkAddNewAdreseeInfo:{
        width:'100%',
        height:'30%',        
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },
    boxAddNewAdreseeExtraData:{
        width:'95%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    boxAlertAboutNewAdresee:{
        width:'100%',
        height:'20%',
        borderWidth:1,
        borderColor:'#000000',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    addExtraInfoAboutNewAdresee:{
        width:'100%',
        height:'25%',        
        display:'flex',
        justifyContent:'space-between',
        alignItems:'flex-start',
        flexDirection:'column'
    },
    boxToSaveData:{
        width:'100%',
        height:'10%',     
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    boxToAddAlias:{
        width:'100%',
        height:'10%',      
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    boxToSendNewAdreseeExtraData:{
        width:'100%',
        height:'20%',        
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    checkboxBase: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#000000',
        backgroundColor: 'transparent',
      },
      checkboxChecked: {
        backgroundColor: '#075b99',
      },
      boxAmountScreen:{
        width:'100%',
        height:'90%',
        borderWidth:1,
        borderColor:'#000000',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between'
      }

})
export default homeOptionStyles