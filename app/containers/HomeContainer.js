import React,{Component} from 'react'
import { Container, Text } from 'native-base'
import { fetchContact, makeContact, deleteContact} from '../actions/home'
import { AsyncStorage, Alert } from 'react-native'
import { connect } from 'react-redux'
import Home from '../components/Home'
import Contact from '../particles/Contact'

class HomeContainer extends Component{


    constructor(){
        super()
        this.state= {
            id:''
        }
    }

    async componentDidMount(){
        const session = await AsyncStorage.getItem('session')
        const data = await JSON.parse(session)
        await this.props.fetchContact(data.id, data.data.accessToken)
        await console.log('isistate',this.props.contacts)
    }

    async deleteContact(){
        const session = await AsyncStorage.getItem('session')
        const data = await JSON.parse(session)
        await this.props.deleteContact(this.state.id, data.data.accessToken)
        await this.props.fetchContact(data.id, data.data.accessToken)
      }
    
      async refreshDelete(item){
        await this.setState({
          id: item.id,
        })
        const session = await AsyncStorage.getItem('session')
        const data = await JSON.parse(session)
        Alert.alert(
          'Delete',
          'Are you sure to Delete ?',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'yes', onPress: () => this.deleteContact()}
          ],
          { cancelable: false }
        )
      }
    
    render(){
        return(
                <Home 
                    loading={this.props.loading}
                    dataContact={this.props.contacts}
                    renderContact={({item}) => (
                        <Contact 
                            name={item.name}
                            address={item.address}
                            gender={item.gender}
                            status={item.status}
                            editContact={ () => this.props.navigation.navigate('EditContactContainer', {data:item})}
                            deleteContact={ () => this.refreshDelete(item)}
                        />
                    )}
                    addContact={()=>this.props.navigation.navigate('AddContactContainer')}
                    />
                    
        )
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    contacts: state.contacts
  })
  
  const mapDispatchToProps = dispatch => ({
      fetchContact: (id, accessToken) => dispatch(fetchContact(id, accessToken)),
      makeContact: (id, accessToken, items ) => dispatch(makeContact(id,accessToken, items )),
      deleteContact: (id, accessToken) => dispatch(deleteContact(id, accessToken))
    })
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)