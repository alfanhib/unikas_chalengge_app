import React from 'react'
import { View, } from 'react-native'
import { Content, Item, Input, Radio, Button, Form, Text, Spinner} from 'native-base'

const  AddContact = (props) => (
    <Content>
        <Form style={{margin:10}}>
            <Item regular style={{margin:5}}>
                <Input placeholder='Name' onChangeText={props.onChangeName} value={props.nameV}/>
            </Item>
            <Item regular style={{margin:5}} >
                <Input placeholder='Address' onChangeText={props.onChangeAddress} value={props.addressV} />
            </Item>
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text>Gender : </Text>
                    <Radio 
                        color={"#F85959"}
                        style={{marginLeft:5}}
                        selectedColor={"#F85959"} 
                        selected={props.gender == 'man' ? true : false}
                        onPress={props.male}/>
                    <Text>Man</Text>
                    <Radio 
                        color={"#F85959"}
                        style={{marginLeft:5}}
                        selectedColor={"#F85959"} 
                        selected={props.gender == 'female' ? true : false}
                        onPress={props.female}/>
                    <Text>Woman</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginTop:10}}>Status :</Text>
                    <View style={{margin: 10, flexDirection:'row'}}>
                        <Radio 
                            color={"#F85959"}
                            selectedColor={"#F85959"} 
                            selected={props.status == 1 ? true : false}
                            onPress={props.active}
                            />
                        <Text>Active</Text>
                        <Radio 
                            color={"#F85959"}
                            selectedColor={"#F85959"} 
                            selected={props.status == 0 ? true : false}
                            onPress={props.deactive}/>
                        <Text>Deactive</Text>
                    </View>
                </View>
            </View>
            
        </Form>
        <View style={{flexDirection:'row'}}>
            <Button onPress={props.handleSaveAddress} style={{margin:5, width:100, alignItems:'center',justifyContent:'center',flex:1}}>
                {props.loading == true ? <Spinner color="#3FB74C"/> : <Text style={{textAlign:'center', alignSelf:'center'}}>Add</Text>}
            </Button>
            <Button onPress={props.backHome} style={{margin:5, width:100, alignItems:'center',justifyContent:'center',flex:1}}><Text style={{textAlign:'center', alignSelf:'center'}}>Cancle</Text></Button>
        </View>
        
    </Content>
)

export default AddContact