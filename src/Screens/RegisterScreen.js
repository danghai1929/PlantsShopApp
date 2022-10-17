import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View,TouchableWithoutFeedback, Keyboard } from 'react-native';
import Colors from '../data/color'
import MainButton from '../Components/MainButton';
import MainInput from '../Components/MainInput';
export default function RegisterScreen({ navigation }) {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phone, setphone] = useState('');
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
              nameIcon={"envelope"}
              placeholder={'Nhập email'}
              value={email}
              onChangeText={setemail}
            />
            <MainInput
              nameIcon={"phone"}
              placeholder={'Nhập số điện thoại'}
              value={phone}
              secureTextEntry={true}
              onChangeText={setphone}
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
            />
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
});
