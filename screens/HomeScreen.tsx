import * as React from 'react';

import {
  // Text,
  // Image,
  View,
  StyleSheet,
  FlatList,
  // Pressable,
} from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';

import chatRoomsData from '../assets/dummy-data/ChatRooms';
// import Auth from '@aws-amplify/auth';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />

      {/* <Pressable onPress={() => Auth.signOut()}>
        <Text>Logout</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
