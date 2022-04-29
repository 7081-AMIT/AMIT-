import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Alert,
  Pressable,
  Dimensions,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('window');
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <View>
        <View style={{backgroundColor: 'green', height: height * 0.05}}>
          <View style={{height: height * 0.1}}></View>
          <View>
          <TouchableOpacity
                      style={[styles.button, styles.buttonClose1]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>AMIT</Text>
                    </TouchableOpacity>
          </View>

          <View style={styles.centeredView}>
            <View style={{height: height * 0.08}}></View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={{height: height * 0.1}}></View>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{height: height * 0.02}}></View>
                  <Text style={styles.modalText}>SignIn!</Text>
                  <Text>Name</Text>
                  <View style={{height: height * 0.02}}></View>
                  <View style={styles.input}>
                    <TextInput
                      placeholder="enter email"
                      placeholderTextColor={'black'}
                    />
                  </View>
                  <View style={{height: height * 0.02}}></View>
                  <Text>Age</Text>
                  <View style={{height: height * 0.02}}></View>
                  <View style={styles.input}>
                    <TextInput
                      placeholder="enter email"
                      placeholderTextColor={'black'}
                    />
                  </View>
                  <View style={{height: height * 0.02}}></View>
                  <Text>Email</Text>
                  <View style={{height: height * 0.02}}></View>
                  <View style={styles.input}>
                    <TextInput
                      placeholder="enter email"
                      placeholderTextColor={'black'}
                    />
                  </View>
                  <View style={{height: height * 0.02}}></View>
                  <Text>Phone</Text>
                  <View style={{height: height * 0.02}}></View>
                  <View style={styles.input}>
                    <TextInput
                      placeholder="enter email"
                      placeholderTextColor={'black'}
                    />
                  </View>
                  <View style={{height: height * 0.02}}></View>
                  <Text>Password</Text>
                  <View style={{height: height * 0.02}}></View>
                  <View style={styles.input}>
                    <TextInput
                      placeholder="enter email"
                      placeholderTextColor={'black'}
                    />
                  </View>
                  <View style={{height: height * 0.05}}></View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignSelf: 'center',
                    }}>
                    <Pressable
                style={[styles.button, styles.buttonClose1]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
              </Pressable>
                    <View style={{width: width * 0.05}}></View>
                    <Pressable
                      style={[styles.button, styles.buttonClose1]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                  </View>
                  <View></View>
                </View>
              </View>
            </Modal>
            <View>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
              </Pressable>
            </View>
            <View>
              <Text>dsghsdfsgshvdgsn</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent:'center',
    alignSelf: 'center',
  },
  buttonOpen: {
    height: height * 0.08,
    width: width / 2,
    backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonClose1: {
    height: height * 0.06,
    width: width / 3,
    backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  modalView: {
    backgroundColor: 'green',
    height: height * 0.8,
    width: width / 1.1,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    borderRadius: 10,
    height: height * 0.07,
    width: width / 1.1,
    borderWidth: 3,
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderColor: 'white',
  },
});

