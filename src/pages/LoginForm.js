import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Input from '../components/Input';
import MyButton from '../components/MyButton';
import { Actions } from 'react-native-router-flux';


export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { adi: 'ibo@mbb.com', pass: '123456' }
    }


    btnKontrolEt = () => {
        const { adi,pass}=this.state;
        //console.log('email' +this.state.adi)
        //console.log('password' +this.state.pass)
        firebase.auth().signInWithEmailAndPassword(adi,pass)
        .then(this.loginSuccess)
        .catch(this.loginFail);
       
    }
    loginSuccess=()=>{
        alert ("success")
        Actions.Listviewscreen();
        
    }
    loginFail=()=>{
        alert("fail")

    }

    render() {
        return (
            <View>
                <Text style={styles.singInText}>Sing In</Text>
                <Input
                    value={this.state.adi}
                    returnKeyType={"next"}
                    autoCapitalize="none"
                    placeholder="Kullanıcı Adı"
                    onChangeText={text => this.setState({ adi: text })}
                    onSubmitEditing={() => this.IDInput.focus()}
                />
                <Input
                    value={this.state.pass}
                    returnKeyType={"go"}
                    secureTextEntry={true}
                    placeholder="Şifre"
                    onChangeText={text => this.setState({ pass: text })}
                    inputRef={input => this.passwordInput = input}
                />
                <MyButton
                    text={"GİRİŞ"}
                    bgColor={"#0065e0"}
                    textColor={"#f1f1f1"}

                    onPress={() => this.btnKontrolEt()}

                />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    singInText: {
        marginVertical: 20,
        fontSize: 14,
        color: '#333'
    }
}

);
