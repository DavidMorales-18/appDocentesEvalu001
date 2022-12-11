import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from "react";
import { firebase } from '../config';
/* import { useNavigation } from '@react-navigation/native'; */

const Dashboard = () => {
  const [name, setLastname] = useState('')

  useEffect(() => {
    firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setLastname(snapshot.data())
        } else {
          console.log('User does not exist');
        }

      })

  }, [])

  return (
    <SafeAreaView style={style.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 23 }}>
        Puedes comenzar a calificar,{name.lastname}
      </Text>
      <TouchableOpacity 
      onPress={()=>{ firebase.auth().signOut()}}
      style={style.button}
      >

        <Text style={{ fontWeight: 'bold', fontSize: 23 }}>
            SALIR
        </Text>
        
      </TouchableOpacity>

    </SafeAreaView>


  )
}

export default Dashboard

const style = StyleSheet.create({
  container:{
      flex:1,
      alignItems:'center',
      marginTop:10,
  },
  textInput:{
      paddingTop:20,
      paddingBottom: 10,
      width: 400,
      fontSize: 20,
      borderBottomWidth:1,
      borderBottomColor: '#000',
      marginBottom: 10,
      textAlign: 'center'
  },
  button:{
      marginTop:50,
      height:70,
      width:250,
      backgroundColor:'#026efd',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:50
  }
})