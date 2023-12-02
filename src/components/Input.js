import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../utils/Colors';

const Input = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  iconName,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleToggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View
      style={[
        styles.container,
        {borderColor: isFocused ? COLORS.red : COLORS.gray},
      ]}>
      {iconName && (
        <Icon
          name={iconName}
          size={20}
          color={isFocused ? COLORS.red : 'black'}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[styles.input, {color: COLORS.black}]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        secureTextEntry={secureTextEntry ? !showPassword : false}
        value={value}
        onChangeText={onChangeText}
        textContentType={secureTextEntry ? 'password' : 'none'}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={handleToggleVisibility} style={styles.icon}>
          <Icon
            name={showPassword ? 'eye-slash' : 'eye'}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 5,
    fontSize: 16,
  },
});

export default Input;
