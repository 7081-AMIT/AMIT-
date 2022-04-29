import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const FlatList1 = () => {
  const Flat = [
    {
      src: require('./Image/3.jpeg'),
      name: 'Nimesh Narang',
      name1: "I am itroduced to",
      time: '02:03',
      dot: '.',
    },

  ];
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'black'}}>
        <View style={{height: height * 0.05}}></View>
        <View
          style={{
            backgroundColor: 'black',
            height: height * 0.07,
            width: width / 1.2,
            alignSelf: 'center',
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 1,
          }}>
          <View style={{width: width * 0.05}}></View>
          <View
            style={{
             // backgroundColor: 'blue',
              height: 50,
              width: width * 0.8,
              //justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity>
              <Image
                style={{height: height * 0.03, width: width * 0.05}}
                source={require('./Image/ser.png')}
              />
            </TouchableOpacity>

            <TextInput
              placeholder="enter name"
              placeholderTextColor={'white'}
              style={{color: 'white',
              alignSelf:'center',
              }}>

              </TextInput>
          </View>
        </View>
        <View style={{height: height * 0.02}}></View>
        <FlatList
          //horizontal={true}
          // numColumns={4}
          showsHorizontalScrollIndicator={false}
          data={Flat}
          renderItem={({item}) => {
            return (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    // backgroundColor: 'red',
                    width: width / 1,
                    alignSelf: 'center',
                    height: height * 0.1,
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 20,
                    //overflow: 'hidden',
                  }}>
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      source={item.src}
                      style={{
                        height: height * 0.07,
                        width: width * 0.15,
                        borderRadius: 100,
                      }}
                    />
                  </View>

                  <View
                    style={{
                      // backgroundColor: 'blue',
                      height: height * 0.04,
                      width: width * 0.32,
                      justifyContent: 'center',
                    }}>
                           <View style={{height: height * 0.02}}></View>
                    <View style={{justifyContent: 'center'}}>
                      <Text style={{textAlign: 'center', color: 'white'}}>
                        {item.name}
                      </Text>
                      <Text style={{textAlign: 'center', color: 'white'}}>
                        {item.name1}
                      </Text>
                    </View>
                  </View>
                  <View style={{width: width * 0.25}}></View>

                  <View
                    style={{
                      //backgroundColor: 'blue',
                      height: 40,
                      width: 80,
                      alignSelf: 'center',
                    }}>
                    <Text style={{textAlign: 'center', color: 'white'}}>
                      {item.time}
                    </Text>

                    <Text style={{textAlign: 'center', color: 'white'}}>
                      {item.dot}
                    </Text>
                  </View>
                </View>
                <View style={{height: height * 0.02}}></View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default FlatList1;

const styles = StyleSheet.create({});