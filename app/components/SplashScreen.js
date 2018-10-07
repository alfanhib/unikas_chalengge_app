import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import { Container } from 'native-base'
import image from '../assets/imag.png'

const SplashScreen = (props) => (
    <Container>
        <ImageBackground source={image} style={styles.image} />
    </Container>
)

export default SplashScreen

const styles= StyleSheet.create({
    image:{
        resizeMode:'cover',
        flex:1
    }
})