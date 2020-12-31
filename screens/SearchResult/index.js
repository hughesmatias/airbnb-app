import React from 'react'
import { View, FlatList } from 'react-native'
import Post from '../../components/Post';
import feed from '../../assets/data/feed';

const searchResult = () => {
  return (
    <View>
      <FlatList data={feed} renderItem={({ item }) => <Post {...item} />} />
    </View>
  )
}

export default searchResult;