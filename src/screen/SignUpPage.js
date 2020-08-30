import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';

export default class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password : '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle}
                    placeholder="Enter Your ID"
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                />

                <TextInput style={styles.textInputStyle}
                    placeholder="Enter Your Password"
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.password}
                />
                
                <Button style={styles.buttonStlye}
                    title="Sign Up"
                    color='red'
                    onPress={() => console.log('name = ', this.state.name, 'passowrd = ', this.state.password)}
                />
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

    buttonStlye: {
        color: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
