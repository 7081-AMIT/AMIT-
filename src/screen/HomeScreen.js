import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';


//import { ScrollView } from 'react-native-gesture-handler';
//import { SafeAreaView } from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const [checked, setChecked] = React.useState('first');

  //const [checked, setChecked] = useState(0);
  var gender = ['Male', 'Female'];

const [passwordVisible, setPasswordVisible] = useState('true')
 

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
        <ImageBackground
          style={{height: height *1.7}}
          source={require('./Image/backg.jpg')}>


          <View>
            <View>
              <View style={{height: height / 8}}></View>
              <View style={styles.container1}>
                <Image style={styles.image} source={require('./Image/a.png')} />
              </View>
              <View style={{height: height / 7}}></View>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Text>Email</Text>
              <View style={{height: 15}}></View>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter your email."
                placeholderTextColor="#003f5c"
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

            <View style={{height: 25}}></View>
            <View style={{alignSelf: 'center'}}>
              <Text>Password</Text>
              <View style={{height: 15}}></View>
            </View>
            <View style={styles.inputView1}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter your password."
                placeholderTextColor="#003f5c"
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
              />
            </View>

            <View style={{height: 25}}></View>
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
            <View style={{height: 25}}></View>

            <View
              style={{
                // backgroundColor: 'red',
                //height: height / 12,
                // width: width / 1.2,
                alignSelf: 'center',
              }}>
              <View style={{height: 10}}></View>
              <View
                style={{
                  backgroundColor: 'green',
                  height: height / 18,
                  width: width / 1.3,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: 10}}></View>
                  <View style={{width: 10}}></View>
                 
                  <Text style={styles.txt}>Remember me
                  right{
                  <TextInput.Icon
                  name={passwordVisible ? 'check-box' : 'check-box' }
                  
                  onPress={()=> setPasswordVisible(!passwordVisible)}/>
                  
                }
                  </Text>
                </View>
              </View>
            </View>

            <View style={{height: 25}}></View>
            <TouchableOpacity onLongPress={() => onSubmit()}>
              <Text style={styles.forgot_button}>Forgot Password</Text>
            </TouchableOpacity>
            <View style={{height: 25}}></View>

            <View style={{height: 25}}></View>

            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
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
            <View> 
            <View>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
    </View>
    <View>
      <View style={styles.btn}>
        {gender.map((gender, key) => {
          return (
            <View key={gender} >
              {checked == key ? (
                
                <TouchableOpacity style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require('./Image/le.png')}
                  />
                  <Text>{gender}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setChecked(key);
                  }}
                  style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require('./Image/3.jpeg')}
                  />
                  <Text>{gender}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
      {/* <Text>{gender[checked]}</Text> */}
    </View>

    </View>
            
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  image: {
    borderRadius: 100,
    height: 100,
    width: 100,
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 55,
    alignItems: 'center',
    fontSize: 20,
    alignSelf: 'center',
  },
  inputView1: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 55,
    alignItems: 'center',
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
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerp: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  img: {
    borderRadius: 100,
    height: 50,
    width: 50,
  },
});

// import React,{useState}  from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   SafeAreaView,
//   ScrollView,
//   TextInput,
//   Dimensions

// } from 'react-native';
// const {height, width} = Dimensions.get('window');

// const HomeScreen = ({navigation}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [emailInputError, setEmailInputError] = useState(null);
//   const [emailInputErrorMessage, setEmailInputErrorMessage] = useState(" ");

//   const [passwordInputError, setPasswordInputError] = useState(null);
//   const [passwordInputErrorMessage, setPasswordInputErrorMessage] = useState(" ");

//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             marginTop: 10,
//             borderRadius: 10,
//             borderWidth: 2,
//           }}>
//           <View>
//             <TouchableOpacity>
//               <Text style={styles.txt}>HOME</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <TouchableOpacity>
//               <Text style={styles.txt}>CARRER</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <TouchableOpacity>
//               <Text style={styles.txt}>ABOUT</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <TouchableOpacity>
//               <Text style={styles.txt}>CONTACT</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <TouchableOpacity>
//               <Text style={styles.txt}>SERVICES</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View>
//           <Text
//             style={{
//               fontSize: 28,
//               fontWeight: 'bold',
//               textAlign: 'center',
//               marginVertical: 50,
//             }}>
//             Register Here
//           </Text>

//         </View>
//         <View style={styles.first}>
//          <View>
//             <View style={styles.first1}>
//             <Text style={{}}>HEllo Amit</Text>

//           </View>
//          </View>

//         </View>

//         <View>
//           <TouchableOpacity
//           onPress={() => {
//             navigation.navigate('SignIn');
//           }}>
//             <Text>Press HEre</Text>
//           </TouchableOpacity>
//           </View>
//           </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 200,
//   },
//   txt: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     padding:6,
//     color: 'red',
//   },
//   txt1:{
//     fontSize:28,
//     padding:10

//   },
//   first:{
//     backgroundColor:'green',
//     height:height/9.3,
//     width:width/1.2,
//     alignSelf:'center',
//     borderRadius:10,

//   },
//   first1:{
//     backgroundColor:'red',
//     height:height/19.3,
//     width:width/1.3,
//     alignSelf:'center',
//     borderRadius:20,
//     top:10

//   }
// });
