import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    touchAblePressFunction(){
        this.props.navigation.navigate('SignUpPage')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle}
                    placeholder='Login ID' />

                <TextInput style={styles.textInputStyle}
                    placeholder='Password' />

                <Button style = {styles.buttonStyle}
                    title="Login"
                    color='red'
                />

                <TouchableOpacity style = {styles.touchAbleOpacityStyle}
                onPress = {()=>this.props.navigation.navigate('SignUpPage')}>

                    <Text style={{color:'red'}}>Sign Up</Text>
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
        marginBottom:5
    },

    buttonStyle : {
        borderRadius:50,
        marginBottom:5
    },

    touchAbleOpacityStyle :{


    }
})
