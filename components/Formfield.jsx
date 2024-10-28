import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'

const Formfield = ({title, value, placeholder, handleChangeText , otherStyles, ...props}) => {
    const [showPassword, setshowPassword] = useState(false)

  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className= "text-base text-gray-200 font-pmedium">{title}</Text>
      <View className= {`border-2 border-black-200 w-full h-16 px-4 
        bg-black-100 rounded-2x1 
        focus:border-secondary items-center flex-row`}>
        <TextInput
            className="flex-1 text-white font-psemibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title ==='Password' && !showPassword}
        />

        {title ===  'Password' &&(  
            <TouchableOpacity onPress={()=>
                setshowPassword(!showPassword)
            }>
                <Image source={!showPassword ? icons.eye: icons.eyeHide} 
                className = "w-6 h-6" resizeMode='contain'/>
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default Formfield