import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import GameScreen from './GameScreen';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <Image source={require('../assets/success.png')}/>
            <Text>Number of rounds: {props.roundsNumber} </Text>
            <Text>Number was: {props.userNumber} </Text>
            <Button title="Re Start" onPress={props.onRestart} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    }
});

export default GameOverScreen;