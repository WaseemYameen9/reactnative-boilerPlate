
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const SocialMediaButton = (props: any) => {
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor: props.backcolor}]}>
      <Icon name={props.name} size={30} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '13%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '3%',
    borderRadius: 5,
  },
});

export default SocialMediaButton;
