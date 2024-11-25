import React from "react";
import { View, Text, Image } from 'react-native'
import { style } from "./styles";
import Logo from '../../assets/log3_processed.png';


export default function Local (){
    return(
        <View style={style.container}>

            <View style={style.logo}>
                <Image style={style.img}
                    source={Logo}
                    resizeMode="contain"
                /> 

            </View>
            <View style={style.texto}>
                <Text style={style.text}>
                A Doe+ é uma ONG dedicada a transformar vidas por meio da solidariedade. Nosso objetivo é arrecadar doações de roupas e redistribuí-las para pessoas em situações delicadas. Acreditamos que pequenos gestos podem gerar grandes mudanças, e juntos podemos aquecer não só o corpo, mas também o coração de quem mais precisa.

 Contamos com dois pontos estratégicos de coleta para facilitar a contribuição da comunidade:
 Local 1: Av. Vida Nova, 166 - Jardim Maria Rosa, Taboão da Serra - SP, 06764-045 
 / Local 2: Rod. Régis Bittencourt, 157 - Parque Santos Dumont, Taboão da Serra - SP, 06768-000. Venha fazer parte desse movimento e ajude-nos a fazer a diferença. Juntos, podemos transformar vidas!

                </Text>
                <Text style={style.text2}>Doe, participe, e faça a diferença com a Doe+!</Text>
            </View>
            
        </View>

    )

}