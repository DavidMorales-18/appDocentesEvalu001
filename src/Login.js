import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

import React, { useState } from "react";
import { firebase } from '../config';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    loginUSer = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            alert(error.message)
        }

    }
    return (
        <View style={style.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 26 }}>
                Login
            </Text>
            <View style={{ marginTop: 40 }} >
                <TextInput
                    style={style.textInput}
                    placeholder='Email'
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
                onPress={() => loginUSer(email, password)}
                style={style.button}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>
                    Login
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Registration')}
                style={{marginTop:20}}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                    Registrate? 
                </Text>

            </TouchableOpacity>
        </View>
    )
}

export default Login

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