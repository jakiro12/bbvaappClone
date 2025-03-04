import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View, Animated, Easing } from "react-native"
import styles from '../../styles/home-styles'
import DownNavBar from "@/components/down-nav-bar"
import { router, useNavigation, usePathname } from "expo-router"
import { useEffect,useState } from "react"
import SideMenuOptions from "../components-views/side-menu"
const HomeScreen =()=>{
    const routeName=usePathname()    
    const navigation = useNavigation();
    const [translateX] = useState(new Animated.Value(0)); // Controla el desplazamiento de la vista principal
    const [squareTranslateX] = useState(new Animated.Value(280)); // Controla el desplazamiento del cuadrado (comienza fuera de la pantalla)
    const [isAnimating, setIsAnimating] = useState(false);
    
      useEffect(() => {
        if (isAnimating) {
          // Animación para empujar el contenido principal hacia la izquierda
          Animated.timing(translateX, {
            toValue: -280, // Desplazar hacia la izquierda
            duration: 600,
            easing: Easing.ease,
            useNativeDriver: true,
          }).start();
    
          // Animación para mover el cuadrado desde la derecha hacia su posición
          Animated.timing(squareTranslateX, {
            toValue: 0, // El cuadrado llegará al borde derecho de la pantalla
            duration: 600,
            easing: Easing.ease,
            useNativeDriver: true,
          }).start();
        }else{
             // Animación para empujar el contenido principal hacia la izquierda
          Animated.timing(translateX, {
            toValue: 0, // Desplazar hacia la izquierda
            duration: 600,
            easing: Easing.ease,
            useNativeDriver: true,
          }).start();
    
          // Animación para mover el cuadrado desde la derecha hacia su posición
          Animated.timing(squareTranslateX, {
            toValue: 280, // El cuadrado llegará al borde derecho de la pantalla
            duration: 600,
            easing: Easing.ease,
            useNativeDriver: true,
          }).start();
        }
      }, [isAnimating, translateX, squareTranslateX]);
    
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
        <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
           <View style={styles.topOptionsContainer}>
                <Text style={styles.topTittleName}>Hola Aranza</Text>
                <View style={styles.bgTopFix}></View>
                <View style={styles.btnsTopBox}>
                    <Image source={require('../../assets/images/interrogacion.png')} resizeMode="contain" style={{width:22,height:22}}/>                                         
                    <TouchableOpacity 
                        onPress={() => setIsAnimating(true)}
                        style={{width:'auto',height:'auto'}}>
                        <Image source={require('../../assets/images/menu.png')} resizeMode="contain" style={{width:22,height:22}}/>                                                             
                    </TouchableOpacity>
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
                <TouchableOpacity style={styles.btnMainOptionContainer}
                    onPress={()=>router.push('/home/plus/plus-options')}
                    >
                    <Image source={require('../../assets/images/mas.png')} resizeMode="contain" style={{width:80,height:35}}/>                     
                </TouchableOpacity>                        
           </View>
           <View style={styles.mainInfoAbout}>
                <TouchableOpacity 
                    onPress={()=>router.push('/home/account-information/myAccount')}
                    activeOpacity={1}
                    style={styles.boxMainInfoDisplay}>
                    <View style={styles.titleCardBox}>
                        <Text style={styles.cardBoxTitle}>CUENTAS EN PESOS</Text>
                    </View>
                    <View style={styles.infoCardBox}>
                        <View style={[styles.boxInfoDisplay,{alignItems:'flex-start'}]}>
                            <Text style={{fontSize:18,fontWeight:'bold',color:'#55aee8'}}>0001ah0878</Text>
                            <Text style={{fontSize:18}}>*0908</Text>
                        </View>
                        <View style={[styles.boxInfoDisplay,{alignItems:'flex-end'}]}>
                            <View style={styles.amountAccountContainer}>
                                <Text style={styles.valueSymbol}>$</Text><Text style={styles.valueNumber}>1,338.33</Text>
                            </View>     
                            <Text style={{fontSize:18,fontWeight:100,color:'#9c9c9c'}}>Saldo disponible</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.boxMainInfoDisplay}>
                <View style={styles.titleCardBox}>
                        <Text style={styles.cardBoxTitle}>TARJETAS</Text>
                    </View>
                    <View style={styles.infoCardBox}>
                        <View style={styles.borxCardUserInfo}>
                            <Text style={{fontSize:18,fontWeight:'bold',color:'#55aee8'}}>0001ah0878</Text>
                            <Image source={require('../../assets/images/tarjeta.png')} resizeMode="contain" style={{width:55,height:55}}/>                     
                            <Text style={{fontSize:18}}>*4790</Text>
                        </View>
                        <View style={styles.phoneIconContent}>
                            <Image source={require('../../assets/images/iconodecel.png')} resizeMode="contain" style={{width:25,height:25}}/>                                                 
                        </View>
                    </View>
                    <View></View>
                </View>
           </View>
          <DownNavBar routePath={routeName} />

        </Animated.View>
        <Animated.View style={[styles.menu, { transform: [{ translateX: squareTranslateX }] }]} >
             <SideMenuOptions onCloseMenu={setIsAnimating}/>
        </Animated.View>
        </ImageBackground>
    )
}
export default HomeScreen