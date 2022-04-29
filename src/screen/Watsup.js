import {
    StyleSheet,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Image,
    Text,
    View,
    Button
  } from 'react-native';
  import React, {useState} from 'react';
  
  const {height, width} = Dimensions.get('window');
  
  const Watsup = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
  
    const [password, setPassword] = useState('');
    const [Errorpassword, setErrorpassword] = useState(null);
  
    const emailValidate = email => {
      var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email === '' || email === undefined || email === null) {
        setErrorEmail('please enter email');
      }
      if (!Regex.test(email)) {
        setErrorEmail('Please enter valid email');
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
        setErrorpassword('Please enter valid password');
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
  
       props.navigation.navigate("Signup")
      } else {
        alert('Something went wrong');
      }
    };
  
    return (
      <SafeAreaView>
        <View
        // style={{height: '100%', width: '100%', alignItems: 'center'}}
        >
          <View style={styles.img}>
            <Image
              style={{height: 150, width: 150, resizeMode: 'contain'}}
              source={require('./Image/3.jpeg')}
            />
          </View>
          <View style={styles.txt}>
            <Text style={{fontSize: 25, marginLeft: 17, fontWeight: 'bold'}}>
              Welcome to whatsapp
            </Text>
            <Text style={{fontSize: 18, marginLeft: 45, color: '#868783'}}>
              Keep your data safe!
            </Text>
          </View>
  
          <View style={styles.txtinput}>
            <TextInput
              style={styles.input}
              placeholder="Enter email or phone number"
              placeholderTextColor={'#868783'}
              keyboardType="email-address"
              onChangeText={text => {
                setEmail(text), emailValidate(text);
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
                alignSelf:'center'
              }}>
              <Text style={{color: 'red', fontSize: 16}}>{errorEmail}</Text>
            </View>
          ) : null}
  
          <View style={styles.textinput}>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor={'#868783'}
              keyboardType="email-address"
              secureTextEntry={true}
              onChangeText={text => {
                setPassword(text), passwordValidate(text);
              }}
            />
          </View>
  
          {Errorpassword !== null ? (
            <View
              style={{
                height: '5%',
                width: '80%',
               // backgroundColor: 'green',
                justifyContent: 'center',
                alignSelf:'center'
              }}>
              <Text style={{color: 'red', fontSize: 16}}>{Errorpassword}</Text>
            </View>
          ) : null}
  
          <TouchableOpacity onLongPress={() => onSubmit()}>
            <View style={styles.touchable}>
              <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                Login
              </Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() =>props.navigation.navigate("Signup")}
          >
            <Text style={{fontSize: 20, color: '#83d4d0', alignSelf: 'center'}}>
              Forgot Passwoed?
            </Text>
          </TouchableOpacity>
  
          <View style={styles.ttt}>
            <View style={styles.text}>
              <Text style={{fontSize: 18, alignSelf: 'center'}}>
                Don't have an account?
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <View style={styles.sig}>
                <Text
                  style={{fontSize: 18, alignSelf: 'center', color: '#83d4d0'}}>
                  Sign UP
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Watsup;
  
  const styles = StyleSheet.create({
    img: {
      height: height * 0.25,
      width: width * 0.7,
      alignSelf: 'center',
      justifyContent: 'center',
      // backgroundColor: 'cyan',
      alignItems: 'center',
    },
    txt: {
      height: height * 0.08,
      width: width * 0.8,
      justifyContent: 'center',
      justifyContent: 'space-between',
      alignSelf: 'center',
    },
    txtinput: {
      height: height * 0.08,
      width: width * 0.8,
      backgroundColor: '#eaebe6',
      justifyContent: 'center',
      padding: 10,
      alignSelf: 'center',
      marginVertical: 40,
      borderRadius: 12,
      justifyContent: 'space-between',
    },
    textinput: {
      height: height * 0.08,
      width: width * 0.8,
      // justifyContent: 'center',
      backgroundColor: '#eaebe6',
      marginLeft: 42,
      borderRadius: 12,
      padding: 10,
    },
    input: {
      fontSize: 19,
      color: '#141414',
      padding: 10,
    },
    touchable: {
      height: height * 0.08,
      width: width * 0.8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#6cd4ce',
      borderRadius: 37,
      marginVertical: 25,
      marginLeft: 39,
    },
    text: {
      height: height * 0.08,
      width: width * 0.55,
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      // marginVertical: 35,
      // backgroundColor: 'blue',
      // backgroundColor: 'cyan',
      // justifyContent: 'center'
    },
    ttt: {
      height: height * 0.07,
      width: width * 0.7,
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      // backgroundColor: 'red',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    sig: {
      height: height * 0.08,
      width: width * 0.19,
      justifyContent: 'center',
      alignSelf: 'center',
  
      // backgroundColor: 'pink'
    },
  });
  