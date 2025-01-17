import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true)
  }

  const hideModal = () => {
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={showModal} >
        <Text> Show Modal Message </Text>
      </Pressable>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(hideModal);
            }}>
              <View style = {styles.centeredView}>
                <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello world? {'\n'}
                  This is a modal message.
                  </Text>
                <Pressable
                onPress={() => setModalVisible(hideModal)}>
                  <Text>Close</Text>
                </Pressable>
                </View>
              </View>
          </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 25,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      paddingBottom: 50,
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
      modalText: {
      marginBottom: 20,
      textAlign: 'center'
    },
});
