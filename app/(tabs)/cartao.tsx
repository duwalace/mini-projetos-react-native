import { View, Text, StyleSheet } from 'react-native';
import { InfoItem } from '@/components/infoItem';

export default function Home() {
  return (
    <View style={styles.container}>
      
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>EW</Text>
      </View>

      <Text style={styles.nome}>Eduardo Walace</Text>

      <Text style={styles.profissao}>Dev Mobile</Text>

      <View style={styles.divisor}/>

      <View style={styles.infoArea}>
        <InfoItem
          icone="📧"
          rotulo="E-mail"
          valor="eduardowalace@gmail.com"
        />

        <InfoItem
          icone="📱"
          rotulo="Telefone"
          valor="(12) 99738-5273"
        />
        <InfoItem
          icone="📍"
          rotulo="Localização"
          valor="Taubaté-SP"
        />
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
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ff7a00',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    elevation: 5,
    shadowColor: '#ff7a00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profissao: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 20,
    fontWeight: '500',
  },
  divisor: {
    backgroundColor: '#333333',
    width: '80%',
    height: 1,
    marginVertical: 15,
  },
  infoArea: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
  },
});