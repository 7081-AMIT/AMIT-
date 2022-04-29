import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const Wallet = ({navigation}) => {
  const Flat = [
    {
     
      name2: ' ↗',
      name: '   Send',

      name1: '   From 0X4200c90',
      time: '320XRP',
      dot: '$20567USD',
    },
    {
     
        name2: ' ↗',
        name: '   Send',
  
        name1: '   From 0X4200c90',
        time: '320XRP',
        dot: '$20567USD',
      },
      {
     
        name2: ' ↗',
        name: '   Send',
  
        name1: '   From 0X4200c90',
        time: '320XRP',
        dot: '$20567USD',
      },
   
    
  ];
  return (
    <View
      style={{
        backgroundColor: 'black',
        height: height * 1,
      }}>
      <View style={{height: height * 0.02}}></View>
      <View
        style={{
          //backgroundColor: 'red',
          width: width / 1.1,
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Wallet
        </Text>
      </View>
      <View
        style={{
          // backgroundColor: 'green',
          //width: width / 1,
          height: height * 0.29,
        }}>
        <View style={{height: height * 0.05}}></View>
        <View
          style={{
            // backgroundColor: 'red',
            width: width / 1.2,
            height: height * 0.145,
            alignSelf: 'center',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'white',
          }}>
          <View style={{height: height * 0.021}}></View>

          <View style={{width: width / 1.3, alignSelf: 'center'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  //backgroundColor: 'green',
                  height: 40,
                  width: 80,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  Balance:
                </Text>
              </View>
              <View
                style={{
                  //backgroundColor: 'green',
                  height: 40,
                  width: 80,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  4SHARE
                </Text>
              </View>
            </View>
            <View style={{height: height * 0.021}}></View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  //backgroundColor: 'green',
                  height: 40,
                  width: 80,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  AirDrop
                </Text>
              </View>
              <View
                style={{
                  //  backgroundColor: 'green',
                  height: 40,
                  width: 80,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  3SHARE
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{height: height * 0.05}}></View>

        <View
          style={{
            // backgroundColor: 'red',
            height: height * 0.15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width / 1.2,
              alignSelf: 'center',
              borderBottomWidth:2,
              borderColor:'grey',
              width: width / 1.05,
            }}>
            <View
              style={{
                //backgroundColor: 'green',
                height: height * 0.13,
                width: width * 0.25,
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  borderRadius: 100,
                  height: height * 0.09,
                  width: width * 0.2,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  //backgroundColor: 'grey',
                  borderWidth: 2,
                  borderColor: 'grey',
                }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 50,
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    ↑
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>
                Deposit
              </Text>
            </View>

            <View
              style={{
                // backgroundColor: 'green',
                height: height * 0.13,
                width: width * 0.25,
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  borderRadius: 100,
                  height: height * 0.09,
                  width: width * 0.2,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  //backgroundColor: 'grey',
                  borderWidth: 2,
                  borderColor: 'grey',
                }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 50,
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    ↓
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>
                Receive
              </Text>
            </View>
            <View
              style={{
                // backgroundColor: 'green',
                height: height * 0.13,
                width: width * 0.25,
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  borderRadius: 100,
                  height: height * 0.09,
                  width: width * 0.2,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  // backgroundColor: 'grey',
                  borderWidth: 2,
                  borderColor: 'grey',
                  
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Flatlist1')}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 50,
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    ↗
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>
                Send
              </Text>
            </View>
          </View>

          <View style={{height: height * 0.02}}></View>
          <View style={{width: width / 1.1, alignSelf: 'center'}}>
            <Text style={{fontSize: 20, color: 'white'}}>
              Transaction History
            </Text>
          </View>
          <View style={{height: height * 0.02}}></View>
          <View
            style={{
              //backgroundColor:'red',
              height: height * 0.5,
            }}>
            <View style={{height: height * 0.02}}></View>
            <View style={{width:width/1.1,alignSelf:'center',
       
        }}>
            <FlatList
              //horizontal={true}
              // numColumns={4}
              showsHorizontalScrollIndicator={false}
              data={Flat}
              renderItem={({item}) => {
                return (
                  <View style={{ 
                      
                    borderBottomWidth:2,
                    borderColor:'grey',
                    width: width / 1,}}>
                         <View style={{height: height * 0.02}}></View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flexDirection: 'row'}}>
                          <View style={{
                              borderRadius: 100,
                              height: height * 0.07,
                              width: width * 0.15,
                              justifyContent: 'center',
                              alignSelf: 'center',
                              // backgroundColor: 'grey',
                              borderWidth: 2,
                              borderColor: 'grey',
                             
                          }}> 
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 40,
                            color: 'white',
                            fontWeight: 'bold',
                          }}>{item.name2}
                        </Text>

                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                           
                            //backgroundColor: 'red',
                           
                            // alignSelf: 'center',
                            // height: height * 0.1,
                            //borderWidth: 1,
                            //borderColor: 'grey',
                            //borderRadius:10,
                            //overflow: 'hidden',
                          }}>
                          <View style={{justifyContent: 'center'}}></View>

                          <View
                            style={{
                              //backgroundColor: 'blue',
                              height: height * 0.04,
                              width: width * 0.32,
                              justifyContent: 'center',
                            }}>
                            <View style={{height: height * 0.02}}></View>
                            <View style={{justifyContent: 'center'}}>
                              <Text
                                style={{    color: 'white',fontSize:20}}>
                                {item.name}
                              </Text>
                              <Text
                                style={{textAlign: 'center', color: 'white'}}>
                                {item.name1}
                              </Text>
                            </View>
                          </View>
                          <View style={{width: width * 0.2}}></View>

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
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
