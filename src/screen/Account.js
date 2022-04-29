import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const Account = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);

  const [password, setPassword] = useState('');
  const [Errorpassword, setErrorpassword] = useState(null);

  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState(null);

  const [lname, setLname] = useState('');
  const [errorLname, setErrorLname] = useState(null);


  const lnameValidate = lname => {
    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (lname === '' || lname === undefined || lname === null) {
      setErrorEmail('please enter email');
    }
    if (!Regex.test(lname)) {
      setErrorLname('not correct format for email address');
    } else {
      setErrorLname(null);
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

  const phoneValidate = phone => {
    var Regex = /^0|08[0-9]{9,}$/;
    if (phone === '' || phone === undefined || phone === null) {
      setErrorPhone('please enter Phone');
    }
    if (!Regex.test(phone)) {
      setErrorPhone('not correct format for phone');
    } else {
      setErrorPhone(null);
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
      navigation.navigate('Signup');
    } else {
      alert('Something went wrong');
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{height: height * 1}}>
          <View style={{flexDirection:'row' ,}}>
            <View style={{height: 20}}></View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Discord')}>
                <Text style={{color: 'blue', fontSize: 25, fontWeight: 'bold'}}>
                  ←
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{width:width*0.215}}></View>
            <Text style={{alignSelf: 'center', fontSize: 20}}>
              {' '}
              Create your account
            </Text>
          </View>
          <View style={{height: 20}}></View>
          <View
            style={{
              //backgroundColor: 'green',
              height: 110,
              justifyContent: 'center',
            }}>
            <View>
              <View
                style={{
                  // backgroundColor: 'red',
                  height: 40,
                  width: width / 1.2,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Name</Text>
              </View>
              <View style={{height: 10}}></View>
              <View
                style={{
                  //backgroundColor: 'black',
                  height: 50,
                  width: width / 1.2,
                  alignSelf: 'center',
                  borderWidth: 2,
                  borderColor: 'black',
                }}>
                <View>
                  <View style={{height: 10}}></View>
                  <View
                    style={{
                      // backgroundColor: 'white',
                      height: 30,
                      width: width / 1.3,
                      alignSelf: 'center',
                    }}>
                    <TextInput
                      placeholder="Name"
                      placeholderTextColor={'#003f5c'}
                      style={styles.input}></TextInput>
                  </View>
                </View>
              </View>
            </View>

            {errorLname !== null ? (
            <View
              style={{
                height: '5%',
                width: '80%',
                //  backgroundColor: 'green',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{color: 'red', fontSize: 16}}>{errorLname}</Text>
            </View>
          ) : null}
          </View>
          
          <View>
            <View
              style={{
                // backgroundColor: 'red',
                height: 40,
                width: width / 1.2,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Email Address
              </Text>
            </View>
            <View style={{height: 10}}></View>
            <View
              style={{
                //backgroundColor: 'black',
                height: 50,
                width: width / 1.2,
                alignSelf: 'center',
                borderWidth: 2,
                borderColor: 'black',
              }}>
              <View>
                <View style={{height: 10}}></View>
                <View
                  style={{
                    // backgroundColor: 'white',
                    height: 30,
                    width: width / 1.3,
                    alignSelf: 'center',
                  }}>
                  <TextInput
                    placeholder="Enter your email."
                    placeholderTextColor="#003f5c"
                    keyboardType="email-address"
                    onChangeText={text => {
                      setEmail(text), emailValidate(text);
                    }}
                    placeholderTextColor={'#003f5c'}
                    style={styles.input}></TextInput>
                </View>
              </View>
            </View>
          </View>
          {errorEmail !== null ? (
            <View
              style={{
                height: '5%',
                width: '80%',
                //  backgroundColor: 'green',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{color: 'red', fontSize: 16}}>{errorEmail}</Text>
            </View>
          ) : null}

          <View>
            <View
              style={{
                // backgroundColor: 'red',
                height: 40,
                width: width / 1.2,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Phone Number
              </Text>
            </View>
            <View style={{height: 10}}></View>
            <View
              style={{
                //backgroundColor: 'black',
                height: 50,
                width: width / 1.2,
                alignSelf: 'center',
                borderWidth: 2,
                borderColor: 'black',
              }}>
              <View>
                <View style={{height: 10}}></View>
                <View
                  style={{
                    // backgroundColor: 'white',
                    height: 30,
                    width: width / 1.3,
                    alignSelf: 'center',
                  }}>
                  <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor={'#003f5c'}
                    style={styles.input}></TextInput>
                </View>
              </View>
            </View>
          </View>
          {errorPhone !== null ? (
            <View
              style={{
                height: '5%',
                width: '80%',
                //  backgroundColor: 'green',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{color: 'red', fontSize: 16}}>{errorPhone}</Text>
            </View>
          ) : null}

          <View>
            <View
              style={{
                // backgroundColor: 'red',
                height: 40,
                width: width / 1.2,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Password</Text>
            </View>
            <View style={{height: 10}}></View>
            <View
              style={{
                // backgroundColor: 'black',
                height: 50,
                width: width / 1.2,
                alignSelf: 'center',
                borderWidth: 2,
                borderColor: 'black',
              }}>
              <View>
                <View style={{height: 10}}></View>
                <View
                  style={{
                    //backgroundColor: 'white',
                    height: 30,
                    width: width / 1.3,
                    alignSelf: 'center',
                  }}>
                  <TextInput
                    placeholder="Enter your password."
                    placeholderTextColor="#003f5c"
                    keyboardType="email-address"
                    maxLength={12}
                    secureTextEntry={true}
                    onChangeText={text => {
                      setPassword(text), passwordValidate(text);
                    }}
                    style={styles.input}></TextInput>
                </View>
              </View>
            </View>
            <View style={{height: 10}}></View>
            {Errorpassword !== null ? (
              <View
                style={{
                  height: '5%',
                  width: '80%',
                  //backgroundColor: 'green',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text style={{color: 'red', fontSize: 16}}>
                  {Errorpassword}
                </Text>
              </View>
            ) : null}

            <View style={{height: 50}}></View>
            <View
              style={{
                //backgroundColor: 'red',
                height: 40,
                width: width / 1.2,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Date of Birth
              </Text>
            </View>
            <View
              style={{
                height: 60,
                //backgroundColor: 'red',
                width: width / 1.2,
                alignSelf: 'center',
              }}>
              <View style={{height: 10}}></View>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <View
                  style={{
                    height: 40,
                    backgroundColor: '#122C2F',
                    width: width / 4.5,
                  }}>
                  <View style={{height: 10}}></View>
                  <TextInput
                    placeholder="D D"
                    placeholderTextColor={'white'}
                    maxLength={2}
                    style={{textAlign: 'center',color:'red'}}></TextInput>
                </View>
                <View style={{width: 35}}></View>
                <View
                  style={{
                    height: 40,
                    backgroundColor: '#122C2F',
                    width: width / 4.5,
                  }}>
                  <View style={{height: 10}}></View>
                  <TextInput
                    placeholder="M M"
                    placeholderTextColor={'white'}
                    maxLength={2}
                    style={{textAlign: 'center',color:'red'}}></TextInput>
                </View>
                <View style={{width: 35}}></View>
                <View
                  style={{
                    height: 40,
                    backgroundColor: '#122C2F',
                    width: width / 4.5,
                  }}>
                  <View style={{height: 10}}></View>
                  <TextInput
                    placeholder="Y Y"
                    placeholderTextColor={'white'}
                    maxLength={4}
                    style={{textAlign: 'center',color:'red'}}></TextInput>
                </View>
              </View>
            </View>
          </View>
          <View style={{height: 10}}></View>
          <View>
            <View
              style={{flexDirection: 'row', alignSelf: 'center', right: 20}}>
              <TouchableOpacity>
                <Text>✅</Text>
              </TouchableOpacity>

              <Text> Accept Our </Text>

              <TouchableOpacity>
                <Text style={{color: 'blue'}}> Termes and Condition</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: 20}}></View>
          <View
            style={{
              backgroundColor: '#5899A0',
              height: 50,
              width: width / 1.2,
              alignSelf: 'center',
            }}>
            <View style={{height: 10}}></View>
            <View
              style={{
                // backgroundColor: 'white',
                height: 30,
                width: width / 1.4,
                alignSelf: 'center',
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={{textAlign: 'center', fontSize: 20}}>
                  Create From Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
  },
});
