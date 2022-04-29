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

const Reset = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);
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
          <View style={{height: height * 1}}>
            <View style={{height: height * 0.05}}></View>

            <View style={styles.main}>
              <TouchableOpacity>
                <Text style={styles.txt}>← Back</Text>
              </TouchableOpacity>
            </View>

            <View style={{height: height * 0.02}}></View>
            <View style={styles.main}>
              <Text style={styles.txt}>ResetPassword</Text>
            </View>
            <View style={{height: height * 0.02}}></View>
            <View style={styles.main}>
              <Text style={styles.txt1}>
                Enter the email associated with your account and we'll send an
                email with instruction to reset your password.{' '}
              </Text>
            </View>
            <View style={{height: height * 0.02}}></View>
            <View style={styles.main}>
              <Text style={styles.txt}>Email address</Text>
              <View style={styles.input}>
                <TextInput
                  placeholder=" email"
                  placeholderTextColor={'black'}
                  keyboardType={'email-address'}
                  onChangeText={text => {
                    setEmail(text), emailValidate(text);
                  }}
    
                  
                  style={{
                    width: width * 0.87,
                    alignSelf: 'center',
                    height: height * 0.05,
                    backgroundColor: 'white',
                  }}
                />
              </View>
             
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
            <View style={{height: height * 0.05}}></View>
            <View
              style={{
                backgroundColor: '#872DDA',
                height: height * 0.07,
                width: width / 1.1,
                alignSelf: 'center',
                borderRadius: 10,
                borderColor: 'grey',
                borderWidth: 2,
                justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('EmailBox')}>
                <Text style={styles.txt2}>Send Instructions</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reset;

const styles = StyleSheet.create({
  main: {
    //  backgroundColor: 'red',
    width: width / 1.1,
    alignSelf: 'center',
    justifyContent:'center'
  },
  txt: {
    fontSize: 22,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  txt1: {
    fontSize: 18,

    justifyContent: 'flex-start',
  },
  txt2: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    height: height * 0.08,
    justifyContent: 'center',
    width: width * 0.9,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey',
    alignSelf: 'center',
  },
});
