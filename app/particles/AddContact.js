import React from 'react';
import { Content, Form, Item, Input, Button, Text, View, Right, Radio } from 'native-base'
import { Modal,  } from 'react-native'
import NavbarModal from './NavbarModal'

const AddContact = (props) => (
    <Modal 
        visible={props.modalVisible}>
    <NavbarModal
        navbarTitle={'Add Contact'}
        navbarIcon="close"
        actionIcon={props.actionIcon} 
    />
        <Content>
            <Form style={{margin:5}}>
                <Item regular style={{margin:5}}>
                    <Input placeholder='Name' onChange={props.onChangeName}/>
                </Item>
                <Item regular style={{margin:5}} >
                    <Input placeholder='Address' onChange={props.onChangeAddress} />
                </Item>
                <View>
                    <View style={{flexDirection:'row'}}>
                        <Text>Gender : </Text>
                        <Radio 
                            color={"#F85959"}
                            selectedColor={"#F85959"} 
                            selected={props.gender == 'male' ? true : false}
                            onPress={props.male}/>
                        <Text>Man</Text>
                        <Radio 
                            color={"#F85959"}
                            selectedColor={"#F85959"} 
                            selected={props.gender == 'female' ? true : false}
                            onPress={props.female}/>
                        <Text>Woman</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text>Status :</Text>
                        <Radio 
                            color={"#F85959"}
                            selectedColor={"#F85959"} 
                            selected={props.status == 1 ? true : false}
                            onPress={props.active}/>
                        <Text>Active</Text>
                        <Radio 
                            color={"#F85959"}
                            selectedColor={"#F85959"} 
                            selected={props.status == 0 ? true : false}
                            onPress={props.deactive}/>
                        <Text>Deactive</Text>
                    </View>
                </View>
                
            </Form>
            <Button onPress={props.handleSaveAddress}><Text>Add</Text></Button>
        </Content>
    </Modal>
)

export default AddContact
