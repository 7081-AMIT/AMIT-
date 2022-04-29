import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView
} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
//import Icon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import {TextInput} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
//import {SafeAreaView} from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('window');

const Screen1 = ({navigation}) => {
  return (
     <SafeAreaView >
      <ScrollView>
        <View>
          <View style={styles.maincontainer}>
            <View style={styles.h1}></View>
            <Image
              source={require('../Assests/Image/img11.png')}
              style={styles.img}
            />
            <View style={styles.Vie1}>
              <View style={styles.h2}></View>
              <View style={styles.vie2}>
                <View style={styles.v1}>
                  <View style={styles.h3}></View>
                  <Text style={styles.t1}>Email</Text>
                </View>

                <View style={styles.v2}>
                  <View style={styles.v3}>
                   <TouchableOpacity>
                   <Ionicons
                      name="person-circle"
                      size={27}
                      color="rgb(94,29,10)"
                    />
                   </TouchableOpacity>
                  </View>
                  <View style={styles.v5}>
                    <TextInput
                      placeholder="de-umair@mobiloitte.com"
                      placeholderTextColor={'white'}
                      style={{color: 'white'}}></TextInput>
                  </View>
                  <View style={styles.v6}>
                 <TouchableOpacity>
                 <Avatar.Icon
                      size={30}
                      icon="check"
                      color="white"
                      backgroundColor="rgb(120,183,55)"
                    />
                 </TouchableOpacity>
                  </View>
                </View>
                {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>

            <Ionicons name="man" size={20} color="green" />
              <TextInput
                placeholder="de-umair@mobiloitte.com"
                placeholderTextColor={'white'}></TextInput>
                  <Avatar.Icon size={30} icon="check" color='white'  backgroundColor='lightgreen'/>
            </View> */}
              </View>
              {/* SecondContainer */}

              <View style={styles.h4}></View>
              <View style={styles.vie2}>
                <View style={styles.v7}>
                  <View style={styles.h5}></View>
                  <Text style={styles.t2}>Password</Text>
                </View>

                <View style={styles.v8}>
                  <View style={styles.v9}>
                   <TouchableOpacity>
                   <Avatar.Icon
                      size={41}
                      icon="lock"
                      color="grey"
                      backgroundColor="rgb(94,29,159)"
                    />
                   </TouchableOpacity>
                  </View>
                  <View style={styles.v10}>
                    <TextInput
                      placeholder="***********"
                      placeholderTextColor={'white'}
                      style={{fontSize: 30}}></TextInput>
                  </View>
                  <View style={styles.v6}>
                  <TouchableOpacity>
                  <Avatar.Icon
                      size={30}
                      icon="eye-off"
                      color="grey"
                      backgroundColor="rgb(94,29,159)"
                    />
                  </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* ThirdContainer */}

              
              <View style={styles.h6}></View>


              <View style={styles.vie3}>
                <Text style={styles.txt}>
                  Ensure you don't reuse passwords from other
                </Text>
                <Text style={styles.txt}>site. You password must:</Text>
                <View style={styles.fl}>
                  <View style={styles.v4}>
                  <TouchableOpacity>
                  <Avatar.Icon
                      size={30}
                      icon="check"
                      color="white"
                      backgroundColor="rgb(94,29,159)"
                    />
                  </TouchableOpacity>
                  </View>
                  <View style={styles.v15}>
                    <Text style={styles.txt}>Containe a number</Text>
                  </View>
                </View>
                <View style={styles.fl}>
                  <View style={styles.v4}>
                   <TouchableOpacity>
                   <Avatar.Icon
                      size={30}
                      icon="check"
                      color="lightgreen"
                      backgroundColor="rgb(94,29,159)"
                    />
                   </TouchableOpacity>
                  </View>
                  <View style={styles.v14}>
                    <Text style={styles.txt}>
                      Containe aboth uppercase and lowercase letters
                    </Text>
                  </View>
                </View>
                <View style={styles.fl}>
                  <View style={styles.v4}>
                    <TouchableOpacity>
                    <Avatar.Icon
                      size={30}
                      icon="check"
                      color="white"
                      backgroundColor="rgb(94,29,159)"
                    />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.v6}>
                    <Text style={styles.txt}>Be between 8-20 characters</Text>
                  </View>
                </View>
                <View style={styles.fl}>
                  <View style={styles.v4}>
                   <TouchableOpacity>
                   <Avatar.Icon
                      size={30}
                      icon="check"
                      color="white"
                      backgroundColor="rgb(94,29,159)"
                    />
                   </TouchableOpacity>
                  </View>
                  <View style={styles.v15}>
                    <Text style={styles.txt}>
                      Not contain any of these special character ('" % &)
                    </Text>
                  </View>
                </View>
                <View style={styles.fl}>
                  <View style={styles.v4}>
                   <TouchableOpacity>
                   <Avatar.Icon
                      size={30}
                      icon="check"
                      color="white"
                      backgroundColor="rgb(94,29,159)"
                    />
                   </TouchableOpacity>
                  </View>
                  <View style={styles.v13}>
                    <Text style={styles.txt}>
                      Not contain your complete email and/or user ID
                    </Text>
                  </View>
                </View>
                <View style={styles.h9}></View>
                <TouchableOpacity  onPress={() => navigation.navigate('Screen2')}>
                  <View style={styles.Vie4}>
                    <Text style={styles.txt1}>Continue</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.h8}></View>
                <View style={styles.v12}>
                  <Text style={styles.txt3}>OR</Text>
                </View>
                <View style={styles.h10}></View>
                <View style={styles.v11}>
                  <Image
                    source={require('../Assests/Image/logo.png')}
                    style={styles.imgg}
                  />
                </View>
                <View style={styles.h7}></View>
                <View style={styles.fl1}>
                  <Text style={styles.txt4}>Don't have an account ?</Text>
                  <TouchableOpacity>
                    <Text style={styles.txt5}> Signup</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'rgb(94,29,159)',
    height: height * 1,
  },
  img: {
    alignSelf: 'center',
    height:height*0.075
  },
  Vie1: {
    width: width / 1.1,
    // backgroundColor: 'black',
    height: height * 0.52,
    alignSelf: 'center',
  },
  vie2: {
    backgroundColor: 'rgb(94,29,159)',
    height: height * 0.085,
    width: width / 1.1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  vie3: {
    //backgroundColor: 'rgb(91,34,154)',
    height: height * 0.3,
    width: width / 1.1,
  },
  txt: {
    color: 'white',
  },
  Vie4: {
    backgroundColor: 'white',
    height: height * 0.07,
    width: width / 1.1,
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  txt1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(91,34,154)',
    textAlign: 'center',
  },
  txt3: {
    color: 'grey',
    fontSize: 18,
    textAlign: 'center',
  },
  txt4: {
    color: 'white',
    fontSize: 15,
  },
  txt5: {
    textDecorationLine: 'underline',
    fontSize: 16,
    color: 'white',
  },
  h1: {
    //height: height * 0.07,
    // backgroundColor: "red"
  },
  h2: {
    height: height * 0.055,
  },
  v1: {
    width: width / 1.4,
    alignSelf: 'center',
  },
  h3: {
    height: height * 0.007,
  },
  v2: {
    flexDirection: 'row',
    width: width / 1.152,
    // backgroundColor: 'black',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  t1: {
    justifyContent: 'center',
    color: 'grey',
  },
  v3: {
    // backgroundColor: 'white',
    height: height * 0.05,
    width: width * 0.06,
    justifyContent: 'center',
  },
  v4: {
    // backgroundColor: 'white',
    //height: height * 0.05,
    width: width * 0.07,
    justifyContent: 'center',
  },
  v5: {
    //backgroundColor: 'green',
    height: height * 0.05,
    justifyContent: 'center',
    width: width * 0.7,
  },
  v6: {
    // backgroundColor: 'green',
    height: height * 0.05,
    justifyContent: 'center',
  },
  h4: {
    height: height * 0.045,
  },
  v7: {
    width: width / 1.4,
    alignSelf: 'center',
  },
  h5: {
    height: height * 0.007,
  },
  t2: {
    justifyContent: 'center',
    color: 'grey',
  },
  v8: {
    flexDirection: 'row',
    width: width / 1.13,
    //backgroundColor: 'black',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  v9: {
    // backgroundColor: 'white',
    height: height * 0.03,
    width: width * 0.07,
    justifyContent: 'center',
  },
  v10: {
    //backgroundColor: 'green',
    height: height * 0.05,
    justifyContent: 'center',
    width: width * 0.69,
  },
  h6: {
    height: height * 0.025,
  },
  fl: {
    flexDirection: 'row',
  },
  fl1: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  h7: {
    height: height * 0.015,
  },
  v11: {
    alignSelf: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  imgg: {
    height: height * 0.07,
    width: width * 0.94,
    alignSelf: 'center',
  },
  v12: {
    alignSelf: 'center',
  },
  h8: {
    height: height * 0.02,
  },
  h9: {
    height: height * 0.04,
  },
  v13: {
    // backgroundColor: 'white',
    // height: height * 0.05,
    width: width * 0.8,
    justifyContent: 'center',
  },
  v14: {
    // backgroundColor: 'white',
    // height: height * 0.05,
    width: width * 0.8,
    justifyContent: 'center',
  },
  v15: {
    // backgroundColor: 'white',
    // height: height * 0.05,
    width: width * 1,
    justifyContent: 'center',
  },
  v16: {
    // backgroundColor: 'white',
    // height: height * 0.05,
    width: width * 0.8,
    justifyContent: 'center',
  },
  h10: {
    height: height * 0.015,
  },
});

