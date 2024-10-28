import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView} from 'react-native-safe-area-context'
import {images} from '../constants'
import CustomButton from '../components/CustomButton';
import { Redirect, router } from 'expo-router'


export default function App() {
  return (
      <SafeAreaView className = "bg-primary h-full">
        <ScrollView contentContainerStyle = {{height: '100%'}}
        
        >
          <View className = "w-full justify-center items-center min-h-[85vh] px-4">
                <Image
                  source = {images.logo}
                  className = "w-[130px] h-[83px]"
                  resizeMode = "contain"
                >
                </Image>

                <Image
                source={images.cards}
                className = "max-4--[380px] w-full h-[300px]"
                resizeMode = "contain"
                />

                <View className="relative mt-5">
                  <Text className="text-3x1 text-white font-bold text-center">
                      Discover Endless Possibilities With{' '}
                  </Text>
                  <Text className="text-secondary-200">
                      Aora
                  </Text>
                  <Image
                  source={images.path}
                  className= "w-[136px] h-[15px] absolute-bottom-2 -right-8"
                  resizeMode='contain'
                  />

                </View>

              <Text className = "text-sm font-pregular text-gray-100 mt-7 text-center">
                    Where creativity meets innovation: emback on a journey of limitless exploration with Aora
              </Text>
              <CustomButton
                title = "Continue With Email"
                handlePress={()=> router.push('/signIn')}
                containerStyles= "w-full mt-7"
              />
          </View>

        </ScrollView>

      </SafeAreaView>

  );
}

