import axios from 'axios';
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

export default class JokesData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listJokes:[],
            selected_jokes:{}
        }
    }
    
    componentDidMount(){
        this.getData();
    }

    getData(){
        axios.get('http://localhost:5000/jokes')
        .then(res=>{
            const jokes_data = res.data;
            this.setState({listJokes: jokes_data})
            this.interval = setInterval(()=>{
                const randomData = Math.floor(Math.random()*this.state.listJokes.length);
                this.setState({selected_jokes: this.state.listJokes[randomData]})
            }, 5000)
        }).catch(err =>{
            console.log("Error Get Jokes!!!")
        })
    }

    componentWillUnmount(){
        this.interval && clearInterval(this.interval)
    }
  
    render(){
        return(
            <View style={styles.jokesitem}>
              <Text>{this.state.selected_jokes.jokes}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    jokesitem:{
        height: 100,
        width: ITEM_WIDTH,
        borderRadius: 20,
        padding: 15,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d3d3d3'
    }
})