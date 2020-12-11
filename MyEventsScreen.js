import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity, ImageBackground } from 'react-native';
import { ListItem } from 'react-native-elements'
import MyHeader from '../components/MyHeader';
import CalendarPicker from 'react-native-calendar-picker';
import db from '../config'
import {Modalize}from 'react-native-modalize'
import { TextInput } from 'react-native-gesture-handler';

export default class MyEventsScreen extends Component{
  constructor(){
    super()
    this.state={
      EventsList:[],
    }
    this.requestref=null
}
getEventsList=()=>{
    this.requestref=db.collection("Events")
    .onSnapshot((snapshot)=>{
        var EventsList = snapshot.docs.map(document=>document.data())
        this.setState({
            EventsList:EventsList
        })
    })
}
componentDidMount(){
    this.getEventsList()
    console.log(this.state.EventsList)
}
componentWillUnmount(){
    this.requestref();
}
keyExtractor = (item,index)=>{index.toString()}
renderItem = ({item,i})=>{
    return(
        <ListItem key = {i}title={item.eventname}subtitle={item.Place}titleStyle={{color:'black',fontWeight:'bold'}}rightElement={<TouchableOpacity style={styles.button}onPress={()=>{this.props.navigation.navigate('Events',{'details':item})}}>
            <Text style={{color:'#FFFF'}}>View</Text>
        </TouchableOpacity>}bottomDivider></ListItem>
    )
}
    render(){
        return(
            <ImageBackground
                 source={require('../assets/event2.jpg')}
                 style={{ width: '100%', height: '100%' }}>
                 <View
                   style={{
                     flexDirection: 'row',
                     width: '100%',
                     paddingHorizontal: 20,
                   }}></View>
 <Modalize
                handleStyle={{
                  marginTop: 30,
                  backgroundColor: '#e9e9e9',
                  width: 80,
                }}
                modalStyle={{
                  borderTopLeftRadius: 60,
                  borderTopRightRadius: 60,
                }}
                alwaysOpen={500}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}>

                <View style={{ marginTop: 40 }}>
                    </View>
                    <View style={{flex:1,width:"60%"}}>
                {
                    this.state.EventsList.length===0?(<View style={styles.subcontainer}>
                        <Text style={{fontSize:20}}>List Of All Events</Text>
                    </View>):(<FlatList keyExtractor={this.keyExtractor}data={this.state.EventsList}renderItem={this.renderItem}></FlatList>)
                }
            </View>
                </Modalize>
           </ImageBackground>
           
        )
    }
}
const styles = StyleSheet.create({
  subcontainer:{
      flex:1,
      fontSize:20,
      justifyContent:'center',
      alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FF5722',
    shadowColor:'#000',
    shadowOffset:{width:0,height:8}
}
})