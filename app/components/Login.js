import React from "react"
import { Image, StyleSheet} from 'react-native'
import { Container, Content, Text, View, Icon, Item, Input, Button } from 'native-base'
import Logo from '../assets/jobz.png'
import Logo_2 from '../assets/icon2.png'

import { responsiveSize as Sizes, convertWidthPercentToDP ,convertHeightPercentToDP } from '../particles/Converter'

const Login = (props) => (
    <Container>
        <Content>
            <View style={styles.wrapperheader}>
                <Text style={styles.header}>Sign In</Text>
                <Image source={Logo} style={styles.logo} />
            </View>
            <View style={styles.wrappertitle}>
                <Text style={styles.welcome}>WELCOME BACK,</Text>
                <Text style={styles.subtitle}>Sign In To Jobz To See Contact</Text>
            </View>
            <View style={styles.form}>
                <Item>
                    <Icon active name='mail' />
                    <Input 
                        placeholder='Email'
                        value={props.valueEmail}
                        onChangeText={props.onChangeEmail}
                    />
                </Item>
                <Item>
                    <Icon active name='lock' />
                    <Input 
                        placeholder='Password'
                        value={props.valuePassword}
                        onChangeText={props.onChangePassword}
                        secureTextEntry
                    />
                </Item>
                {props.renderButtons}
            </View>
            <View style={styles.footer}>
                <Text>You do not have an account?,<Text style={styles.txtSignup} onPress={props.navigateToRegister}> Sign Up </Text></Text>
            </View>
            <View>
                <Image source={Logo_2} style={styles.logo2}/>
            </View>
        </Content>
    </Container>
)

export default Login

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
    logo2:{
        alignSelf:'center'
    }
})