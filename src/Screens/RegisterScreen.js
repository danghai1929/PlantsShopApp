import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View,TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import Colors from '../data/color'
import MainButton from '../Components/MainButton';
import MainInput from '../Components/MainInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function RegisterScreen({ navigation }) {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phone, setphone] = useState('');
  const onSignUp = () => {
    if (name.trim() == "" || !name) {
      alert("Không được để trống họ và tên !");
    } else if (phone.trim() == "" || !phone) {
      alert("Không được để trống email !");
    } else if (email.trim() == "" || !email) {
      alert("Không được để trống email !");
    } else if (password.trim() == "" || !password) {
      alert("Không được để trống mật khẩu !");
    } else {
      createAccount();
    }
  };
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    'name': name,
    'phone': phone,
    'email': email,
    'password': password
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const createAccount = async () => {
    fetch(`http://192.168.43.40:3000/users/${email}`)
          .then((response) => response.json())
          .then((data) =>{ 
            if (data.email.toLocaleLowerCase() == email) {
              alert('Email đã tồn tại!')
              return;
            }
          })
          .catch(error => {
            console.log(error) 
            fetch(`http://192.168.43.40:3000/users/`,requestOptions)
                .then(res => res.json())
                .then(resData => {
                  alert("Đăng ký thành công!")
                  navigation.goBack();
                })
                .catch(error => alert("Đăng ký thất bại!"));
          });  
  };
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/cover.png')}
          style={styles.backgroundImage}
        />
        <View style={styles.Box}>
            <View style={styles.Heading}>
              <Text style={styles.HeadingTitle}>Đăng ký</Text>
            </View>
            <MainInput
                nameIcon={"user"}
                placeholder={"Nhập họ và tên"}
                value={name}
                onChangeText={setname}
            />
            <MainInput
              nameIcon={"phone"}
              placeholder={'Nhập số điện thoại'}
              value={phone}
              secureTextEntry={true}
              onChangeText={setphone}
            />
            <MainInput
              nameIcon={"envelope"}
              placeholder={'Nhập email'}
              value={email}
              onChangeText={setemail}
            />
            <MainInput
              nameIcon={"lock"}
              placeholder={'Nhập mật khẩu'}
              value={password}
              secureTextEntry={true}
              onChangeText={setpassword}
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
              title={'Đăng ký'}
              onPress={onSignUp}
            />
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.Login}>Quay lại đăng nhập</Text>
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
  Box:{
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
  Login: {
    height: 30,
    marginTop: 30,
    color: Colors.main,
  }
});
