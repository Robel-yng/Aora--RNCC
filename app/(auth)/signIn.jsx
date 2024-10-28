import { View, Text, ScrollView,Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import Formfield from '../../components/Formfield'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const signIn = () => {
  const [form, setform] = useState({
    email: '',
    password: '',
  })
const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{

  }

  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView>
        <View className = "w-full justify-center min-h-[82vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode='contain'  className= "w-[115px] h-[35px]"
          />
          <Text className ="text-2x1 text-white text-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <Formfield
          title="Email"
          value={form.email}
          handleChangeText = {(e) => setform({...form, email:e})}
          otherStyles = "mt-7"
          KeyboardType = "email-address"  
        />
        <Formfield
          title="Password"
          value={form.password}
          handleChangeText = {(e) => setform({...form, password:e})}
          otherStyles = "mt-7"  
        />

        <CustomButton
          title = "Sign in"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        
        />
        <View className= "justify-center pt-5 flex-row gap-2">
          <Text className= "text-lg text-gray-100 font-pregular">
            Don't have account?
          </Text>
          <Link
           href={"/signUp"}
           className= "text-lg text-secondary-100"
           >
              Sign up here
              
          </Link>
        </View>

        </View>
        
      </ScrollView>

    </SafeAreaView>
  )
}

export default signIn