import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native';

let buttons

export default class DefaultSlide extends React.PureComponent {

  render() {
    const style = {
      backgroundColor: this.props.backgroundColor,
      paddingTop: this.props.topSpacer,
      paddingBottom: this.props.bottomSpacer,
      width: this.props.width,
      height: this.props.height,
    }
    if(this.props.buttonText == ''){
      buttons = null
    }else{
      buttons = (
        <TouchableOpacity style={styles.button} onPress={this.props.buttonMethod}><Text style={styles.buttonText}>{this.props.buttonText}</Text></TouchableOpacity>
      )
    }
    return (
      <View style={[styles.mainContent, style]}>
        <Image source={this.props.image} style={this.props.imageStyle} />
        <Text style={[styles.text, this.props.textStyle]}>{this.props.text}</Text>
        {buttons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: '#999',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '300',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    color: '#888',
    fontWeight: '300',
    paddingHorizontal: 16,
  },
  buttonText: {
    padding: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#1b87ff',
    borderRadius: 4,
    margin: 10
  }
});

