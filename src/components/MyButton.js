import React, {Component} from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';
import ProTypes from 'prop-types';
export default class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[styles.button, {backgroundColor:this.props.bgColor}]}>
                <Text style={{color:this.props.textColor}}>
                    {this.props.text}
                    
                </Text>

            </TouchableOpacity>
        );
    }
}
MyButton.propTypes={
    text: ProTypes.string.isRequired,
    bgColor:ProTypes.string,
    textColor:ProTypes.string

};
const styles = StyleSheet.create({
    button: {
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:3,
        alignItems:'center'
    }
});
