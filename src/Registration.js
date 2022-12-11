import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import { firebase } from '../config';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
/* import { useNavigation } from '@react-navigation/native'; */

const Registration = () => {
  /* const navigation = useNavigation() */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [seudonim, setSeudonim] = useState('');


  RegisterUser = async (email, password, lastname, firstname, seudonim) => {

    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {

        firebase.auth().currentUser.sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://docente-react-firebase.firebaseapp.com',
        })
          .then(() => {
            alert('Verifica el Mail')
          }).catch((error) => {
            alert(error.message)
          })
          .then(() => {
            firebase.firestore().collection('users')
              .doc(firebase.auth().currentUser.uid)
              .set({
                firstname,
                lastname,
                email,
                seudonim
              })
          })
          .catch((error => {
            console.log('error', error)
            alert(error.message)
          }))

      })


  }

  return (
    <KeyboardAwareScrollView >
      <View style={style.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 23 }}>
          Registrate
        </Text>
        <View style={{ marginTop: 40 }} >
          <TextInput
            style={style.textInput}
            placeholder='Nombre'
            onChangeText={(firstname) => setFirstname(firstname)}
            autoCapitalize='nome'
            autoCorrect={false}
          />
          <TextInput
            style={style.textInput}
            placeholder='Apellidos'
            onChangeText={(lastname) => setLastname(lastname)}
            autoCapitalize='nome'
            autoCorrect={false}
          />
          <TextInput
            style={style.textInput}
            placeholder='Seudonim'
            onChangeText={(seudonim) => setSeudonim(seudonim)}
            autoCapitalize='nome'
            autoCorrect={false}
          />

          <TextInput
            style={style.textInput}
            placeholder='email'
            onChangeText={(email) => setEmail(email)}
            autoCapitalize='nome'
            autoCorrect={false}
          />
          <TextInput
            style={style.textInput}
            placeholder='Password'
            onChangeText={(password) => setPassword(password)}
            autoCapitalize='nome'
            autoCorrect={false}
            secureTextEntry={true}
          />

        </View>
        <TouchableOpacity
          onPress={() => RegisterUser(email, password, lastname, firstname, seudonim)}
          style={style.button}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 22 }}>
            Registrate!!!
          </Text>

        </TouchableOpacity>

      </View>
    </KeyboardAwareScrollView>
  )


}

export default Registration



const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 10,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 10,
    textAlign: 'center'
  },
  button: {
    marginTop: 50,
    height: 70,
    width: 250,
    backgroundColor: '#026efd',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  }
})