import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router/build/Route'

const EmptyState = ({title,subtitle}) => {
  return (
    <View classNmae = "justify-center items-center px-4">
      <Image
      source={images.empty} classNmae ='W-[270px] H-[215px]'
      resizeMode='contain'/>

    <Text className ="font=pmedium text-sm text-gray-100">
        {title}
    </Text>
    <Text className = "text-2x1 font psemibold text-white">
        {subtitle}
    </Text>
    <CustomButton
        title = 'Create Video'
        handlePress={() => router.push('/Create')}
        containerStyles ="w-full my-5"
    />
    </View>
  )
}

export default EmptyState