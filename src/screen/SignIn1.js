import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,

  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput } from 'react-native-paper';

const {width, height} = Dimensions.get('window');



const SignIn1 = ({navigation}) => {

  const [passwordVisible, setPasswordVisible] = useState('true')
  const [cpasswordVisible, setCPasswordVisible] = useState('true')
  const [fname, setFname] = useState('');
  const [errorFname, setErrorFname] = useState(null);

  const [lname, setLname] = useState('');
  const [errorLname, setErrorLname] = useState(null);

  const [uname, setUname] = useState('');
  const [errorUname, setErrorUname] = useState(null);


  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);

  const [password, setPassword] = useState('');
  const [Errorpassword, setErrorpassword] = useState(null);

  const fnameValidate = fname => {
    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    

    if (fname === '' || fname === undefined || fname === null) {
      setErrorFname('please enter Fname');
    }
    if (!Regex.test(fname)) {
      setErrorFname('Enter Valid Fname');
    } else {
      setErrorFname(null);
    }
  };

  const lnameValidate = lname => {
    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (lname === '' || lname === undefined || lname === null) {
      setErrorLname('please enter Lname');
    }
    if (!Regex.test(lname)) {
      setErrorLname('Enter Valid Lname');
    } else {
      setErrorLname(null);
    }
  };

  const unameValidate = uname => {
    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (uname === '' || uname === undefined || uname === null) {
      setErrorUname('please enter Uname');
    }
    if (!Regex.test(lname)) {
      setErrorUname('Enter Valid Uname');
    } else {
      setErrorUname(null);
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
        <View style={styles.maincntainer}>
          <View style={{height: height * 0.05}}></View>

          <View style={styles.txt}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <View style={styles.txt1}>
                <View style={{height: height * 0.005}}></View>
                <Text style={{textAlign: 'auto', fontSize: 25}}>←</Text>
              </View>
              <View style={{width: width * 0.03}}></View>
              <View style={styles.txt1}>
                <View style={{height: height * 0.005}}></View>
                <Text style={{textAlign: 'center', fontSize: 25}}>SignIn</Text>
              </View>
              <View style={{width: width * 0.03}}></View>
              <View style={styles.txt1}>
                <View style={{height: height * 0.013}}></View>
                <Image
                  style={{height: 20, width: 20, alignSelf: 'flex-end'}}
                  source={require('./Image/dot.png')}
                />
              </View>
            </View>
          </View>
          <View style={{height: height * 0.05}}></View>

          <View style={styles.container1}>
            <View style={{height: height * 0.02}}></View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: width * 0.05}}></View>
              <View>
                <Text>First Name</Text>
              </View>
              <View style={{width: width * 0.3}}></View>
              <View style={{}}>
                <Text>Last Name</Text>
              </View>
            </View>
            <View style={{height: height * 0.02}}></View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <View>
                <TextInput
                  placeholder="First Name"
                  placeholderTextColor={'black'}
                  onChangeText={text => {
                    setFname(text), fnameValidate(text);
                  }}
                  style={styles.input}></TextInput>

                {errorFname !== null ? (
                  <View>
                    <Text
                      style={{
                        color: 'blue',
                        fontSize: 18,
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      {errorFname}
                    </Text>
                  </View>
                ) : null}
              </View>

              <View style={{width: width * 0.02}}></View>

              <View>
                <TextInput
                  placeholder="Last Name"
                  placeholderTextColor={'black'}
                  onChangeText={text => {
                    setLname(text), lnameValidate(text);
                  }}
                  style={styles.input}></TextInput>

                {errorLname !== null ? (
                  <View>
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 18,
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      {errorLname}
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>
            <View style={{height: height * 0.02}}></View>
            <View style={{width: width / 1.1, alignSelf: 'center'}}>
              <View style={{width: width / 1.15, alignSelf: 'center'}}>
                <Text>Email</Text>
                <View style={{height: height * 0.01}}></View>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={'black'}
                  keyboardType="email-address"
                  iconNmae="account"
                  onChangeText={text => {
                    setEmail(text), emailValidate(text);
                  }}
                  style={styles.input1}></TextInput>
              </View>

              {errorEmail !== null ? (
                <View>
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
            </View>
            <View style={{height: height * 0.02}}></View>
            <View style={{width: width / 1.1, alignSelf: 'center'}}>
              <View style={{width: width / 1.15, alignSelf: 'center'}}>
                <Text>UserName</Text>
                <View style={{height: height * 0.01}}></View>
                <TextInput
                  placeholder="UserName"
                  placeholderTextColor={'black'}
                  onChangeText={text => {
                    setUname(text), unameValidate(text);
                  }}
                  style={styles.input1}></TextInput>

{errorUname !== null ? (
                  <View>
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 18,
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      {errorUname}
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>
            <View style={{height: height * 0.02}}></View>
            <View style={{width: width / 1.1, alignSelf: 'center'}}>
              <View style={{width: width / 1.15, alignSelf: 'center'}}>
                <Text>Password</Text>
                <View style={{height: height * 0.01}}></View>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={'black'}
                  secureTextEntry={true}
                  maxLength={25}
                  keyboardType="email-address"
                  right={
                    <TextInput.Icon
                    name={passwordVisible ? 'eye' : 'eye-off' }
                    
                    onPress={()=> setPasswordVisible(!passwordVisible)}/>
                    
                  }
                  maxLength={12}
                  secureTextEntry={passwordVisible}
                  onChangeText={text => {
                    setPassword(text), passwordValidate(text);
                  }}
                  style={styles.input1}></TextInput>
              </View>
              {Errorpassword !== null ? (
                <View>
                  <Text
                    style={{
                      color: 'blue',
                      fontSize: 18,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    {Errorpassword}
                  </Text>
                </View>
              ) : null}
            </View>
            <View style={{height: height * 0.02}}></View>
            <View style={{width: width / 1.1, alignSelf: 'center'}}>
              <View style={{width: width / 1.15, alignSelf: 'center'}}>
                <Text>Confirm Password</Text>
                <View style={{height: height * 0.01}}></View>
                <TextInput
                  placeholder="Confirm PAssword"
                  placeholderTextColor={'black'}
                  right={
                    <TextInput.Icon
                    name={cpasswordVisible ? 'eye' : 'eye-off' }
                    
                    onPress={()=> setCPasswordVisible(!cpasswordVisible)}/>
                    
                  }
                  maxLength={12}
                  secureTextEntry={cpasswordVisible}
                  onChangeText={text => {
                    setPassword(text), passwordValidate(text);
                  }}
                  style={styles.input1}></TextInput>
              </View>
              {Errorpassword !== null ? (
                <View>
                  <Text
                    style={{
                      color: 'blue',
                      fontSize: 18,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    {Errorpassword}
                  </Text>
                </View>
              ) : null}
            </View>
            <View style={{height: height * 0.02}}></View>
            <TouchableOpacity onPress={() => navigation.navigate('Watsup')}>
              <View style={styles.input}>
                <Text
                  style={{
                    alignSelf: 'center',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 30,
                  }}>
                  SignIn
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn1;

const styles = StyleSheet.create({
  maincntainer: {
    backgroundColor: '#82948B',
    height: height * 1.4,
    justifyContent: '',
  },
  container1: {
    backgroundColor: '#C7ECDA',
    height: height * 0.7,
    borderRadius: 20,
    width: width / 1.1,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'green',
  },
  input: {
    borderRadius: 10,
    backgroundColor: '#A6C7B7',

    width: width * 0.423,
    height: height * 0.05,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'green',
  },
  input1: {
    borderRadius: 10,
    backgroundColor: '#A6C7B7',
    justifyContent: 'space-between',
    width: width / 1.15,
    height: height * 0.05,
    alignSelf: 'center',

    borderWidth: 2,
    borderColor: 'green',
  },
  txt: {
    //backgroundColor:'red',
    width: width / 1.02,
    height: 40,
    alignSelf: 'center',
  },
  txt1: {
    // backgroundColor:'green',
    width: width / 3.8,
    height: 40,
    alignSelf: 'center',
  },
});
