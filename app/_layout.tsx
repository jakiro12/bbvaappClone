import { TransferData } from '@/constants/stateType';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import 'react-native-reanimated';

interface BankContextType {
  newTransfer: TransferData;
  setNewTransfer: React.Dispatch<React.SetStateAction<TransferData>>;
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
export const BankContext=React.createContext<BankContextType | undefined>(undefined)


export default function RootLayout() {
  const[newTransfer,setNewTransfer]=useState<TransferData>({
    account_number:'',
    bank_name:'',
    adresee_name:'',
    save_data:true,
    alias_adresee:'',
    amount_to_send:'',
    reference:'',
    concept:''
  })
  return (
    <BankContext.Provider value={{newTransfer,setNewTransfer}}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home/home" options={{ headerShown: false }} />
        <Stack.Screen name="home/transfer/transfer" options={{ headerShown: false,animation:'slide_from_bottom',animationDuration:1000}} />
        <Stack.Screen name="home/transfer/adresee/adresee" options={{ headerShown: false,animation:'slide_from_bottom',animationDuration:1000}} />
        <Stack.Screen name="home/transfer/adresee/amount/amount" options={{ headerShown: false,animation:'slide_from_bottom',animationDuration:1000}} />
        <Stack.Screen name="home/transfer/adresee/amount/reference/reference" options={{ headerShown: false,animation:'slide_from_bottom',animationDuration:600}} />
        <Stack.Screen name="movement/current" options={{ headerShown: false,animation:'slide_from_bottom',animationDuration:600}} />
        <Stack.Screen name="movement/token/token" options={{ headerShown: false,animation:'slide_from_bottom',animationDuration:600}} />
        <Stack.Screen name="movement/token/ticket/ticket" options={{ headerShown: false,animation:'slide_from_bottom',animationDuration:600}} />
        <Stack.Screen name="home/account-information/myAccount" options={{ headerShown: false,animation:'slide_from_right',animationDuration:600}} />
        <Stack.Screen name="home/account-information/all-movements/fullList" options={{ headerShown: false,animation:'slide_from_right',animationDuration:600}} />
        <Stack.Screen name="+not-found" />
        <StatusBar style="auto" />
      </Stack> 
    </BankContext.Provider>
  );
}
