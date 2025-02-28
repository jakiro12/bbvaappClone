import { BankContext } from "@/app/_layout";
import { useContext } from "react";
import { Text, View } from "react-native"

const AllInformationAboutMovement=()=>{
    const {idMovement}: any = useContext(BankContext);
    return(
        <View>
            <Text>
                Informacion total del movimiento: {idMovement}
            </Text>
        </View>
    )
}
export default AllInformationAboutMovement