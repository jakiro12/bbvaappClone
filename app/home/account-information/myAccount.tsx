import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from '../../../styles/account-styles'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
import { Image } from "react-native";
import MoveItemDetails from "./components/moveItem";
const MyAccountGeneralInformation=()=>{
    const deviceHeight=Dimensions.get('window').height - 50;
    const helpData=[
        { date: '25 de febrero', movements: [{
            name:'Spei enviado Banamex',
            opertationType:'Transferencia interbancaria enviada',
            value:100,
            status:'Transito'
        },
        {
            name:'Spei enviado Banamex',
            opertationType:'Transferencia interbancaria enviada',
            value:1500.33,
            status:'Transito'
        },
        {
            name:'Spei enviado Banamex',
            opertationType:'Transferencia interbancaria enviada',
            value:1500.33,
            status:'Transito'
        }
    ] },
         { date: '26 de febrero', movements: [{
            name:'Spei enviado Banamex',
            opertationType:'Transferencia interbancaria enviada',
            value:1200,
            status:'Transito'
        },
        {
            name:'Spei enviado Banamex',
            opertationType:'Transferencia interbancaria enviada',
            value:200,
            status:'Transito'
        },
        {
            name:'Spei enviado Banamex',
            opertationType:'Transferencia interbancaria enviada',
            value:1200,
            status:'Transito'
        },        
    ] },
    ]

    
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
                <ScrollView contentContainerStyle={{width:'100%',rowGap:10,display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column'}}>
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
                    <View style={{width:'100%',height:600}}>
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
                        <View style={{width:'100%',height:40,backgroundColor:'#f4f4f4',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{width:'95%',height:'auto',fontWeight:'bold',fontSize:16}}>ULTIMOS MOVIMIENTOS</Text>
                        </View>
                        {helpData.map((item, index) => (
                        <View key={index} style={{ width: '100%', height:'auto',display:'flex',flexDirection:'column',alignItems:'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold',fontStyle:'italic',width:'95%',height:'auto' }}>{item.date}</Text>
                                {item.movements.map((movement, i) => (
                                    <MoveItemDetails movement={movement} key={i}/>
                                ))}
                            
                        </View>
                    ))}
                    </View>
                    <TouchableOpacity 
                        onPress={()=>router.push('/home/account-information/all-movements/fullList')}
                        style={{width:'auto',height:'auto'}}>
                                <Text style={{color:'#55aee8',fontSize:18,fontWeight:'bold'}}>Ver todos</Text>
                    </TouchableOpacity>                                    
                </ScrollView>
           </View>
        </View>
    )
}
export default MyAccountGeneralInformation