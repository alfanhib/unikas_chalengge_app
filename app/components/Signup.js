import React from "react"
import { Image, StyleSheet} from 'react-native'
import { Container, Content, Text, View, Icon, Item, Input, Button } from 'native-base'
import Logo from '../assets/jobz.png'
import Logo_2 from '../assets/icon2.png'

import { responsiveSize as Sizes, convertWidthPercentToDP ,convertHeightPercentToDP } from '../particles/Converter'

const Signup = (props) => (
    <Container>
        <Content>
            <View style={styles.wrapperheader}>
                <Text style={styles.header}>Sign Up</Text>
                <Image source={Logo} style={styles.logo} />
            </View>
            <View style={styles.wrappertitle}>
                <Text style={styles.welcome}>WELCOME ,</Text>
                <Text style={styles.subtitle}>Sign Up To Jobz To See Contact</Text>
            </View>
            <View style={styles.form}>
                <Item>
                    <Icon active name='mail' />
                    <Input placeholder='Email' onChangeText={props.onChangeEmail}/>
                </Item>
                <Item>
                    <Icon active name='person' />
                    <Input placeholder='Username' onChangeText={props.onChangeUsername}/>
                </Item>
                <Item>
                    <Icon active name='lock' />
                    <Input placeholder='Password' secureTextEntry onChangeText={props.onChangePassword}/>
                </Item>
                    {props.renderButtons}
            </View>
            <View style={styles.footer}>
                <Text>Have an acount,<Text style={styles.txtSignup}> Sign In </Text></Text>
            </View>
        </Content>
    </Container>
)

export default Signup

const styles = StyleSheet.create({
    header:{
        alignSelf:'center',
        marginTop:convertHeightPercentToDP(5),
        fontSize:Sizes(3)
    },
    logo:{
        marginTop:convertHeightPercentToDP(5),
        
    },
    wrapperheader:{
        alignItems:'center'
    },
    wrappertitle:{
        alignItems:'center',
        marginTop:convertHeightPercentToDP(5)
    },
    form:{
        marginTop:convertHeightPercentToDP(5),
        marginHorizontal:convertHeightPercentToDP(4)
    },
    Button:{
        marginTop:convertHeightPercentToDP(5),
        width:convertWidthPercentToDP(80),
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:'#353535'
    },
    TextLogin:{
        alignSelf:'center',
        textAlign:'center'
    },
    footer:{
        alignItems:'center',
        marginTop:convertHeightPercentToDP(4)
    },
    txtSignup:{
        color:'#33B44F'
    },
    welcome:{
        fontSize:Sizes(3),
        fontWeight:"bold"
    },
    subtitle:{
        color:'#9B9B9B'
    },
})