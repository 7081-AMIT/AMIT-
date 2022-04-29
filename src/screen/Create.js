
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const {height, width} = Dimensions.get('window');

const Create = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.main}>
          <View style={{height: height * 0.03}}></View>
          <View
            style={{
              //  backgroundColor: 'red',
              height: height * 0.05,
              width: width / 1.15,
              alignSelf: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: width * 0.01}}></View>
            <TouchableOpacity>
            <Text style={{fontSize: 30}}>←</Text>
            </TouchableOpacity>
              <View style={{width: width * 0.76}}></View>
            <TouchableOpacity>
            <Text style={{fontSize: 30}}>X</Text>
            </TouchableOpacity>
            </View>
            <View style={{height: height * 0.06}}></View>
            <View
              style={{
                //backgroundColor: 'blue',
                height: height * 0.12,
                width: width / 1.1,
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: 25, color: 'white'}}>
                Create Your Account
              </Text>

              <View style={{height: height * 0.01}}></View>
              <Text style={{fontSize: 18}}>
                Company is the world's larget crypto exchange platform
              </Text>
            </View>
          </View>
          <View style={{height: height * 0.17}}></View>
          <View
            style={{
              //backgroundColor: 'red',
              height: height * 0.05,
              width: width / 1.1,
              alignSelf: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./Image/men.png')}
                style={{height: height * 0.025, width: width * 0.04}}></Image>

              <View style={{width: width * 0.03}}></View>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                Create Your Account
              </Text>
            </View>
            <View style={{width: width / 1.35, alignSelf: 'center'}}>
              <TextInput
                placeholder="Enter your details"
                placeholderTextColor={'black'}></TextInput>
            </View>
          </View>

          <View style={{height: height * 0.02}}></View>
          <View
            style={{
              //backgroundColor: 'red',
              height: height * 0.05,
              width: width / 1.1,
              alignSelf: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./Image/iden.png')}
                style={{height: height * 0.025, width: width * 0.04}}></Image>

              <View style={{width: width * 0.03}}></View>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                Verify Identity
              </Text>
            </View>
            <View style={{width: width / 1.35, alignSelf: 'center'}}>
              <TextInput
                placeholder="Verify Identity to protect your account"
                placeholderTextColor={'black'}></TextInput>
            </View>
          </View>

          <View style={{height: height * 0.02}}></View>
          <View
            style={{
              // backgroundColor: 'red',
              height: height * 0.05,
              width: width / 1.1,
              alignSelf: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./Image/unlo.png')}
                style={{height: height * 0.025, width: width * 0.04}}></Image>

              <View style={{width: width * 0.03}}></View>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                Unlock Price
              </Text>
            </View>
            <View style={{width: width / 1.35, alignSelf: 'center'}}>
              <TextInput
                placeholder="Get your price and start trading"
                placeholderTextColor={'black'}></TextInput>
            </View>
          </View>

          <View style={{height: height * 0.05}}></View>

          <View
            style={{
              // backgroundColor: 'red',
              height: height * 0.05,
              width: width / 1.1,
              alignSelf: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 15}}>
                By creating an account you agre to our{' '}
              </Text>
              <Text style={{fontSize: 15, color: 'cyan'}}> Terms and  </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 15, color: 'cyan'}}>condition</Text>
              <Text> and </Text>
              <Text style={{fontSize: 15, color: 'cyan'}}>
                Data Protection Guidlines.
              </Text>
            </View>
          </View>
          <View style={{height: height * 0.01}}></View>
          <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
          <View
            style={{
              backgroundColor: 'skyblue',
              height: height * 0.075,
              width: width / 1.15,
              alignSelf: 'center',
              borderRadius: 10,
              justifyContent:'center',
            }}>

           <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}>
              Create Personal Account
            </Text>

          </View>
          </TouchableOpacity>
          <View style={{height: height * 0.03}}></View>
          <View style={{width: width / 1.2, alignSelf: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text> ━━━━━━━━ </Text>
              <Text> or,for bussiness</Text>
              <Text> ━━━━━━━ </Text>
            </View>
          </View>
          <View style={{height: height * 0.03}}></View>
          <TouchableOpacity>

          <View
            style={{
              backgroundColor: '#0A5674',
              height: height * 0.07,
              width: width / 1.15,
              alignSelf: 'center',
              borderRadius: 10,
              justifyContent:'center'
            }}>

            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}>
              Create Entity Account
            </Text>
          </View>
          </TouchableOpacity>

          <View style={{height: height * 0.03}}></View>
        <View style={{width:width/1.2,alignSelf:'center'}}>
            <View style={{flexDirection:'row',alignSelf:'center'}}>

                <Text>Already registerd?</Text>
              <TouchableOpacity  onPress={() => navigation.navigate('Wallet')}>
              <Text>Log in</Text>
              </TouchableOpacity>
            </View>
        </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({
  main: {
    backgroundColor:'rgb(44,72,89)',
    height: height * 1,
  },
});


