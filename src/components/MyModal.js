import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyModal = ({
  isVisible,
  onConfirm,
  onCancel,
  icon,
  topUpResult,
  continueText,
  cancelText,
  navigation,
  modalType,
  onSuccess,
  onFailure,
}) => {
  if (!isVisible) {
    return null;
  }

  const handleConfirm = () => {
    if (modalType === 'confirmation') {
      onConfirm();
    } else if (modalType === 'result' && onSuccess) {
      onSuccess();
    }
  };

  const handleCancel = () => {
    if (modalType === 'confirmation') {
      onCancel();
    } else if (modalType === 'result' && onFailure) {
      onFailure();
    }
    navigation.navigate('TabMain');
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        {icon && <Icon name={icon} size={30} color={COLORS.black} />}
        <Text style={styles.modalText}>
          {modalType === 'confirmation'
            ? 'Apakah Anda yakin ingin Top Up?'
            : 'Top Up ' + topUpResult}
        </Text>
        <Text style={styles.resultText}>{topUpResult}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmButtonText}>
            {modalType === 'confirmation' ? continueText : 'Kembali'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>
            {modalType === 'confirmation' ? cancelText : 'Kembali ke Beranda'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    color: COLORS.black,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    backgroundColor: COLORS.gray,

    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: COLORS.gray,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  confirmButtonText: {
    color: COLORS.white,
    fontSize: 16,
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: COLORS.gray,
    fontSize: 16,
  },
});

export default MyModal;
