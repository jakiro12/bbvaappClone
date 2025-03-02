import { Text, TouchableOpacity, View } from "react-native"
import styles from '../../../styles/plus-options'
import { AntDesign } from "@expo/vector-icons"
import { router } from "expo-router"
const MoreOptions=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.topTitleContainer}>
                <Text style={styles.topTittleName}>Operativas</Text>
                <TouchableOpacity 
                    style={styles.btnBackContainer}
                    onPress={()=>router.back()}>
                        <AntDesign name="arrowleft" size={24} color="#ffffff" style={{marginLeft:10}} />                   
                </TouchableOpacity>
            </View>
            <View style={{width:'95%',height:'40%'}}>
                <Text style={styles.titleDescription}>
                    FAVORITOS
                </Text>
                <View style={{width:'100%',height:'90%',display:'flex',flexDirection:'column'}}>
                    <View style={{width:'100%',height:'50%',display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
                        <View style={{width:'30%',height:'100%',borderColor:'#000000',borderWidth:1}}></View>
                        <View style={{width:'30%',height:'100%',borderColor:'#000000',borderWidth:1}}></View>
                        <View style={{width:'30%',height:'100%',borderColor:'#000000',borderWidth:1}}></View>
                    </View>
                    <View style={{width:'100%',height:'50%',display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
                        <View style={{width:'30%',height:'100%',borderColor:'#000000',borderWidth:1}}></View>
                    </View>
                </View>
            </View>
            <View style={{width:'95%',height:'40%',marginBottom:'auto'}}>
                <Text style={styles.titleDescription}>
                    OPERACIONES CON CUENTAS
                </Text>
                <View style={{width:'100%',height:'90%',display:'flex',flexDirection:'column'}}>
                    <View style={{width:'100%',height:'50%',display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
                        <View style={{width:'30%',height:'100%',borderColor:'#000000',borderWidth:1}}></View>
                        <View style={{width:'30%',height:'100%',borderColor:'#000000',borderWidth:1}}></View>
                        <View style={{width:'30%',height:'100%',borderColor:'#000000',borderWidth:1}}></View>
                    </View>
                    <View style={{width:'100%',height:'50%',display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
                        <View style={{width:'30%',height:'100%',borderColor:'#000000',borderWidth:1}}></View>
                        <View style={{width:'30%',height:'100%',borderColor:'#000000',borderWidth:1}}></View>
                        <View style={{width:'30%',height:'100%',borderColor:'#000000',borderWidth:1}}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default MoreOptions