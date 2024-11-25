import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({


    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height:'100%',
        gap: '3%',
        backgroundColor: '#FFF',
    },

    img:{
        width: 350,
        height: 250,
    },

    logo:{
        alignItems: 'center',
        justifyContent: 'center',
        
        
    }, 
    texto:{
        width:'80%',
        height:'60%',
        gap: 5,
       
    },
    text: {
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'justify',
        fontSize: 15,
        fontFamily: 'arial',
        fontWeight: 'bold',
    },
    text2:{
        fontSize: 17,
        fontFamily: 'arial',
        fontWeight: 'bold',
    }
})