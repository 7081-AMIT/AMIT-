import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/EvilIcons';
//import Icon from 'react-native-vector-icons/Fontisto';

import {TextInput} from 'react-native-paper';
import {Avatar} from 'react-native-paper';

const {height, width} = Dimensions.get('window');

const Login1 = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState('false');

  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState(null);

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);

  const [password, setPassword] = useState('');
  const [Errorpassword, setErrorpassword] = useState(null);

  const nameValidate = name => {
    var Regex = /^[a-zA-Z ]{2,40}$/;
    if (name === '' || name === undefined || name === null) {
      setErrorName('please enter name');
    }
    if (!Regex.test(name)) {
      setErrorName('not correct format for name');
    } else {
      setErrorName(null);
    }
  };

  const emailValidate = email => {
    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '' || email === undefined || email === null) {
      setErrorEmail('please enter email');
    }
    if (!Regex.test(email)) {
      setErrorEmail('not correct format for email address');
    } else {
      setErrorEmail(null);
    }
  };
    const passwordValidate = password => {
    var Regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (password === '' || password === undefined || password === null) {
      setErrorpassword('Please enter password');
    }
    if (!Regex.test(password)) {
      setErrorpassword('please use at least 6 - 12 characters');
    } else {
      setErrorpassword(null);
    }
  };

  const validate = () => {
    const flag = true;
    if (email === '') {
      setErrorEmail('Please enter email');
    }
    if (password === '') {
      setErrorpassword('Please enter password');
    }
    return flag;
  };

  const onSubmit = () => {
    if (validate()) {
      navigation.navigate('SignIn');
    } else {
      alert('Something went wrong');
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.Main}>
            <View style={{height: height * 0.02}}></View>
            <Image
              source={require('../ASSETS/Image/logo.png')}
              style={styles.img}
            />
            <View style={{height: height * 0.02}}></View>
            <Text style={styles.txt}>BRUP</Text>
            <View style={{height: height * 0.02}}></View>
            <View style={styles.input}>
              {/* <Icon name="email" size={30} /> */}
              <Icon size={34} name="person-circle"  style={{color:'purple'}} />
                <TextInput
                placeholder="Name"
                placeholderTextColor={'black'}
                keyboardType="name-phone-pad"
                onChangeText={text => {
                  setName(text), nameValidate(text);
                }}
                style={{
                  alignSelf: 'center',
                  height: height * 0.05,
                  width: width * 0.78,
                 // backgroundColor: 'yellow',
                }}
              />
            </View>
            {errorName !== null ? (
              <View
                style={{
                  height: '5%',
                  width: '80%',
                  //backgroundColor: 'green',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <View style={{height: 20}}></View>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {errorName}
                </Text>
              </View>
            ) : null}
            <View style={{height: height * 0.02}}></View>
            <View style={styles.input}>
              {/* <Icon name="email" size={30} /> */}
              <Avatar.Icon size={44} icon="email" color='purple'  backgroundColor='white'/>
              <TextInput
                placeholder="Email"
                placeholderTextColor={'black'}
                keyboardType="email-address"
                onChangeText={text => {
                setEmail(text), emailValidate(text);
              }}

                style={{
                  alignSelf: 'center',
                  height: height * 0.05,
                  width: width * 0.78,
                 // backgroundColor: 'yellow',
                }}
              />
            </View>
            {errorEmail !== null ? (
              <View
                style={{
                  height: '5%',
                  width: '80%',
                  //backgroundColor: 'green',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <View style={{height: 20}}></View>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {errorEmail}
                </Text>
              </View>
            ) : null}
            <View style={{height: height * 0.02}}></View>
            <View style={styles.input}>
              {/* <Icon name="unlock" size={30} /> */}
              <Avatar.Icon size={44} icon="lock" color='purple'  backgroundColor='white' />

              <TextInput
                placeholder="Password"
                placeholderTextColor={'black'}
                keyboardType="default"
                right={
                  <TextInput.Icon
                    name={passwordVisible ? 'eye' : 'eye-off'}  color='purple'
                    onPress={() => setPasswordVisible(!passwordVisible)} style={{ backgroundColor:'white'}}
                  />
                }
                maxLength={12}
                secureTextEntry={passwordVisible}
                onChangeText={text => {
                  setPassword(text), passwordValidate(text);
                }}
                style={{
                  alignSelf: 'center',
                  height:height*0.05,
                
                  //backgroundColor: 'yellow',
                  width: width * 0.78,
                }}
              />
            </View>
            {Errorpassword !== null ? (
              <View
                style={{
                  height: '5%',
                  width: '80%',
                  //backgroundColor: 'yellow',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {Errorpassword}
                </Text>
              </View>
            ) : null}
            <View style={{height: height * 0.05}}></View>
            <View style={styles.input1}>
              <TouchableOpacity  onPress={() => navigation.navigate('Intro')}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'green',
                  fontSize: 25,
                 
                }}>
                SignIn
              </Text>
              </TouchableOpacity>
            </View>
            <View style={{height: height * 0.05}}></View>
            <View style={styles.input2}>
              <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'green',
                  fontSize: 25,
                 
                }}>
                Forget Password ?
              </Text>
              </TouchableOpacity>
            </View>
            <View style={{height: height * 0.02}}></View>
            <View style={styles.input2}>
              <TouchableOpacity>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'green',
                  fontSize: 25,
                 
                }}>
                Already have an Account
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login1;

const styles = StyleSheet.create({
  Main: {
    //backgroundColor: 'red',
    height: height * 1,
    width: width * 1,
  },
  txt: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    height: height * 0.09,
    width: width * 0.2,
    borderRadius: 100,
    alignSelf: 'center',
  },
  input: {
    borderRadius: 10,
    height: height * 0.07,
    width: width / 1.1,
    borderWidth: 2,
    borderColor: 'green',
    alignSelf: 'center',
    alignItems:'center',
    flexDirection: 'row',
   // backgroundColor: 'yellow',
    
  },
  input1: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
    height: height * 0.07,
    width: width / 1.1,
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center'
  },
  input2: {
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center'
  },
});
