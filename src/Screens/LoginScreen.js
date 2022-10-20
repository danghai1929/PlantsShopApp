import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Colors from '../data/color'
import MainButton from '../Components/MainButton';
import MainInput from '../Components/MainInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setData = async () => {
      if (email.length == 0 || password.length == 0) {
          Alert.alert('Warning!', 'Hãy nhập thông tin đăng nhập của bạn!')
      } else {
          try {
              var user = {
                  Email: email,
                  Password: password,
              }
              await AsyncStorage.setItem('UserData', JSON.stringify(user));
              Alert.alert('Tạo thông tin đăng nhập thành công!')
              navigation.navigate('HomeTab');
          } catch (error) {
              console.log(error);
          }
      }
  }

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/cover.png')}
          style={styles.backgroundImage}
        />
        <View style={styles.LoginBox}>
            <View style={styles.Heading}>
              <Text style={styles.HeadingTitle}>Welcome to </Text>
              <Text style={styles.HeadingTitle}>Plants Shop!</Text>
            </View>
            <MainInput
              nameIcon={"envelope"}
              title={'Email'}
              placeholder={'Nhập email'}
              onChangeText={(value) => setEmail(value)}
            />
            <MainInput
              nameIcon={"lock"}
              placeholder={'Nhập mật khẩu'}
              title={'Mật khẩu'}
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
            />
            <MainButton
              style={{ 
                marginTop: 10,
                width: 130, 
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4, 
              }}
              title={'Đăng Nhập'}
              onPress={setData}
            />
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.Register}>Đăng ký</Text>
            </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  LoginBox:{
    position: "absolute",
    alignItems: 'center',

  },
  Heading:{
    paddingBottom: 30,
  },
  HeadingTitle: {
    fontWeight: 'bold',
    color: Colors.main,
    fontSize: 35,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5
  },
  Register: {
    height: 30,
    marginTop: 30,
    color: Colors.main,
  }
});