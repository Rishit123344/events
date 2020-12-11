import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import MyHeader from '../components/MyHeader';
import CalendarPicker from 'react-native-calendar-picker';
import db from '../config'

export default class HomeScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
      }
     
      onDateChange(date) {
        this.setState({
          selectedStartDate: date,
        });
      }
      render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
          <View style={styles.container}>
          <MyHeader title="Home Screen" navigation ={this.props.navigation}/>
            <View style={{width:200,hieght:200,marginLeft:70,flex:0.5}}>
            <CalendarPicker 
              onDateChange={this.onDateChange}
            />
     </View>
            <View style={{flex:0.5}}>
              <Text>SELECTED DATE:{ startDate }</Text>
              <TouchableOpacity style={styles.button}onPress={()=>{
                this.props.navigation.navigate("EventInput",{startDate:startDate})
              }}>
             <Text>Next</Text>
          </TouchableOpacity>
            </View>
          
          </View>
        );
      }
     
         
      }
    
     
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 100,
      },
      button:{
        width:"75%",
        height:50,
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

    });
   
      
  