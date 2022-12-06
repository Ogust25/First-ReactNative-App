import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.log(e);
  }
}


export const getData = async ( key ) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        return value
      }
    } catch(e) {
        console.log(e);
    }
}


export const removeValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
        console.log(e);
    }
  
    console.log('Done.')
}


export const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      console.log(e);
    }
  
    console.log('Done.')
}