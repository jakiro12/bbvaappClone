import { Text, View } from "react-native"
import styles from '../../styles/notification-view'
import { TouchableOpacity } from "react-native"
import { router } from "expo-router"
import { Image } from "react-native"
const SeeLastMovement=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.topTitleContainer}>
                    <Text style={styles.topTittleName}>Transfeir & Dimo</Text>
                    <TouchableOpacity 
                        style={styles.cancelBtnTop}
                        onPress={()=>router.back()}>
                        <Image source={require('../../assets/images/x.png')} style={{width:20,height:20,tintColor:'#ffffff'}} resizeMode="cover"/>                                        
                    </TouchableOpacity>
                </View>
                <View style={styles.mainInformationDisplay}>
                    <View style={styles.mainBoxesBigInfo}></View>
                    <View style={styles.mainBoxesBigInfo}></View>
                    <View style={styles.mainBoxesBigInfo}></View>
                    <View style={styles.mainBoxesFinalInfo}></View>
                </View>
                <View style={styles.bottomOptionsDisplay}>

                </View>
        </View>
    )
}
export default SeeLastMovement