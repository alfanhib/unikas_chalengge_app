import React,{Component} from 'react'
import { AsyncStorage, View } from 'react-native'
import { editContact, SingleContact} from '../actions/home'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import EditContact from '../components/EditContact';




class EditContactContainer extends Component{

    constructor() {
        super()
    
        this.state = {
          nama: '',
          alamat: '',
          gender:'man',
          status:false,
          loading:false,
        }
      }

    async componentDidMount(){
          const id = await this.props.navigation.state.params.data.id
          const session = await AsyncStorage.getItem('session')
          const user = await JSON.parse(session)
          console.log('sesin',user.data.accessToken)
          await this.props.SingleContact(id, user.data.accessToken)
          const data = this.props.singleContact[0]
          await this.setState({
              nama:data.name,
              alamat:data.address,
              gender:data.gender,
              status:data.status
          })
          console.log('single', this.props.singleContact)
    }
    componentDidUpdate(){
        console.log(this.state)
    }

    setFemale(){
        this.setState({
          gender: 'female'
        })
      }
    
    setMale(){
        this.setState({
            gender: 'man'
        })
    }

    setDeactive(){
        this.setState({
          status: 0
        })
      }
    
    setActive(){
        this.setState({
            status: 1
        })
    }

    async handleSaveContact(){
        await this.setState({loading:true})
        await console.log('wowowowo',this.state)
        const {nama,alamat,gender,status} = await this.state
        const data = this.props.singleContact[0]
        const session = await AsyncStorage.getItem('session')
        const user = await JSON.parse(session)
        await this.props.editContact(data.id, user.data.accessToken, {nama,alamat,gender,status})
        await this.props.navigation.navigate('HomeContainer')
        await this.setState({
            nama: '',
            alamat: '',
            gender:'man',
            status:false,
            loading:false,
        })
    }

    render(){
        return(
            <EditContact 
                backHome={() => this.props.navigation.navigate('HomeContainer')}

                nameV={this.state.nama}
                onChangeName={(nama) => this.setState({nama})}

                addressV={this.state.alamat}
                onChangeAddress={(alamat) => this.setState({alamat})}

                male={() => this.setMale()}
                female={() => this.setFemale()}

                gender={this.state.gender}

                active={() => this.setActive()}
                deactive={ () => this.setDeactive()}

                status={ this.state.status}

                loading={this.state.loading}

                handleSaveAddress={() => this.handleSaveContact()}
                />
        )
    }
}

EditContactContainer.propTypes = {
    nameV: PropTypes.string,
    addressV: PropTypes.string,
    onChangeName: PropTypes.func,
    onChangeAddress: PropTypes.func,
    handleSaveAddress: PropTypes.func
  }

const mapStateToProps = state => ({
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    singleContact: state.singleContact
  })
  
  const mapDispatchToProps = dispatch => ({
    editContact: (id, accessToken, items ) => dispatch(editContact(id,accessToken, items )),
    SingleContact: (id, accessToken) => dispatch(SingleContact(id, accessToken))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditContactContainer)