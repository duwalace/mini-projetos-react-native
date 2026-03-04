import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { PainelTime } from '@/components/PainelTime';

export default function TelaPlacar() {
  // Estado: arrays com o histórico de pontos de cada time
  const [historicoA, setHistoricoA] = useState<number[]>([]);
  const [historicoB, setHistoricoB] = useState<number[]>([]);

  // Calcula o placar somando tudo com reduce
  const placarA = historicoA.reduce((acc, val) => acc + val, 0);
  const placarB = historicoB.reduce((acc, val) => acc + val, 0);

  // Verifica quem está ganhando
  const timeAGanhando = placarA > placarB;
  const timeBGanhando = placarB > placarA;

  // Funções para adicionar pontos
  const adicionarPontoA = (valor: number) => setHistoricoA(prev => [...prev, valor]);
  const adicionarPontoB = (valor: number) => setHistoricoB(prev => [...prev, valor]);

  // Funções para anular o último ponto com slice(0, -1)
  const anularA = () => setHistoricoA(prev => prev.slice(0, -1));
  const anularB = () => setHistoricoB(prev => prev.slice(0, -1));

  // Função para resetar tudo
  const novoJogo = () => {
    setHistoricoA([]);
    setHistoricoB([]);
  };

  return (
    <View style={styles.container}>

      <View style={styles.areaPlacar}>
        <PainelTime 
          nomeTime="Time A" 
          placar={placarA} 
          estaGanhando={timeAGanhando} 
          onPonto={adicionarPontoA} 
          onAnular={anularA} 
        />
        
        <PainelTime 
          nomeTime="Time B" 
          placar={placarB} 
          estaGanhando={timeBGanhando} 
          onPonto={adicionarPontoB} 
          onAnular={anularB} 
        />
      </View>

      <TouchableOpacity style={styles.botaoNovoJogo} onPress={novoJogo}>
        <Text style={styles.textoNovoJogo}>Zerar / Novo Jogo</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  areaPlacar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  botaoNovoJogo: {
    backgroundColor: '#e53935',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 5,
  },
  textoNovoJogo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});