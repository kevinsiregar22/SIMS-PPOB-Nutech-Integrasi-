import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Gap, Header, Input, MyButton} from '../../components';
import {COLORS} from '../../utils/Colors';
import {Images} from '../../assets/images';
import {navigate} from '../../routers/navigate';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

  const renderEditButton = () => {
    if (isEditing) {
      return (
        <MyButton
          title={'Simpan'}
          bgColor={COLORS.red}
          onPress={handleEditPress}
        />
      );
    } else {
      return (
        <MyButton
          title={'Edit Profile'}
          bgColor={COLORS.red}
          onPress={handleEditPress}
        />
      );
    }
  };

  const renderLogoutButton = () => {
    if (isEditing) {
      return <MyButton title={'Batalkan'} onPress={handleEditPress} />;
    } else {
      return <MyButton title={'LogOut'} onPress={() => navigate('Login')} />;
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Akun'} />
      <View style={styles.containerProfile}>
        <Image source={Images.Profile2} style={styles.profile} />
        <TouchableOpacity style={styles.pencilIconContainer}>
          <Icon name="pencil" size={14} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      <Gap height={10} />
      <Text style={styles.nama}>Simon Kevin Siregar</Text>
      <Gap height={10} />
      <Text style={styles.ket}>Email</Text>
      <Input
        iconName={'at'}
        placeholder={'Email'}
        editable={isEditing}
        style={isEditing ? styles.inputActive : styles.inputInactive}
      />
      <Gap height={10} />
      <Text style={styles.ket}>Nama Depan</Text>
      <Input
        iconName={'user'}
        placeholder={'Nama depan'}
        editable={isEditing}
        style={isEditing ? styles.inputActive : styles.inputInactive}
      />
      <Gap height={10} />
      <Text style={styles.ket}>Nama Belakang</Text>
      <Input
        iconName={'user'}
        placeholder={'Nama Belakang'}
        editable={isEditing}
        style={isEditing ? styles.inputActive : styles.inputInactive}
      />
      <Gap height={40} />
      {renderEditButton()}
      <Gap height={20} />
      {renderLogoutButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: COLORS.white,
  },
  containerProfile: {
    alignItems: 'center',
    position: 'relative',
  },
  profile: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
  },
  pencilIconContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    left: 210,
    backgroundColor: COLORS.white,
    padding: 6,
    borderRadius: 15,
    marginLeft: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  nama: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  ket: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  inputActive: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 5,
    padding: 10,
  },
  inputInactive: {
    backgroundColor: COLORS.gray,
    borderRadius: 5,
    padding: 10,
  },
});

export default ProfileScreen;
