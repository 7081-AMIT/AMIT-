import React from 'react'
import { StyleSheet, Text, View ,Button,TouchableOpacity} from 'react-native'
import HomeScreen from '../screen/HomeScreen';
//import HomeScreen from '../screen/HomeScreen';

const Home = ({navigation}) => {
  // const [userDetails, setUserDetails] = React.useState();
  // React.useEffect(() => {
  //   getUserData();
  // }, []);

  // const getUserData = async () => {
  //   const userData = await AsyncStorage.getItem('userData');
  //   if (userData) {
  //     setUserDetails(JSON.parse(userData));
  //   }
  // };

  // const logout = () => {
  //   AsyncStorage.setItem(
  //     'userData',
  //     JSON.stringify({...userDetails, loggedIn: false}),
  //   );
  //   navigation.navigate('LoginScreen');
  // };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Welcome 
      </Text>
    
       <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={{fontSize: 25, alignSelf: 'center',color:'red'}}>
                      Done
                    </Text>
                  </TouchableOpacity>
    </View>
  );
};

export default Home

const styles = StyleSheet.create({})