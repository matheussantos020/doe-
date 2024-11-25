import React from "react";
import Logo from '../../assets/log3_processed.png'
import {Text, View, Image, Linking} from 'react-native'
import { style } from "./styles";
import Map, { Marker, Callout } from "react-native-maps";

const coordinate = {
    latitude: -23.61045042515742, 
    longitude: -46.76847330473667,
}
const coordinate2 = {
    latitude: -23.608700516046603,
    longitude: -46.754672104736855,
}  

export default function Local (){
    return(
        <View style={style.container}>
        
            <View style={style.logo}>
                <Image style={style.img}
                    source={Logo}
                    resizeMode="contain"
                /> 

            </View>

            <View style={style.boxMap}>
                <Map style={style.mapaa} 
                    initialRegion={{
                       latitude: coordinate.latitude,
                       longitude: coordinate.longitude, 
                       latitudeDelta: 0.005,
                       longitudeDelta: 0.005,
                    }}
                >
                    <Marker coordinate={coordinate}>
                        <Callout>
                            <View>
                                <Text>Ponto de coleta 1</Text>
                            </View>
                        </Callout>
                    </Marker>
                </Map>
            </View>
            <View style={style.link1}>
                <Text>Local de coleta 1:</Text>
                <Text style={style.textlink1} onPress={() =>
                    {Linking.openURL('https://www.google.com/maps/dir//UniFECAF+-+Av.+Vida+Nova,+166+-+Jardim+Maria+Rosa,+Tabo%C3%A3o+da+Serra+-+SP,+06764-045/@-23.6104947,-46.7710482,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce5440bff2ae91:0x7ad8e14017bed7a9!2m2!1d-46.7684733!2d-23.6104996?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D')}}
                    >Av. Vida Nova, 166 - Taboão da Serra</Text>
            </View>
           

            <View style={style.boxMap2}>
            <Map style={style.mapaa2} 
                    initialRegion={{
                       latitude: coordinate2.latitude,
                       longitude: coordinate2.longitude, 
                       latitudeDelta: 0.005,
                       longitudeDelta: 0.005,
                    }}
                >
                    <Marker coordinate={coordinate2}>
                        <Callout>
                            <View>
                                <Text>Ponto de coleta 2</Text>
                            </View>
                        </Callout>
                    </Marker>
                </Map>
            </View>
            <View style={style.link2}>
                <Text>Local de coleta 2:</Text>
                <Text style={style.textlink2} onPress={() =>
                    {Linking.openURL('https://www.google.com/maps/dir//UniFECAF+-+Rod.+R%C3%A9gis+Bittencourt,+157+-+Parque+Santos+Dumont,+Tabo%C3%A3o+da+Serra+-+SP,+06768-000/@-23.6088133,-46.7548953,18.79z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce550e48ee3efd:0xc867802d15191336!2m2!1d-46.7546721!2d-23.608848?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D')}}
                    >Rod. Régis Bittencourt, 157 - Taboão da Serra</Text>
            </View>

        </View>
    )
}