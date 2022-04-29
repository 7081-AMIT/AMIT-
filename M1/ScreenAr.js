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
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const ScreenAr = () => {
  const Flat = [
    {
      src: require('../Assests/Image/Im.png'),
      name: 'Life Insurance policy',
      name1: 'Units : 4 UNIT/USD 3000',
      name2: 'Date : 24 - April -2021',
    },
    {
        src: require('../Assests/Image/Im.png'),
        name: 'Life Insurance policy',
        name1: 'Units : 4 UNIT/USD 3000',
        name2: 'Date : 24 - April -2021',
      },
      {
        src: require('../Assests/Image/Im.png'),
        name: 'Life Insurance policy',
        name1: 'Units : 4 UNIT/USD 3000',
        name2: 'Date : 24 - April -2021',
      },
      {
        src: require('../Assests/Image/Im.png'),
        name: 'Life Insurance policy',
        name1: 'Units : 4 UNIT/USD 3000',
        name2: 'Date : 24 - April -2021',
      },
      {
        src: require('../Assests/Image/Im.png'),
        name: 'Life Insurance policy',
        name1: 'Units : 4 UNIT/USD 3000',
        name2: 'Date : 24 - April -2021',
      },
      {
        src: require('../Assests/Image/Im.png'),
        name: 'Life Insurance policy',
        name1: 'Units : 4 UNIT/USD 3000',
        name2: 'Date : 24 - April -2021',
      },
      {
        src: require('../Assests/Image/Im.png'),
        name: 'Life Insurance policy',
        name1: 'Units : 4 UNIT/USD 3000',
        name2: 'Date : 24 - April -2021',
      },
      {
        src: require('../Assests/Image/Im.png'),
        name: 'Life Insurance policy',
        name1: 'Units : 4 UNIT/USD 3000',
        name2: 'Date : 24 - April -2021',
      },
      {
        src: require('../Assests/Image/Im.png'),
        name: 'Life Insurance policy',
        name1: 'Units : 4 UNIT/USD 3000',
        name2: 'Date : 24 - April -2021',
      },
      {
        src: require('../Assests/Image/Im.png'),
        name: 'Life Insurance policy',
        name1: 'Units : 4 UNIT/USD 3000',
        name2: 'Date : 24 - April -2021',
      },
      {
        src: require('../Assests/Image/Im.png'),
        name: 'Life Insurance policy',
        name1: 'Units : 4 UNIT/USD 3000',
        name2: 'Date : 24 - April -2021',
      },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.main}>
            <View style={{height: height * 0.027}}></View>
            <View style={styles.inv}>
              <View style={styles.container3}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <View style={styles.vie2}>
                      <Text style={styles.txt5}>←</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.vie3}>
                    <Text style={styles.txt4}>My Investments</Text>
                  </View>
                </View>
              </View>
              <View style={{height: height * 0.027}}></View>

              <View>
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
                        backgroundColor: 'white',
                        width: width/1.08,
                        alignSelf: 'center',
                        height: height * 0.154,
                        borderWidth: 5,
                        borderColor: 'white',
                        borderRadius: 20,
                        //overflow: 'hidden',
                      }}>
                      <View style={{justifyContent: 'center'}}>
                        <Image source={item.src} style={styles.img} />
                      </View>
                      <View style={styles.container}>
                        <View style={styles.container1}>
                          <Text style={styles.txt}>{item.name}</Text>
                          <View style={{height: height * 0.01}}></View>
                          <Text style={styles.txt1}>{item.name1}</Text>
                          <View style={{height: height * 0.027}}></View>
                          <Text style={styles.txt2}>{item.name2}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={{height: height * 0.02}}></View>
                  </View>
                );
              }}
            />

              </View>
            </View>
          
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenAr;

const styles = StyleSheet.create({
  main: {
   // backgroundColor: 'red',
    height: height * 1,
    width: width * 1,
  },
  img: {
    height: height * 0.128,
    width: width * 0.25,
    // borderRadius:20
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20
  },
  container: {
    // backgroundColor:'yellow',
    height: height * 0.12,
    width: width * 0.75,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  container1: {
    // backgroundColor:'red',
    height: height * 0.09,
    width: width * 0.7,
    alignSelf: 'center',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  txt1: {
    color: 'grey',
  },
  txt2: {
    color: 'grey',
  },
  vie2: {
    backgroundColor: 'rgb(122,187,26)',
    height: height * 0.05,
    width: width * 0.1,

    justifyContent: 'center',
    borderRadius: 10,
  },
  txt5: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  vie3: {
    justifyContent: 'center',
    // backgroundColor:'green',
    width: width / 1.7,
    alignSelf: 'center',
  },
  txt4: {
    textAlign: 'center',
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  inv: {
    width: width / 1.1,
    alignSelf: 'center',
    // height:height*1
  },
});
