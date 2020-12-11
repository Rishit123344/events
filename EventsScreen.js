import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';
import firebase from 'firebase';
import { RFValue } from "react-native-responsive-fontsize";
import db from '../config.js';

export default class EventsScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      userId          : firebase.auth().currentUser.email,
      userName          :'',
      Date      : this.props.navigation.getParam('details')["Date"],
      OtherInformation       : this.props.navigation.getParam('details')["OtherInformation"],
      eventname        : this.props.navigation.getParam('details')["eventname"],
      Place  : this.props.navigation.getParam('details')["Place"],
    }
  }

  getUserDetails=(userId)=>{
      db.collection("users").where('email_id','==', userId).get()
      .then((snapshot)=>{
        snapshot.forEach((doc) => {
          console.log(doc.data().first_name);
          this.setState({
            userName  :doc.data().first_name + " " + doc.data().last_name
          })
        })
      })
    }






  addNotification=()=>{
    console.log("in the function ",this.state.rec)
    var message = this.state.userName + "These are you'r upcoming events "
    db.collection("all_notifications").add({
      "targeted_user_id"    : this.state.receiverId,
      "eventId"          : this.state.eventId,
      "event_name"           : this.state.eventName,
      "date"                : firebase.firestore.FieldValue.serverTimestamp(),
      "notification_status" : "unread",
      "message"             : message
    })
  }



componentDidMount(){
  this.getUserDetails(this.state.userId)
}


  render(){
    return(
      <View style={styles.container}>
        <View style={{flex:0.1}}>
          <Header
            leftComponent ={<Icon name='arrow-left' type='feather' color='#ffff'  onPress={() => this.props.navigation.goBack()}/>}
            centerComponent={{ text:"Event name", style: { color:'#ffff', fontSize:20,fontWeight:"bold", } }}
            backgroundColor = "#32867d"
          />
        </View>
        <View style={{flex:0.3,marginTop:RFValue(20)}}>
          <Card
              title={"Event Information"}
              titleStyle= {{fontSize : 20}}
            >
            
              <Text style={{fontWeight:'bold'}}>EventName : {this.state.eventname}</Text>
            
              <Text style={{fontWeight:'bold'}}>Place : {this.state.Place}</Text>
          
          </Card>
        </View>
        <View style={{flex:0.3}}>
         
            <Card>
              <Text style={{fontWeight:'bold'}}>Date: {this.state.Date}</Text>
            
              <Text style={{fontWeight:'bold'}}>Other Iformation: {this.state.OtherInformation}</Text>
            
            </Card>
        </View>
        <View style={styles.buttonContainer}>
         
              <TouchableOpacity
                  style={styles.button}
                  onPress={()=>{
                    this.props.navigation.navigate('MyEvents')
                  }}>
                <Text style={{color:'#ffff'}}>Ok</Text>
              </TouchableOpacity>
        </View>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  buttonContainer : {
    flex:0.3,
    justifyContent:'center',
    alignItems:'center',
    marginTop:RFValue(30)
  },
  button:{
    width:200,
    height:50,
    justifyContent:'center',
    alignItems : 'center',
    borderRadius: 10,
    backgroundColor: '#32867d',
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     },
    elevation : 16
  }
})
