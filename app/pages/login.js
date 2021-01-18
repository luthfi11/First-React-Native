/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Login = ({ navigation }) => {

    const myUserName = 'admin';
    const myPassword = 'admin';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const doLogin = () => {
        if ((username.toUpperCase() === myUserName.toUpperCase()) && (password === myPassword)) {
            navigation.replace('Home');
        } else {
            Alert.alert('Invalid username or password!');
        }
        setUsername('');
        setPassword('');
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Username" onChangeText={(user) => setUsername(user)} defaultValue={username} style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(pass) => setPassword(pass) } defaultValue={password} style={styles.input}  />
            <Button title="Login" onPress={doLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#555555',
    },
});

export default Login;
