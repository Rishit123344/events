import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity, ImageBackground } from 'react-native';
import { ListItem } from 'react-native-elements'
import MyHeader from '../components/MyHeader';
import CalendarPicker from 'react-native-calendar-picker';
import db from '../config'
import {Modalize}from 'react-native-modalize'
import { TextInput } from 'react-native-gesture-handler';

export default class EventInputScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            startDate:this.props.navigation.getParam("startDate"),
              eventname:'',
              Date:'',
              Place:'',
              OtherInformation:'',
        }
    }
    submitForm=async()=>{
      db.collection("Events").add({
        'eventname' : this.state.eventname,
        'Place' : this.state.Place,
        'Date' : this.state.startDate,
        'OtherInformation' : this.state.OtherInformation,
      })
      this.setState({
        eventname:'',
Place:'',
Date:'',
OtherInformation:'',
      })
    }
    render(){
        return(
            
            <View style={{flex:1}}>
                <ImageBackground
                 source={require('../assets/event1.jpg')}
                 style={{ width: '100%', height: '100%' }}>
                 <View
                   style={{
                     flexDirection: 'row',
                     width: '100%',
                     paddingHorizontal: 20,
                   }}>
            
            <Text
          style={{
            color: '#FFF',
            fontSize: 35,
            width: 200,
            alignSelf: 'center',
            textAlign: 'center',
            color:'ff9a00',
            marginBottom:-300,
            marginLeft:50
          }}>
          Add You'r Own Events
        </Text>
</View>

                <Modalize handleStyle={{ marginTop: 30, backgroundColor: '#e9e9e9', width: 80, }} 
                modalStyle={{ borderTopLeftRadius: 60, borderTopRightRadius: 60, }} 
                alwaysOpen={500} 
                scrollViewProps={{ showsVerticalScrollIndicator: false }}> 
                <View style={{ marginTop: 40 }}>
        
               
         
        <TextInput onChangeText={(text)=>{this.setState({
            eventname:text
          })}}value={this.state.eventname} style={styles.formTextInput}placeholder='Name of the event'/>
          <TextInput onChangeText={(text)=>{this.setState({
            Place:text
          })}}value={this.state.Place} style={styles.formTextInput}placeholder='Place where the event is located'/>
           <TextInput onChangeText={(text)=>{this.setState({
            startDate:text
          })}}value={this.state.startDate} style={styles.formTextInput}placeholder='date'/>
            <TextInput onChangeText={(text)=>{this.setState({
            OtherInformation:text
          })}}value={this.state.OtherInformation} style={styles.formTextInput}placeholder='Other Information'/>
             <TouchableOpacity style={styles.goButton}onPress={async()=>{
        var userEvent = await this.submitForm()
      }}><Text style={styles.button}>Ok</Text>
      </TouchableOpacity>
                 </View> 
                </Modalize>
                </ImageBackground>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
        width:"75%",
        height:50,
        fontSize:20,
        
        justifyContent:'center',
        alignItems:'center',
         alignSelf: 'center',
        borderRadius:10,
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop:20
      },
      container: {
        flex: 1,
        backgroundColor: '#ffe9c5',
        alignItems: 'center',
        justifyContent: 'center',
      },
     
})
   