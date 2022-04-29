
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
const {height, width} = Dimensions.get('window');

const ResetP = ({navigation}) => {
  return (
      <SafeAreaView>
          <ScrollView>

          
    <View>
      <View style={styles.maincontainer}>
        <View style={{height: height / 8}}></View>
       
        <View
          style={{
            // backgroundColor: 'red',
            height:height*0.08,
            width: width / 1.2,
            alignSelf: 'center',
          }}>
             <View style={{flexDirection:'row',}}>
             <Image
              style={{
                borderRadius: 100,
                height:height*0.05,
                width:width*0.12,
                alignSelf: 'center',
              }}
              source={require('./Image/3.jpeg')}></Image>
              <View style={{width:width*0.150}}></View>
          <Text style={{textAlign: 'center', fontSize: 22, color: 'white'}}>
            Reset Password
          </Text>
          </View>
        </View>
        <View style={styles.txt1}></View>

        <View style={styles.maincontainer1}>
          <View style={{height:height*0.01}}></View>
          <View
            style={{
              height:height*0.055,
              // backgroundColor:'red',
              width: width / 1.3,
              alignSelf: 'center',
            }}>
            <View style={{height:height*0.02}}></View>
            <Image
              style={{
                borderRadius: 100,
                height:height*0.05,
                width:width *0.12,
                alignSelf: 'center',
              }}
              source={require('./Image/3.jpeg')}></Image>
          </View>
          <View style={{height:height*0.02}}></View>
          <View
            style={{
              height:height*0.05,
              //backgroundColor:'red',
              width: width / 1.3,
              alignSelf: 'center',
            }}>
            <View style={{height:height*0.05}}></View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Verification Code
            </Text>
            <View style={{height:height*0.015}}></View>
            <Text style={{fontSize: 15}}>
              We have sent you a verification code to your registered email id
            </Text>
          </View>
          <View style={{height:height*0.07}}></View>
          <View
            style={{
              height: 50,
              //backgroundColor:'red',
              width: width / 1.3,
              alignSelf: 'center',
            }}>
            <View style={{
              height:height*0.05
              }}></View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Enter Code</Text>
            <View style={{height:height*0.023}}></View>
            <View>
              <View style={{height:height*0.005}}></View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.code}>
                  <View style={{alignSelf:'center'}}> 
                  <View style={{height:height*0.023}}></View>
                  <TextInput
                    placeholder=" 2 "
                    placeholderTextColor={'black'}
                    style={styles.input}></TextInput>

                  </View>
                  
                
                </View>
                <View style={{width:width* 0.017}}></View>
                <View style={styles.code}>
                  <View style={{alignSelf:'center'}}> 
                  <View style={{height:height*0.023}}></View>
                  <TextInput
                    placeholder=" 5 "
                    placeholderTextColor={'black'}
                    style={styles.input}></TextInput>

                  </View>
                </View>
                <View style={{width:width* 0.017}}></View>
                <View style={styles.code}>
                  <View style={{alignSelf:'center'}}> 
                  <View style={{height:height*0.023}}></View>
                  <TextInput
                    placeholder=" 1 "
                    placeholderTextColor={'black'}
                    style={styles.input}></TextInput>

                  </View>
                </View>
                <View style={{width:width *0.017}}></View>
                <View style={styles.code}>
                  <View style={{alignSelf:'center'}}> 
                  <View style={{height:height*0.023}}></View>
                  <TextInput
                    placeholder=" 8 "
                    placeholderTextColor={'black'}
                    style={styles.input}></TextInput>

                  </View>
                </View>
                <View style={{width:width* 0.017}}></View>
                <View style={styles.code}>
                  <View style={{alignSelf:'center'}}> 
                  <View style={{height:height*0.023}}></View>
                  <TextInput
                    placeholder=" 7"
                    placeholderTextColor={'black'}
                    style={styles.input}></TextInput>

                  </View>
                </View>
                <View style={{width:width* 0.017}}></View>
                <View style={styles.code}>
                  <View style={{alignSelf:'center'}}> 
                  <View style={{height:height*0.023}}></View>
                  <TextInput
                    placeholder=" 4 "
                    placeholderTextColor={'black'}
                    style={styles.input}></TextInput>

                  </View>
                </View>
              </View>
              <View style={{height:height*0.04}}></View>
               
                  <View style={{alignSelf:'baseline'}}> 
                  <View style={{flexDirection:'row'}}>
              
                  <Text style={{color:'red'}}>Please enter valid Verification Code</Text>
                    <View style={{width:width*0.021}}></View>
                    <Text style={{color:'green',fontWeight:'bold',fontSize:20}}>◌</Text>
                    <View style={{width:width* 0.029}}></View>
                    <Text>0:59</Text>
                    </View>

                 
                </View>
                <View style={{height:height*0.03}}></View>

                <View
                  style={{
                    height:height*0.065,
                    backgroundColor:'blue',
                    width: width / 1.8,
                    alignSelf: 'center',
                    borderRadius:100,
                  }}>
                  <View style={{height:height*0.011}}></View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn1')}>
                    <Text style={{fontSize: 25, alignSelf: 'center',color:'white'}}>
                      Done
                    </Text>
                  </TouchableOpacity>
                </View>
            </View>
           
          </View>
          
        </View>
        
      </View>
    </View>
    </ScrollView>
      </SafeAreaView>
  );
};

export default ResetP;

const styles = StyleSheet.create({
  maincontainer: {
    height: height * 1,
    backgroundColor: 'darkblue',
  },

  maincontainer1: {
    height: height * 1.2,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  txt1: {
    height: height * 0.02,
  },
  code: {
    backgroundColor: 'white',
    height:height*0.07,
    width:width* 0.12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'red',
  },
  input:{
    alignSelf:'center',
    
  }
});
