import React,{Component} from 'react'
import AddContact from '../components/AddContact'
import { AsyncStorage, View } from 'react-native'
import {makeContact} from '../actions/home'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Input } from 'native-base';




class AddContactContainer extends Component{

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
        const session = await AsyncStorage.getItem('session')
        const data = await JSON.parse(session)
        // await this.props.fetchContact(data.id, data.data.accessToken)
        await console.log('isistate',this.state)
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

    async handleSaveAddress(){
        await this.setState({loading:true})
        await console.log('wowowowo',this.state)
        const {nama,alamat,gender,status} = this.state
        const session = await AsyncStorage.getItem('session')
        const data = await JSON.parse(session)
        await this.props.makeContact(data.id, data.data.accessToken, {nama,alamat,gender,status})
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
            <AddContact 
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

                handleSaveAddress={() => this.handleSaveAddress()}
                />
        )
    }
}

AddContactContainer.propTypes = {
    nameV: PropTypes.string,
    addressV: PropTypes.string,
    onChangeName: PropTypes.func,
    onChangeAddress: PropTypes.func,
    handleSaveAddress: PropTypes.func
  }

const mapStateToProps = state => ({
    loading: state.loading,
    success: state.success,
    failed: state.failed
  })
  
  const mapDispatchToProps = dispatch => ({
      makeContact: (id, accessToken, items ) => dispatch(makeContact(id,accessToken, items ))
    })
export default connect(mapStateToProps, mapDispatchToProps)(AddContactContainer)