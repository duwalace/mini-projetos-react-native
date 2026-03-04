import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BotaoPonto } from './BotaoPonto';

type PainelTimeProps = {
  nomeTime: string;
  placar: number;
  estaGanhando: boolean;
  onPonto: (valor: number) => void;
  onAnular: () => void;
};

export function PainelTime({ nomeTime, placar, estaGanhando, onPonto, onAnular }: PainelTimeProps) {
  return (
    // Se estiver ganhando, aplica o estilo extra de destaque
    <View style={[styles.container, estaGanhando && styles.destaqueGanhador]}>
      <Text style={styles.nome}>{nomeTime}</Text>
      <Text style={styles.placar}>{placar}</Text>

      <View style={styles.linhaBotoes}>
        <BotaoPonto valor={1} onPress={() => onPonto(1)} />
        <BotaoPonto valor={2} onPress={() => onPonto(2)} />
        <BotaoPonto valor={3} onPress={() => onPonto(3)} />
      </View>

      <TouchableOpacity style={styles.botaoAnular} onPress={onAnular}>
        <Text style={styles.textoAnular}>↩ Anular Último</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  destaqueGanhador: {
    borderColor: '#ff7a00',
    backgroundColor: '#2a2a2a',
  },
  nome: {
    color: '#aaa',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  placar: {
    color: '#fff',
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  linhaBotoes: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  botaoAnular: {
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  textoAnular: {
    color: '#fff',
    fontWeight: 'bold',
  },
});