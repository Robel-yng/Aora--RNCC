import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const VideoCard = ({video: {title,thumbnail, video, creator : {
    username, Avatar}}}) => {

    const[play,setPlay]= useState(false)


  return (
    <View className = "flex-col items-center px-4 mb-14">
        <View className ="flex-row gap-3 items-start">
            <View className = "justify-center items-center flex-row flex-1"> 
            <View className ="w-[46px] h-[46px] rounded-lg border border-secondary
            justify-center items-center p-0.5">
                <Image source = {{uri: Avatar}}
                className = "w-full h-full rounded-lg"
                resizeMode= 'cover'/>
            </View>
            <View className='justify-center flex-1 ml-3 gap-y-1'> 
                <Text className ='text-white font-psemibold text-sm' numberOfLines={1}>
                    {title}
                </Text>
                <Text className='TEXT-XS text-gray-100 font-pregular'>
                    {username}
                </Text>
            </View>
            </View>
            <View className='pt-2'>
                <Image source={icons.menu} className = 'w-5 h-5'
                resizeMode='contain'/>
            </View>
        </View>

        {play ? (
            <Text>Playing</Text>
        ) : (
            <TouchableOpacity className ='w-full h-60 rounded-xl mt-3 relative justify-center items-center'
            activeOpacity={0.7}
            onPress={() => setPlay(true)}>
                <Image 
                source={{uri: thumbnail}}
                className = 'w-full h-full rounded-xl mt-3'
                resizeMode='contain'/> 
                <Image
                    source={icons.play}
                    className ='W-12 H-12 absolute'
                    resizeMode='cover'
                />
            </TouchableOpacity>
        )}

      {/* <Text className ="text-2x1 text-white">{title}</Text> */}
    </View>
  )
}

export default VideoCard