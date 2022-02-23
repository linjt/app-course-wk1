import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { YellowBox } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>鍵盤的空白鍵死掉了了了了</Text>
      <Text style={styles.textA}>110919040 林柔彤</Text>
      <Text style={styles.textB}>好快樂 瘋掉</Text>
      <Image style={styles.center} source={require('./assets/aaa.png')} />
      <Text style={styles.redText}>breaking news：右邊的shift 也掛了 :(</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#58FF21',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redText:{
    color:  '#FF0000',
    fontSize: 30,
    marginLeft:0,
    textAlign:'center',
  },
  center:{
    width:300,height:300,
    margin:50,
  },
  textA:{
    zIndex:9,
    position:'absolute',
    flexDirection:'row-reverse',
    top:280,
    right:20,
    height:1000,
    color:'#FF2BFE',
    fontWeight:"bold",
  },
  textB:{
    zIndex:9,
    position:'absolute',
    flexDirection:'row-reverse',
    top:280,
    left:20,
    height:1000,
    color:'#FF2BFE',
    fontWeight:"bold",
  }
});
