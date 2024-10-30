import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'

const SearchInput = ({title, value, placeholder, handleChangeText , otherStyles, ...props}) => {
    const [showPassword, setshowPassword] = useState(false)

  return (
      <View className= {`border-2 border-black-200 w-full h-16 px-4 
        bg-black-100 rounded-2x1 
        focus:border-secondary items-center flex-row`}>
        <TextInput
            className="flex-1 text-white font-psemibold text-base"
            value={value}
            placeholder="Search for a new component"
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title ==='Password' && !showPassword}
        />

        <TouchableOpacity>
            <Image
            source={icons.search}
            className = "w-9 h-10"
            resizeMode='contain'/>
        </TouchableOpacity>
      </View>
  )
}

export default SearchInput