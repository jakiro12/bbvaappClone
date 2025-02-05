import { View } from "react-native"
import styles from '../../../../styles/home-options'
import { useState } from "react"
import AddNewAdresee from "./newAdresee"
import MainOptionsToChoose from "./mainOptions"
import CheckifAdreseeExist from "./findAdresee"
const AdreseeOption =()=>{
    const [statusAction,setStatusAction]=useState<string | null>(null)
    const handleStatusAction=(value:string | null)=>{
        setStatusAction(value)
    }
    let content;
    switch (statusAction) {
        case 'new':
            content=<AddNewAdresee 
                        setAdreseeStatus={handleStatusAction}
                        />
            break;    
        case 'find':
            content=<CheckifAdreseeExist 
                        setAdreseeStatus={handleStatusAction}
                    />
            break;
        default:
            content=<MainOptionsToChoose
                        setAdreseeStatus={handleStatusAction}   
                        />
            break;
    }
    return(
        <View style={styles.container}>
           {content}
        </View>
    )
}
export default AdreseeOption