import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from '../../../styles/account-styles'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
const MyAccountGeneralInformation=()=>{
    const deviceHeight=Dimensions.get('window').height - 50;
    return(
        <View style={styles.container}>
            <View style={{ position: 'absolute', // Fija el título en la parte superior
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#004481', // Fondo blanco para el título
    zIndex: 1, // Asegura que el título esté sobre el contenido    
    height:50,
    display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
        <TouchableOpacity 
                onPress={()=>router.back()}
                >
                <AntDesign name="arrowleft" size={24} color="#ffffff" style={{marginLeft:10}} />
        </TouchableOpacity>
                <Text style={styles.topTittleName}>Cuentas</Text>
            </View>
           <View style={{width:'100%',height:deviceHeight,marginTop:50,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <ScrollView contentContainerStyle={{width:'100%',borderWidth:1,borderColor:'#000000',rowGap:10,display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column'}}>
                    <View style={{width:'95%',height:400,borderWidth:1,borderColor:'#000000'}}>
                    </View>
                    <View style={{width:'100%',height:600,borderWidth:1,borderColor:'#000000'}}>
                    </View>
                                    
                </ScrollView>
           </View>
        </View>
    )
}
export default MyAccountGeneralInformation