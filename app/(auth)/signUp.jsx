import { View, Text, ScrollView,Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import Formfield from '../../components/Formfield'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appWrite'

const signUp = () => {
  const [form, setform] = useState({
    userName: '',
    email: '',
    password: '',
  })
const [isSubmitting, setIsSubmitting] = useState(false)


  const submit = async() =>{
    //createUser();
    if (!form.userName || !form.email || !form.password){
      Alert.alert('Error', 'please fill in all the fields');
    }
    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.userName)

      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)

    }finally{
      setIsSubmitting(false);
    }

  }

  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView>
        <View className = "w-full justify-center min-h-[82vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode='contain'  className= "w-[115px] h-[35px]"
          />
          <Text className ="text-lg text-white text-semibold mt-10 font-psemibold">
            Sign up to Aora
          </Text>
          <Formfield
          title="Username"
          value={form.userName}
          handleChangeText = {(e) => setform({...form, userName:e})}
          otherStyles = "mt-10"
        />
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
          title = "Sign up"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        
        />
        <View className= "justify-center pt-5 flex-row gap-2">
          <Text className= "text-lg text-gray-100 font-pregular">
            Already have an account?
          </Text>
          <Link
           href={"/signIn"}
           className= "text-lg text-secondary-100"
           >
              Sign in
              
          </Link>
        </View>

        </View>
        
      </ScrollView>

    </SafeAreaView> 
  )
}

export default signUp