import React from 'react';
import axios from 'axios';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

export default class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listWeather: [],
            selectedWeather: {}
        }
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:5000/weather'
        })
        .then((res) => {
            console.info('data length ', res.data.length);
            this.setState({ listWeather: res.data, selectedWeather: res.data[0] }, () => {
                setInterval(() => {
                    if (this.state.selectedWeather !== {}){ // Why if else here? => to ensure the selected object is defined
                        const index = this.state.listWeather.findIndex(result => result.location === this.state.selectedWeather.location) // Why findIndex? => to define the object order within the array (el => bebas bisa diganti)
                        // index === this.state.listWeather.length - 1 ? 0 : index + 1 { (if statement) ? true : false }
                        this.setState({ selectedWeather: this.state.listWeather[index === this.state.listWeather.length - 1 ? 0 : index + 1]}) // How to read ternary => refers to line 26
                    }
                }, 5000)
            })
        })
        .catch((err) => {
            //error
            console.error('Error nih')
        })
    }

    render(){
        const {selectedWeather} = this.state
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.location}>{selectedWeather.location}</Text>
                </View>
                <View>
                    <Text>{selectedWeather.short_note}</Text>
                </View>
                <View style={styles.miniContainer}>
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemContent}>Suhu:  {selectedWeather.suhu}</Text>
                        <Text style={styles.itemContent}>Kecepatan Angin:   {selectedWeather.angin}</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemContent}>Kelembaban:    {selectedWeather.kelembaban}</Text>
                        <Text style={styles.itemContent}>Presipitasi:   {selectedWeather.presipitasi}</Text>
                    </View>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'skyblue',
        borderColor: 'skyblue',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        margin: 10,
        width: ITEM_WIDTH
    },
    location:{
        color: 'navy',
        fontSize: 30, 
        fontWeight: 'bold', 
        // fontFamily: 'Poppins'
    },
    miniContainer:{
        display: 'flex',
        flexDirection: 'row'
    },
    itemContainer:{
        flex: 1,
        padding: 5
    },
    itemContent:{
        color: 'gray',
        fontSize: 12
    }
})