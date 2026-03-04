import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { BotaoContador } from '@/components/BotaoContador';

export default function App() {
  // Estado que guarda o valor do contador (começa em 0)
  const [contagem, setContagem] = useState(0);

  // Funções de ação
  const incrementar = () => setContagem(contagem + 1);
  
  const decrementar = () => {
    // Regra: Não pode ser menor que zero
    if (contagem > 0) {
      setContagem(contagem - 1);
    }
  };

  const zerar = () => setContagem(0);

  // Regra de cores do número
  let corDoNumero = '#ffffff';
  if (contagem === 0) {
    corDoNumero = 'gray';
  } else if (contagem >= 10) {
    corDoNumero = '#1db954';
  }

  return (
    <View style={styles.container}>

      <Text style={[styles.numero, { color: corDoNumero }]}>
        {contagem}
      </Text>

      <View style={styles.areaBotoes}>
        <View style={styles.linha}>
          <BotaoContador label="-" onPress={decrementar} tipo="decrementar" />
          <BotaoContador label="+" onPress={incrementar} tipo="incrementar" />
        </View>
        
        <View style={styles.linha}>
          <BotaoContador label="Zerar" onPress={zerar} tipo="zerar" />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numero: {
    fontSize: 120,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  areaBotoes: {
    width: '70%',
    maxWidth: 300,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  }
});