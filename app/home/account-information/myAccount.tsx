import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from '../../../styles/account-styles'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
import { Image } from "react-native";
const MyAccountGeneralInformation=()=>{
    const deviceHeight=Dimensions.get('window').height - 50;
    return(
        <View style={styles.container}>
            <View style={styles.titleTopContainer}>
        <TouchableOpacity 
                onPress={()=>router.back()}
                >
                <AntDesign name="arrowleft" size={24} color="#ffffff" style={{marginLeft:10}} />
        </TouchableOpacity>
                <Text style={styles.topTittleName}>Cuentas</Text>
            </View>
           <View style={{width:'100%',height:deviceHeight,marginTop:50,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <ScrollView contentContainerStyle={{width:'100%',borderWidth:1,borderColor:'#000000',rowGap:10,display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column'}}>
                    <View style={styles.topScrollContainer}>
                        <View style={styles.nameAccountBoxTop}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>Nombre</Text>
                            <View>
                                <Text>Logo</Text>
                            </View>
                            <View style={{width:'auto',height:'auto',display:'flex',flexDirection:'column',rowGap:5,alignItems:'center'}}>
                                <Text style={{fontSize:20}}>$1.388</Text>
                                <Text>Saldo disponible</Text>
                            </View>
                            <TouchableOpacity style={{width:'auto',height:'auto'}}>
                                <Text style={{color:'#55aee8',fontSize:18,fontWeight:'bold'}}>Ver cuenta y CLABE</Text>
                            </TouchableOpacity>
                        </View>    
                        <View style={styles.nameAccountBoxBottom}>
                            <Text>Logo</Text>
                            <View style={{width:'auto',height:'auto',rowGap:5,display:'flex',alignItems:'center',flexDirection:'column'}}>
                                <Text>Total de apartado</Text>
                                <Text>$0.00</Text>
                            </View>
                            <TouchableOpacity style={{width:'auto',height:'auto'}}>
                                <Text style={{color:'#55aee8',fontSize:18,fontWeight:'bold'}}>Ver apartados</Text>
                            </TouchableOpacity>
                        </View>    
                    </View>
                    <View style={{width:'100%',height:600,borderWidth:1,borderColor:'#000000'}}>
                        <View style={styles.mainBtnsOptions}>
                            <TouchableOpacity style={styles.btnMainOptionContainer}>
                                <Image source={require('../../../assets/images/transferir.png')} resizeMode="contain" style={{width:85,height:50}}/>                                         
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnMainOptionContainer}>
                                <Image source={require('../../../assets/images/oportunidades.png')} resizeMode="contain" style={{width:85,height:45}}/>                     
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnMainOptionContainer}>
                                <Image source={require('../../../assets/images/retiro.png')} resizeMode="contain" style={{width:85,height:50}}/>                     
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnMainOptionContainer}>
                                <Image source={require('../../../assets/images/mas.png')} resizeMode="contain" style={{width:80,height:35}}/>                     
                            </TouchableOpacity>                        
                        </View>
                    </View>
                                    
                </ScrollView>
           </View>
        </View>
    )
}
export default MyAccountGeneralInformation