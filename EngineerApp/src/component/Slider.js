import * as React from 'react';
import { Text, View, SafeAreaView, ImageBackground, Platform, Dimensions, StyleSheet } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import axios from 'axios'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);


export default class Slider extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          promotions: [],
      }
    }
      componentDidMount(){
        this.getData()
    }

    getData(){
      axios({
        method: 'GET',
          // url : 'http://10.0.2.2:5000/promotions'
          url : 'http://localhost:5000/promotions'
      })
      .then((res) => {
          this.setState({promotions: res.data})
      })
      .catch(err => {alert(err)})
    }

    renderData({item,index}){
        return (
            <View>
                <ImageBackground style={{width: 'auto', height: 180 }} source={{uri: item.preview_image}}>
                </ImageBackground>
                {/* <Text>{item.url}</Text> */}
            </View>
        )
    }

    render() {
        return (
            <View style={{width: 'auto', height: 200}}>
                <Carousel
                  data={this.state.promotions}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={ITEM_WIDTH}
                  renderItem={this.renderData}
                  onSnapToItem = { index => this.setState({activeIndex:index}) }
                   />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});

