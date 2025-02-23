import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native"
import styles from '../../styles/home-styles'
import DownNavBar from "@/components/down-nav-bar"
import { router, useNavigation, usePathname } from "expo-router"
import { useEffect } from "react"
const HomeScreen =()=>{
    const routeName=usePathname()    
    const navigation = useNavigation();
    useEffect(() => {
        navigation.addListener("beforeRemove", (e) => {
       // Prevent default behavior of leaving the screen
       if (e.data.action.type === "GO_BACK") {
        e.preventDefault();
      }
    });
  }, []);
    return(
        <ImageBackground source={require('../../assets/images/fondo3.png')} resizeMode="cover" style={styles.container}>            
        <StatusBar   backgroundColor="#004481"/>        
           <View style={styles.topOptionsContainer}>
                <Text style={styles.topTittleName}>Hola Aranza</Text>
                <View style={styles.bgTopFix}></View>
                <View style={styles.btnsTopBox}>
                <Image source={require('../../assets/images/interrogacion.png')} resizeMode="contain" style={{width:20,height:20}}/>                                         
                <Image source={require('../../assets/images/menu.png')} resizeMode="contain" style={{width:20,height:20}}/>                                                             
                </View>
           </View>
           <View style={styles.mainBtnsOptions}>
                <TouchableOpacity style={styles.btnMainOptionContainer}
                    onPress={()=>router.push('/home/transfer/transfer')}>
                    <Image source={require('../../assets/images/transferir.png')} resizeMode="contain" style={{width:85,height:50}}/>                                         
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMainOptionContainer}>
                    <Image source={require('../../assets/images/oportunidades.png')} resizeMode="contain" style={{width:85,height:45}}/>                     
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMainOptionContainer}>
                    <Image source={require('../../assets/images/retiro.png')} resizeMode="contain" style={{width:85,height:50}}/>                     
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMainOptionContainer}>
                    <Image source={require('../../assets/images/mas.png')} resizeMode="contain" style={{width:80,height:35}}/>                     
                </TouchableOpacity>                        
           </View>
           <View style={styles.mainInfoAbout}>
                <TouchableOpacity 
                    onPress={()=>router.push('/home/account-information/myAccount')}
                    activeOpacity={1}
                    style={styles.boxMainInfoDisplay}>
                    <View style={styles.titleCardBox}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'#5e5e5e'}}>CUENTAS EN PESOS</Text>
                    </View>
                    <View style={styles.infoCardBox}>
                        <View style={[styles.boxInfoDisplay,{alignItems:'flex-start'}]}>
                            <Text style={{fontSize:18,fontWeight:'bold',color:'#55aee8'}}>0001ah0878</Text>
                            <Text style={{fontSize:18}}>*0908</Text>
                        </View>
                        <View style={[styles.boxInfoDisplay,{alignItems:'flex-end'}]}>
                            <Text style={{fontSize:22}}>$697.66</Text>
                            <Text style={{fontSize:18,fontWeight:100,color:'#9c9c9c'}}>Saldo disponible</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.boxMainInfoDisplay}>
                <View style={styles.titleCardBox}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'#5e5e5e'}}>TARJETAS</Text>
                    </View>
                    <View style={styles.infoCardBox}>
                        <View style={styles.borxCardUserInfo}>
                            <Text style={{fontSize:18,fontWeight:'bold',color:'#55aee8'}}>0001ah0878</Text>
                            <Image source={require('../../assets/images/tarjeta.png')} resizeMode="contain" style={{width:55,height:55}}/>                     
                            <Text style={{fontSize:18}}>*4790</Text>
                        </View>
                        <View style={{width:'20%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-end'}}>
                            <Image source={require('../../assets/images/iconodecel.png')} resizeMode="contain" style={{width:25,height:25}}/>                                                 
                        </View>
                    </View>
                    <View></View>
                </View>
           </View>
          <DownNavBar routePath={routeName} />
        </ImageBackground>
    )
}
export default HomeScreen