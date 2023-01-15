import React, {useState} from 'react';
import {SafeAreaView, Text, Alert} from 'react-native';
import styles from './Login.style';
import {Formik} from 'formik';

import Button from '../../components/Button';
import Input from '../../components/Input';

let kullaniciAdi = 'ahmet';
let sifre = '123';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  function HandleSingup() {
    navigation.navigate('SingupPage');
  }
  function HandleHome() {
    navigation.navigate('HomePage');
  }

  const initialFormValues = {
    usermail: '',
    password: '',
  };
  function HandleLogin(formValues) {
    if (formValues.usermail == kullaniciAdi && formValues.password == sifre) {
      HandleHome();
    } else {
      Alert.alert('Bilgi', 'Kullanıcı Adı  veya Şifreniz Hatalıdır ', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Watch for Points'e Hoşgeldiniz!</Text>
      <Formik initialValues={initialFormValues} onSubmit={HandleLogin}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onType={handleChange('usermail')}
              value={values.usermail}
              placeholder="Kullanıcı Adınızı Giriniz..."
            />
            <Input
              onType={handleChange('password')}
              value={values.password}
              placeholder="Şifrenizi Giriniz..."
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Kayıt Ol" style="secondary" onPress={HandleSingup} />
    </SafeAreaView>
  );
};

export default Login;
