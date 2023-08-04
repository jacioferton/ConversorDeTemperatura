import { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable,  TextInput, StatusBar } from 'react-native';

export default function App() {
  const [ valor, setValor ] = useState('')
  const [ texto1, setTexto1 ] = useState('')
  const [ texto2, setTexto2 ] = useState('')
  const KpC = Number(valor) - 273
  const KpF = (Number(valor) - 273) * 1.8 + 32
  const CpK = Number(valor) + 273
  const CpF = Number(valor) * 1.8 + 32
  const FpC = (Number(valor) - 32 ) / 1.8
  const FpK = (Number(valor) - 32 ) * 5/9 + 273

  function validadeC() {
    if (valor === '') {
      alert('Insira um valor válido!')
    } else {
      setTexto1(`Fahrenheit: ${CpF.toFixed(1)}º`)
      setTexto2(`Kelvin: ${CpK.toFixed(1)}º`)
      setValor('')
    }
  }
  function validadeF() {
    if (valor === '') {
      alert('Insira um valor válido!')
    } else {
      setTexto1(`Celsius: ${FpC.toFixed(1)}º`)
      setTexto2(`Kelvin: ${FpK.toFixed(1)}º`)
      setValor('')
    }
  }
  function validadeK() {
    if (valor === '') {
      alert('Insira um valor válido!')
    } else {
      setTexto1(`Celsius: ${KpC.toFixed(1)}º`)
      setTexto2(`Fahrenheit: ${KpF.toFixed(1)}º`)
      setValor('')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <View style={styles.principal}>
        <Text style={styles.titulo}>Conversor de Temperatura</Text>
        <TextInput
          style={styles.formulario}
          placeholder='Insira o valor de uma temperatura'
          keyboardType='decimal-pad'
          placeholderTextColor={'#000000'}
          value={valor}
          onChangeText={(text)=>setValor(text)}
        />
        <Image
          source={require('./src/img/temperature.png')}
          style={styles.img}
          resizeMode='contain'
        />
        <View style={styles.retorno}>
          <Text style={styles.txt}>{texto1}</Text>
          <Text style={styles.txt}>{texto2}</Text>
        </View>
      </View>
      <View style={styles.barraInferior}>
        <Pressable style={styles.bordaBI} onPress={validadeC}>
          <Text style={styles.txtBarraInf}>
            Cº
          </Text>
        </Pressable>
        <Pressable style={styles.bordaBI} onPress={validadeF}>
          <Text style={styles.txtBarraInf}>
            Fº
          </Text>
        </Pressable>
        <Pressable style={styles.bordaBI} onPress={validadeK}>
          <Text style={styles.txtBarraInf}>
            Kº
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'space-between',
  },
  principal: {
    alignItems: 'center',
    backgroundColor: '#ff5555',
    flex: 1,
  },
  titulo: {
    fontSize: 46,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 12,
  },
  formulario: {
    backgroundColor: '#ff9999',
    height: 50,
    width: '70%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 16,
    marginVertical: 12
  },
  img: {
    height:250,
    left: -33,
    marginVertical: 12
  },
  retorno: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  barraInferior: {
    height: 75,
    backgroundColor: '#ff9999',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bordaBI:{
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  txtBarraInf: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
