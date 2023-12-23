import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {Gap, Header, Input, MyButton} from '../../components';
import {COLORS} from '../../utils/Colors';
import {Images} from '../../assets/images';
import {navigate} from '../../routers/navigate';
import {clearToken} from '../../store/authSlice';
import {
  updateProfileWithToken,
  fetchUserProfileWithToken,
  selectUserProfile,
  updateProfileImageWithToken,
} from '../../store/userProfileSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');

  const userProfile = useSelector(selectUserProfile);

  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdateProfileImage = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        await dispatch(updateProfileImageWithToken(token));
        await dispatch(fetchUserProfileWithToken(token));
      }
    } catch (error) {
      console.error('Error updating profile image:', error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (error) {
      console.error('Error removing token from AsyncStorage:', error.message);
    }

    dispatch(clearToken());
    navigate('Login');
  };

  const handleSaveProfile = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      await dispatch(
        updateProfileWithToken({
          token,
          firstName: editedFirstName,
          lastName: editedLastName,
        }),
      );

      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        await dispatch(fetchUserProfileWithToken(token));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Header title={'Akun'} />
      <View style={styles.containerProfile}>
        <Image source={Images.Profile2} style={styles.profile} />
        <TouchableOpacity
          style={styles.pencilIconContainer}
          onPress={handleUpdateProfileImage}>
          <Icon name="pencil" size={14} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      <Gap height={10} />
      <Text style={styles.nama}>
        {userProfile?.first_name} {userProfile?.last_name}
      </Text>
      <Gap height={10} />
      <Text style={styles.ket}>Email</Text>
      <Input
        iconName={'at'}
        placeholder={userProfile?.email}
        editable={false}
        style={styles.inputInactive}
      />
      <Gap height={10} />
      <Text style={styles.ket}>Nama Depan</Text>
      <Input
        iconName={'user'}
        placeholder={userProfile?.first_name}
        editable={isEditing}
        onChangeText={text => setEditedFirstName(text)}
        value={editedFirstName}
        style={isEditing ? styles.inputActive : styles.inputInactive}
      />
      <Gap height={10} />
      <Text style={styles.ket}>Nama Belakang</Text>
      <Input
        iconName={'user'}
        placeholder={userProfile?.last_name}
        editable={isEditing}
        onChangeText={text => setEditedLastName(text)}
        value={editedLastName}
        style={isEditing ? styles.inputActive : styles.inputInactive}
      />
      <Gap height={40} />
      {isEditing ? (
        <>
          <MyButton
            title={'Simpan'}
            bgColor={COLORS.red}
            onPress={handleSaveProfile}
          />
          <Gap height={20} />
        </>
      ) : (
        <MyButton
          title={'Edit Profile'}
          bgColor={COLORS.red}
          onPress={handleEditPress}
        />
      )}
      <Gap height={20} />
      <MyButton
        title={isEditing ? 'Batalkan' : 'LogOut'}
        onPress={isEditing ? handleEditPress : handleLogout}
      />
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
