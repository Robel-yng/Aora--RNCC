import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { getAllPosts, getLatestPosts } from '../../lib/appWrite'
import useAppWrite from '../../lib/useAppWrite'
import VideoCard from '../../components/VideoCard'

const Home = () => {
  const {data: posts,refetch} = useAppWrite(getAllPosts)
  const {data: latestPosts} = useAppWrite(getLatestPosts)

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }
  console.log(posts)
  return (
    <SafeAreaView className = "bg-primary border-2 h-full">
     <FlatList
       data={posts}
      //data={[]}
      keyExtractor={(item) => item.$id}
      renderItem={({item}) => (
        <VideoCard video = {item}/>
      )}
      ListHeaderComponent={() => (
        <View className ="my-6 px-4 space-y-6">
          <View className = "justify-between items-start flex-row mb-6">
            <View>
              <Text className ="font=pmedium text-sm text-gray-100">
                Welcome Back
              </Text>
              <Text className = "text-2x1 font psemibold text-white">
                JSMastery
              </Text>
            </View>
            <View>
              <Image
              source={images.logoSmall}
              className ="w-9 h-10"
              resizeMode='contain'/>
            </View>
          </View>
          <SearchInput/>
          <View className ="w-full flex-1 pt-5 pb-8">
            <Text className ="text-gray-100 text-lg font-pregular mb-3">
              Latest Videos
            </Text>
            <Trending posts ={latestPosts ?? []}/>
          </View>
        </View>
      )}
      ListEmptyComponent={() => 
        (
         <EmptyState
         title = "No Videos found"
         subtitle = "No videos created yet"
          />
        )}
        refreshControl={<RefreshControl
          refreshing ={refreshing} onRefresh={onRefresh}
        />}
       >
    
     </FlatList>
    </SafeAreaView>
  )
}

export default Home