import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
const {width, height} = Dimensions.get('window');

const New = ({navigation}) => {
    const [passwordVisible, setPasswordVisible] = useState('false');
    const [cpasswordVisible, setcPasswordVisible] = useState('false');
    return (
        <SafeAreaView>
        <ScrollView>
          <View>
            <View style={{height: height * 1}}>
            <View style={{height: height * 0.05}}></View>
             
              <View style={styles.main}>
              <TouchableOpacity>
                <Text style={styles.txt}>←  Back</Text>
  
          
              </TouchableOpacity>
              </View>
  
              <View style={{height: height * 0.02}}></View>
              <View style={styles.main}>
                <Text style={styles.txt}>Create New Password</Text>
              </View>
              <View style={{height: height * 0.02}}></View>
              <View style={styles.main}>
                <Text style={styles.txt1}>
                  Your new password must be diffrent from previous used passwords.{' '}
                </Text>
              </View>
              <View style={{height: height * 0.04}}></View>
              <View style={styles.main}>
                <Text style={styles.txt1}>Password</Text>
                
                <View style={styles.input}>
                <TextInput
                placeholder="Password"
                placeholderTextColor={'black'}
                keyboardType="default"
                right={
                  <TextInput.Icon
                    name={passwordVisible ? 'eye' : 'eye-off'}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  />
                }
                maxLength={12}
                secureTextEntry={passwordVisible}
                onChangeText={text => {}}
                style={{
                  alignSelf: 'center',
                  height:height*0.05,
                
                  backgroundColor: 'white',
                  width: width * 0.78,
                }}
              />
                  
                </View>
                <Text style={{fontSize:20,}}>Must be at least 8 characters</Text>

              </View>
              <View style={{height: height * 0.02}}></View>
              <View style={styles.main}>
                <Text style={styles.txt1}>Confirm Password</Text>
                
                <View style={styles.input}>
                <TextInput style={{}}
                placeholder="Confirm Password"
                placeholderTextColor={'black'}
                keyboardType="default"
                underlineColorIos="white"
                right={
                  <TextInput.Icon
                    name={cpasswordVisible ? 'eye' : 'eye-off'}
                    onPress={() => setcPasswordVisible(!cpasswordVisible)}
                  />
                }
                maxLength={12}
                secureTextEntry={cpasswordVisible}
                onChangeText={text => {}}
                style={{
                  alignSelf: 'center',
                  height:height*0.05,
                
                  backgroundColor: 'white',
                  width: width * 0.78,
                }}
              />
                </View>
                <Text style={{fontSize:20,}}>Both passwords must match.</Text>

                
              </View>
              <View style={{height: height * 0.02}}></View>
              <View
                style={{
                  backgroundColor: '#872DDA',
                  height: height * 0.07,
                  width: width / 1.1,
                  alignSelf: 'center',
                  borderRadius: 10,
                  borderColor: 'grey',
                  borderWidth: 2,
                  justifyContent:'center'
                }}>
                <TouchableOpacity onPress={() => navigation.navigate('EmailBox')}>
                  <Text style={styles.txt2}>Reset Password</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
}

export default New

const styles = StyleSheet.create({
    main: {
        //  backgroundColor: 'red',
          width: width / 1.1,
          alignSelf: 'center',
      
        },
        txt: {
          fontSize: 25,
           fontWeight: 'bold',
          justifyContent: 'flex-start',
        },
        txt1: {
          fontSize: 20,
      
          justifyContent: 'flex-start',
        },
        txt2: {
          fontSize: 25,
          textAlign:'center',
          justifyContent:'center',
          color:'white'
        },
        input: {
          backgroundColor: 'white',
          height: height * 0.07,
          justifyContent: 'center',
          width: width * 0.9,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'grey',
          alignSelf: 'center',
        },
})

