import React from 'react'
import { View, Content, Row, Icon } from 'native-base'
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { responsiveSize as Sizes, convertWidthPercentToDP ,convertHeightPercentToDP } from './Converter'

const Contact = props => (
  <Content>{console.log(props.all)}
    <View style={styles.wrapper}>
        <View style={styles.Content}>
          <View style={{flexDirection:'row'}}>
            <Text left style={styles.title}>{props.name}</Text>
            <Text right style={{position:"absolute", right:5, fontSize:Sizes(2),fontWeight:"bold"}}>{props.gender}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text left style={{justifyContent:'flex-start', fontSize:Sizes(2)}}>{props.address}</Text>
            <Text right style={{position:"absolute", right:5, fontSize:Sizes(2)}}>{props.status == false ? 'Deactive' : 'Active'}</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:5}}>
            <Text style={{fontSize:Sizes(2.5), marginRight:5}} onPress={props.deleteContact}><Icon name="trash"/>Delete</Text>
            <Text style={{fontSize:Sizes(2.5), marginRight:5}} onPress={props.editContact}><Icon name="create"/>Edit</Text>
          </View>
        </View>
    </View>
  </Content>
)

const styles = StyleSheet.create({
  wrapper:{
    margin:10,
    flex:1,
    borderWidth:1,
  },
  title:{
    marginVertical:convertHeightPercentToDP(0.5),
    marginHorizontal:convertWidthPercentToDP(3),
    fontSize:Sizes(3),
    fontWeight:"bold"
  },
  image:{
    width: convertWidthPercentToDP(94),
    height:convertHeightPercentToDP(23),
    borderRadius:10
  },
  Content:{
    margin:10
  }
})

export default Contact