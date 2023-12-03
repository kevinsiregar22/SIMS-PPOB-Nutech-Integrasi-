import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../utils/Colors';

const Input = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  size = 20,
  iconName,
  keyboardType,
  editable = true,
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
        !editable,
      ]}>
      {iconName && (
        <Icon
          name={iconName}
          size={size}
          color={isFocused ? COLORS.red : COLORS.black}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[styles.input, {color: COLORS.black}, !editable]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        secureTextEntry={secureTextEntry ? !showPassword : false}
        value={value}
        onChangeText={onChangeText}
        textContentType={secureTextEntry ? 'password' : 'none'}
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType={keyboardType}
        editable={editable}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={handleToggleVisibility}
          style={styles.icon}
          disabled={!editable}>
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
