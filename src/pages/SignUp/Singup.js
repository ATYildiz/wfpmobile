import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from '../SignUp/Singup.style';
import {Formik} from 'formik';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Singup = ({navigation}) => {
  function HandleGoBack() {
    navigation.goBack();
  }

  const initialFormValues = {
    usermail: '',
    password: '',
    rePassword: '',
  };
  function HandleSingup(formValues) {
    console.log(formValues);
  }

  return (
    <SafeAreaView>
      <Text style={styles.header}>Watch for Points'e Hoşgeldiniz!</Text>
      <Formik initialValues={initialFormValues} onSubmit={HandleSingup}>
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
            <Input
              onType={handleChange('rePassword')}
              value={values.rePassword}
              placeholder="Şifrenizi Tekrar Giriniz..."
            />
            <Button text="Kayıt Ol" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text="Geri Dön" style="secondary" onPress={HandleGoBack} />
    </SafeAreaView>
  );
};

export default Singup;
