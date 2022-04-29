
import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  Modal,
  Alert,
  Pressable,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const Flat = [
    {
      name: 'Nimesh Narang',
    },

  ];

  return (
    <SafeAreaView>
      {/* <ScrollView> */}
      <View style={styles.main}>
        <View style={styles.container}></View>
        <View style={styles.container1}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>hello</Text>
        </View>

        <View
          style={{justifyContent: 'center', alignSelf: 'center', flex: 0.01}}>
          <View style={styles.input}>
            <TextInput
              placeholder="AMIT"
              placeholderTextColor={'black'}
              style={{
                alignSelf: 'center',
                height: height * 0.07,
                width: width * 0.78,
              }}
            />
          </View>
        </View>
        <View style={styles.container}></View>
        <View style={styles.container1}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>hello</Text>
        </View>

        <View
          style={{justifyContent: 'center', alignSelf: 'center', flex: 0.01}}>
          <View style={styles.input}>
            <TextInput
              placeholder="AMIT"
              placeholderTextColor={'black'}
              style={{
                alignSelf: 'center',
                height: height * 0.07,
                width: width * 0.78,
              }}
            />
          </View>
        </View>

        <View style={styles.container}></View>
        <View
          style={{
            // backgroundColor: 'green',
            height: height * 0.09,
            width: width / 2,
            alignSelf: 'center',
          }}>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View
                    // style={{
                    //   height: height * 0.3,
                    //   width: width / 2,
                    //   backgroundColor: 'cyan',
                    //   borderRadius: 10,
                    // }}
                    >
                    <View style={styles.container}></View>

                    <View>
                      <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={Flat}
                        renderItem={({item}) => {
                          return (
                            <View style={{}}>
                              <View style={{height: height * 0.02}}></View>
                              <View style={{}}>
                                <View
                                  style={{
                                    alignSelf: 'center',
                                    backgroundColor: 'green',
                                    height: height * 0.05,
                                    borderRadius: 20,
                                    width: width / 3,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <Text>{item.name}</Text>
                                </View>
                                <View style={{height: height * 0.02}}></View>
                                <View
                                  style={{
                                    alignSelf: 'center',
                                    backgroundColor: 'pink',
                                    height: height * 0.05,
                                    borderRadius: 20,
                                    width: width / 3,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <Text>{item.name1}</Text>
                                </View>
                                <View style={{height: height * 0.02}}></View>

                                <View
                                  style={{
                                    alignSelf: 'center',
                                    backgroundColor: 'purple',
                                    height: height * 0.05,
                                    borderRadius: 20,
                                    width: width / 3,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <Text>{item.name}</Text>
                                </View>
                                <View style={{height: height * 0.02}}></View>

                                <View
                                  style={{
                                    alignSelf: 'center',
                                    backgroundColor: 'yellow',
                                    height: height * 0.05,
                                    borderRadius: 20,
                                    width: width / 3,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  }}>
                                  <Text>{item.name}</Text>
                                </View>
                              </View>
                            </View>
                          );
                        }}
                      />
                    </View>
                  </View>

                  <View style={{height: height * 0.1}}></View>

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    //backgroundColor: 'red',
    height: height * 1,
    //width:width/1.2,
    alignSelf: 'center',
  },
  container: {
    flex: 0.05,
  },
  container1: {
    flex: 0.08,
    //justifyContent: 'flex-start',
    //width: width / 1.2,
    //alignSelf: 'center',
  },
  container2: {},
  input: {
    height: height * 0.08,
    width: width / 1.2,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 2,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {

    backgroundColor: 'cyan',
    height: height * 0.3,
    width: width / 2,
    backgroundColor: 'cyan',
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
     alignItems: 'center',
    shadowColor: '#000',

    shadowOffset: {
       width: 0,
       height: 2,

    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

