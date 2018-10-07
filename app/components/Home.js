import React from 'react'
import { Container, Content, View, Footer, Text, Button, Spinner } from 'native-base'
import { StyleSheet, FlatList, Image } from 'react-native'
import Logo from '../assets/jobz.png'
import AddContact from '../particles/AddContact'


const Home = (props) => (
    <Container>
        <Content>
            {console.log('alo',props.loading)}
            <View style={{margin:5}}>
                <Image source={Logo} style={{alignSelf:'center'}} />
            </View>
            {props.loading.condition == true ?
                <View>
                    <Spinner color="#3FB74C"/>
                </View>:
                <View>
                    {props.dataContact == 0 ?
                        <Text style={{textAlign:'center'}}>You dont have Contact , Please Make It One</Text>
                        :
                        <View>
                            <FlatList 
                                data={props.dataContact}
                                renderItem={props.renderContact}
                                keyExtractor={(item, index) => JSON.stringify(index)}
                            />
                        </View>
                    }
                </View>
            }
        </Content>
        <Footer style={{backgroundColor:'#C1D72E'}}>
            <View style={{alignItems:"center", alignSelf:'center'}}>
                <Button style={{backgroundColor:'#3FB74C'}} onPress={props.addContact}><Text>Add Contact</Text></Button>
            </View>
        </Footer>
    </Container>
)

export default Home