import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
const {height, width} = Dimensions.get('window');

const SignIn = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground style={{height:height*1,}} source={require('./Image/back.jpg')}> 
     
        
    <View>
      
    <View>
 
    <View style={{height:height/12}}></View>
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
      <Text
                  style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
                  ←
                </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.container1}>
      
      
        <Image style={styles.image} source = {require("./Image/a.png")}/>
      </View>
      <View style={{height:height/6}}></View>
    </View>
    <View style={{alignSelf:'center'}}>
      <Text>Email</Text>
      <View style={{height:15}}></View>
    </View>
    <View style={styles.inputView}>
      
  <TextInput
    style={styles.TextInput}
    placeholder="Enter your email."
    placeholderTextColor="#003f5c"
    onChangeText={(email) => setEmail(email)}
  />
</View>

<View style={{height:25}}></View>
<View style={{alignSelf:'center'}}>
      <Text>Email</Text>
      <View style={{height:15}}></View>
    </View>
<View style={styles.inputView1}>
  <TextInput
    style={styles.TextInput}
    placeholder="Enter your password."
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
  />
</View>
<View style={{height:25}}></View>
<TouchableOpacity>
  <Text style={styles.forgot_button}>Forgot Password</Text>
</TouchableOpacity>
<View style={{height:25}}></View>


<View style={{height:25}}></View>

      <TouchableOpacity onPress={() => navigation.navigate('Discord')}>
                <Text
                  style={{
                    fontSize: 20,
              
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: 'red',
                    height: 40,
                    width: 70,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
    </View>
    </ImageBackground>
    </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   },
 
   image :{
    borderRadius:100,
    height:150,
    width:150,
 
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 55,
    alignItems: "center",
    fontSize: 20,
      alignSelf: 'center',
  },
  inputView1: {
   backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 55,
    alignItems: "center",
    fontSize: 20,
      alignSelf: 'center',
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    Left: 20,
  },
  forgot_button: {
      fontSize: 20,
      borderColor: 'red',
      height: 40,
      textAlign: 'center',
      fontWeight: 'bold',
      alignSelf: 'center',
    },
});
