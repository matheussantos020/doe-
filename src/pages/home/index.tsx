import React from "react";

import {Text, Touchable, TouchableOpacity, View, Image, BackHandler, Alert} from 'react-native';

import { style } from "./styles";

import Logo from '../../assets/log3_processed.png'
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Home (){

    const navigation = useNavigation<NavigationProp<any>>();

    async function getNext() {
        
            navigation.navigate('Local')
    
    }

    async function getdoe() {
        
            navigation.navigate('Doe')

    } 

    async function sair() {
        Alert.alert(
            'SAIR',
            'Tem certeza que deseja sair?',
            [
                { text: 'SIM' , onPress: () => BackHandler.exitApp() },
                { text: 'NÃO' }
            ],
            { cancelable: false}

        )

    }
    

    return ( 
        <View style={style.container}>
            <View style={style.logo}>
                <Image style={style.img}
                    source={Logo}
                    resizeMode="contain"
                /> 

            </View>
          
            <View style={style.boxMid}>
            <TouchableOpacity style={style.button} onPress={()=>getdoe()}>
                    <Text style={style.text1}>CONHEÇA A DOE+</Text>
                </TouchableOpacity>
                
                
            </View>
            <View style={style.boxTop}>
                <TouchableOpacity style={style.button} onPress={()=>getNext()}>
                    <Text style={style.text1}>LOCAIS DE COLETA</Text>
                </TouchableOpacity>
                
            </View>
            <View style={style.boxBottom}>
            <TouchableOpacity style={style.button} onPress={()=>sair()}>
                    <Text style={style.text2}>SAIR</Text>
                </TouchableOpacity>
                
                
            </View>

        </View>
        
    )
}