import React from 'react';
import { View, Text, Image} from 'react-native';
 
function App(){
  return(
    <View>
      <Text>Olá Turma!</Text>

      <Image
          source={{ uri: 'https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg'}}
          style={{ width: 300, height: 300}}
        />

    </View>
  )
}
 
export default App;