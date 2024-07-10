import { TouchableOpacity } from 'react-native'
import React from 'react';
import { router } from 'expo-router';
import { Back } from '../ui/icons';

const BackComp = () => {
  return (
    <TouchableOpacity onPress={()=>{
        router.back();
    }}>
      <Back />
    </TouchableOpacity>
  )
}

export default BackComp;