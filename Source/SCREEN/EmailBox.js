import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, TextInput} from 'react-native-paper';
const {height, width} = Dimensions.get('window');

const EmailBox = ({navigation}) => {
  return (
    <View>
      <View style={{height: height * 0.05}}></View>
      <View style={styles.mainv}>
        <View>
          <Avatar.Icon size={84} icon="email" style={{alignSelf: 'center'}} />
        </View>
        <View style={{height: height * 0.05}}></View>
        <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>
          Cheak your mail
        </Text>
        <View style={{height: height * 0.05}}></View>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
            We have sen a paasword ecover Instructions to your email
          </Text>
        </View>
        <View style={{height: height * 0.05}}></View>
        <View style={{height: height * 0.06,
                backgroundColor: '#8D2EE3',
                width: width / 1.8,
                alignSelf: 'center',
                justifyContent:'center',
                borderRadius:10,
                borderWidth:2,
                borderColor:'grey'

                }}>
          <TouchableOpacity onPress={() => navigation.navigate('New')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                color:'white'
                
              
              }}>
              Open email app
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{height: height * 0.05}}></View>
        <Text style={{fontSize: 30, textAlign: 'center'}}>
          Skip, I'll confirm later
        </Text>
      </View>
    </View>
  );
};

export default EmailBox;

const styles = StyleSheet.create({
  mainv: {
    height: height * 1,
    width: width / 1.1,
    alignSelf: 'center',
  },
});
