import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from './../constants/Colors'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};
WebBrowser.maybeCompleteAuthSession();



export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);



  return (
    <View>
      <View style={{
        display:"flex",
        alignItems:"center",
        marginTop:100
      }}>
        <Image source={require("./../assets/images/login.png")}
          style={{
            width:220,
            height:450,
            borderRadius:20,
            borderWidth:4,
            borderColor:"#000"
          }}
        />
      </View>

      <View style={{backgroundColor:"#fff",padding:18,marginTop:-20}}>
        <Text style={{
          fontSize:30,
          fontFamily:"outfit-bold",
          textAlign:"center"
        }}>Your Ultimate 
          <Text style={{
            color:Colors.PRIMARY
          }}> Community Business Directory</Text>
          App</Text>
          <Text style={{fontSize:15,fontFamily:"outfit",textAlign:"center",marginVertical:15,color:Colors.GRAY}}>Find your favorite business near your and post your own business to your community</Text>

          <TouchableOpacity style={{
            backgroundColor:Colors.PRIMARY,
            padding:16,
            borderRadius:99,
            marginTop:20
          }} onPress={onPress}>
            <Text style={{color:"#fff",textAlign:"center",fontFamily:"outfit",fontSize:17}} >Let's Get Started</Text>
          </TouchableOpacity>
      </View>
      
    </View>
  )
}