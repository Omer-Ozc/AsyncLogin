import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';


export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uName: '',
            uPassword: '',
            userDatas:[]
        }
    }

    componentDidMount() {
        this.getItemData()
    }

    getItemData = async () => {
        console.log('calisti')
        try {
            const Accaount = await AsyncStorage.getItem('Accounts');
            let userData = []
            if (Accaount !== null) {
                userData.push(JSON.parse(Accaount))
                this.setState({userDatas:userData})
            }
            console.log('UserData', userData)

        } catch (error) {
            alert(error)
        }


    };

    touchAblePressFunction() {
        this.props.navigation.navigate('SignUpPage')
    }

    LoginFunction() {
        let isOk = true

        for(let i = 0 ; i< this.state.userDatas[0].length ; i++){
           // console.log(this.state.userDatas[0][i]['name'])

           if(this.state.uName == this.state.userDatas[0][i]['name'] && this.state.uPassword == this.state.userDatas[0][i]['password']){
            this.props.navigation.navigate('Successfull')
            isOk=false
           }
        }
        if(isOk){
            alert('Wrong ID Or Password')
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle}
                    placeholder="Enter Your ID"
                    onChangeText={(text) => this.setState({ uName: text })}
                    value={this.state.uName} />

                <TextInput style={styles.textInputStyle}
                    placeholder="Enter Your Password"
                    onChangeText={(text) => this.setState({ uPassword: text })}
                    value={this.state.uPassword} />

                <Button style={styles.buttonStyle}
                    title="Login"
                    color='red'
                    onPress={() => this.LoginFunction()}
                />

                <TouchableOpacity style={styles.touchAbleOpacityStyle}
                    onPress={() => this.props.navigation.navigate('SignUpPage')}>

                    <Text style={{ color: 'red' }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputStyle: {
        backgroundColor: 'white',
        width: '75%',
        borderColor: '#D3D3D3',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 50,
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 5
    },

    buttonStyle: {
        borderRadius: 50,
        marginBottom: 5
    },

    touchAbleOpacityStyle: {


    }
})
