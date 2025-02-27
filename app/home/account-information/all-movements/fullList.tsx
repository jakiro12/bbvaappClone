import { AntDesign } from "@expo/vector-icons"
import { router } from "expo-router"
import { ScrollView, TouchableOpacity, Text, View, Dimensions, Image  } from "react-native"
import styles from '../../../../styles/account-styles'
import MoveItemDetails from "../components/moveItem"

const FullListOfAllMovements=()=>{
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
    { date: '27 de febrero', movements: [{
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
                        <AntDesign name="questioncircle" size={22} color="#ffffff" style={{marginRight:10}}/>
                <Text style={styles.topTittleName}>Movimientos</Text>
            </View>
           <View style={{width:'100%',height:deviceHeight,marginTop:50,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <ScrollView contentContainerStyle={{width:'100%',rowGap:10,display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column'}}>
                    <View style={styles.boxAlertAbout}>
                        <Image source={require('../../../../assets/images/alert.png')} resizeMode="cover" style={{width:20,height:20,marginBottom:20}}/>                
                        <Text style={{width:'90%',height:'auto',textAlign:'center'}}>Si desconoces alguna operacion, selecciona y reportalo dentro del detalle del movimiento.
                            Tienes hasta 90 dias desde la fecha de compra para hacerlo.
                        </Text>
                    </View>
                    {helpData.map((item, index) => (
                        <View key={index} style={{ width: '100%', height:'auto',display:'flex',flexDirection:'column',alignItems:'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold',fontStyle:'italic',width:'95%',height:'auto' }}>{item.date}</Text>
                                {item.movements.map((movement, i) => (
                                    <MoveItemDetails movement={movement} key={i}/>
                                ))}
                            
                        </View>
                    ))}
                </ScrollView>
            </View>
         </View>
    )
}
export default FullListOfAllMovements