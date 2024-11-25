import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height:'100%',
        gap: '3%',
        backgroundColor: '#FFF'
    },

    img:{
        width: 350,
        height: 250,
    },

    logo:{
        alignItems: 'center',
        justifyContent: 'center',

        
        
    }, 

    boxTop:{
         backgroundColor: '#EBF8E5',
         width: '75%',
         height: '12%',
         borderRadius: 30,
         alignItems: 'center',
         justifyContent: 'center',
         borderWidth: 2,
         borderColor: '#9AD681',

    }, 

    boxMid:{
         backgroundColor: '#EBF8E5',
         width: '75%',
         height: '12%',
         borderRadius: 30,
         alignItems: 'center',
         justifyContent: 'center',
         borderWidth: 2,
         borderColor: '#9AD681',
    },

    boxBottom:{
        backgroundColor: '#EBF8E5',
        width: '75%',
        height: '12%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor:'#9AD681'
    },
    button:{
     
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    text1:{
        fontSize: 20,
        fontFamily: 'inter',
        fontWeight: 'bold',
        color:'#9AD681'
      
    },
    text2:{
        fontSize: 20,
        fontFamily: 'inter',
        fontWeight: 'bold',
        color: 'red',
      
    }
})