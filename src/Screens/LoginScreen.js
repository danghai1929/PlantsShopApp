import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Colors from '../data/color'
import MainButton from '../Components/MainButton';
import MainInput from '../Components/MainInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user,setUser] = useState('');
  const [error, setError] = useState('');
  const goToHome = () => {
    if (email.trim() == '' || !email) {
      alert('Không được để trống email !');
    } else if (password.trim() == '' || !password) {
      alert('Không được để trống mật khẩu !');
    } else {
      login();
    }
  };
  const login = async () => {
    fetch(`http://192.168.0.103:3000/users/${email}`)
          .then((response) => response.json())
          .then((data) =>{ 
            if (data.email.toLocaleLowerCase() == email && data.password == password) {
              let curUser = data;
                AsyncStorage.setItem('curUser', JSON.stringify(curUser));
                navigation.replace('HomeTab');
            } else alert('Email hoặc mật khẩu không chính xác!');})
          .catch(error => {
            setError(error) 
            alert('Đăng nhập thất bại!')
          });
  };
  const checkLogin = async () => {
    let userData = await AsyncStorage.getItem('curUser');
    if (userData) navigation.replace('HomeTab');
  };
  useEffect(() => {
    checkLogin();
  }, []);

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
              onPress={goToHome}
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