// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { enableScreens } from 'react-native-screens';

// import SignupScreen from './Src/Signup'
// import LoginScreen from './Src/Login'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Login1 from './Source/SCREEN/Login1';

// import Onbording1 from './Source/SCREEN/Onbording1';
// import Reset from './Source/SCREEN/Reset';
// import EmailBox from './Source/SCREEN/EmailBox';
// import New from './Source/SCREEN/New';
// import Intro from './Source/SCREEN/Intro';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator >

//         {/* <Stack.Screen  name="Login" component={LoginScreen} />
//         <Stack.Screen   name="Signup" component={SignupScreen} /> */}

//         <Stack.Screen  name="Onboarding1" component={Onbording1} />
//         <Stack.Screen  name="Login1" component={Login1} />
//         <Stack.Screen  name="Intro" component={Intro} />
//         <Stack.Screen  name="Reset" component={Reset} />
//         <Stack.Screen  name="EmailBox" component={EmailBox} />
//         <Stack.Screen  name="New" component={New} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;
// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName = "ios-login";

//                     if(route.name === 'Home') {
//                     }
//                     else if (route.name === 'Details') {
//                         iconName = 'ios-list';
//                     } else if (route.name === 'Contact') {
//                         iconName = 'ios-call';
//                     }

//                  // <Ionicons name={iconName} size={size} color={color} />;
//                 },

//             })}>
//         <Tab.Screen  name="Login" component={LoginScreen} />
//         <Tab.Screen   name="Signup" component={SignupScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }



// // import React from 'react'
// // import { StyleSheet, Text, View } from 'react-native'

// // const App = () => {
// //   return (
// //     <View>
// //       <Text>vdsfdsdsfsafsdsdfsdf</Text>
// //     </View>
// //   )
// // }

// // export default App

// // const styles = StyleSheet.create({})
// // import * as React from 'react';
// // import { View, Text } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import { enableScreens } from 'react-native-screens';

// // import SignupScreen from './Src/Signup'
// // import LoginScreen from './Src/Login'
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { createDrawerNavigator } from '@react-navigation/drawer';
// // import Login1 from './Source/SCREEN/Login1';

// // import Onbording1 from './Source/SCREEN/Onbording1';

// // const Stack = createNativeStackNavigator();

// // function App() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator >

// //         {/* <Stack.Screen  name="Login" component={LoginScreen} />
// //         <Stack.Screen   name="Signup" component={SignupScreen} /> */}

// //         {/* <Stack.Screen  name="Onboarding1" component={Onbording1} />
// //         <Stack.Screen  name="Login1" component={Login1} /> */}
// //            <Stack.Screen  name="Login" component={LoginScreen} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }



// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import Screen1 from './Module1/Screen/Screen1'
// import Screen2 from './Module1/Screen/Screen2'
// import Screen3 from './Module1/Screen/Screen3'
// import Screen4 from './Module1/Screen/Screen4'
// import Screen5 from './Module1/Screen/Screen5'
// import Screen6 from './Module1/Screen/Screen6'
// import Screen7 from './Module1/Screen/Screen7'
// import ScreenA from './Module1/Screen/ScreenA'
// import ScreenR from './Module1/Screen/ScreenR'
// import Onbording1 from './Source/SCREEN/Onbording1'
// import ScreenAr from './Module1/Screen/ScreenAr'
// import ScreenO from './Module1/Screen/ScreenO'

// const App = () => {
//   return (
//     <View>
//       {/* <Screen1/> */}
//       {/* <Screen2/> */}
//       {/* <Screen3/> */}
//       {/* <Screen4/> */}
//       {/* <Screen5/> */}
//       {/* <Screen6/> */}
//       {/* <Screen7/> */}
//       {/* <ScreenA/> */}
//       {/* <ScreenR/> */}
//       {/* <ScreenAr/> */}
//       {/* <ScreenO/> */}
   

//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})




import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

import SignupScreen from './Src/Signup'
import LoginScreen from './Src/Login'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Onbording1 from './Source/SCREEN/Onbording1';
import Screen1 from './Module1/Screen/Screen1';
import Screen2 from './Module1/Screen/Screen2';
import Screen3 from './Module1/Screen/Screen3';
import Screen4 from './Module1/Screen/Screen4';
import Screen5 from './Module1/Screen/Screen5';
import Screen6 from './Module1/Screen/Screen6';
import Screen7 from './Module1/Screen/Screen7';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >

        {/* <Stack.Screen  name="Login" component={LoginScreen} />
        <Stack.Screen   name="Signup" component={SignupScreen} /> */}

        <Stack.Screen  name="Screen1" component={Screen1} options={{headerShown:false}} />
        <Stack.Screen  name="Screen2" component={Screen2} options={{headerShown:false}} />
        <Stack.Screen  name="Screen3" component={Screen3} options={{headerShown:false}} />
        <Stack.Screen  name="Screen4" component={Screen4} options={{headerShown:false}} />
        <Stack.Screen  name="Screen5" component={Screen5} options={{headerShown:false}} />
        <Stack.Screen  name="Screen6" component={Screen6} options={{headerShown:false}} />
        <Stack.Screen  name="Screen7" component={Screen7} options={{headerShown:false}} />
       
      
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;