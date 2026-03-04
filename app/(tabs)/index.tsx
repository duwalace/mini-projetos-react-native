import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '@/components/Button';

export default function HomeScreen() {
  // --- ESTADOS (A Memória da Calculadora) ---
  const [displayValue, setDisplayValue] = useState('0'); // O que aparece na tela
  const [operator, setOperator] = useState<string | null>(null); // Símbolo (+, -, etc)
  const [firstValue, setFirstValue] = useState<string>(''); // Primeiro número digitado
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false); // Aguardando próximo número?

  // --- FUNÇÃO 1: Digitar Números ---
  function handleNumberInput(num: string) {
    if (waitingForSecondValue) {
      setDisplayValue(num); // Se estava esperando, substitui o valor
      setWaitingForSecondValue(false);
    } else {
      // Se era 0, substitui, senão concatena (ex: "1" + "2" = "12")
      setDisplayValue(prev => (prev === '0' ? num : prev + num));
    }
  }

  // --- FUNÇÃO 2: Operações Matematicas ---
  function calculate(v1: number, v2: number, op: string) {
    switch (op) {
      case '+': return v1 + v2;
      case '-': return v1 - v2;
      case '*': return v1 * v2;
      case '/': return v1 / v2;
      default: return v2;
    }
  }

  // --- FUNÇÃO 3: Gerenciar Cliques de Operação ---
  function handleOperation(op: string) {
    if (op === 'C') { // Limpar tudo
      setDisplayValue('0');
      setOperator(null);
      setFirstValue('');
      setWaitingForSecondValue(false);
      return;
    }

    if (op === '=') { // Resultado
      if (!operator || !firstValue) return;
      const result = calculate(parseFloat(firstValue), parseFloat(displayValue), operator);
      setDisplayValue(String(result));
      setOperator(null);
      setFirstValue('');
      setWaitingForSecondValue(true);
      return;
    }

    // Se já tiver uma operação e clicar em outra (ex: 2 + 2 + ...)
    if (operator && !waitingForSecondValue) {
      const result = calculate(parseFloat(firstValue), parseFloat(displayValue), operator);
      setDisplayValue(String(result));
      setFirstValue(String(result));
    } else {
      setFirstValue(displayValue);
    }
    
    setOperator(op); // Salva qual operação foi clicada
    setWaitingForSecondValue(true); // Prepara para limpar a tela no próximo número
  }

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        {/* Mostra o valor do estado na tela */}
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Button label="7" onPress={() => handleNumberInput('7')} />
          <Button label="8" onPress={() => handleNumberInput('8')} />
          <Button label="9" onPress={() => handleNumberInput('9')} />
          <Button 
            label="/" 
            onPress={() => handleOperation('/')} 
            isOperation 
            isSelected={operator === '/'} // Pinta de branco se selecionado
          />
        </View>
        <View style={styles.row}>
          <Button label="4" onPress={() => handleNumberInput('4')} />
          <Button label="5" onPress={() => handleNumberInput('5')} />
          <Button label="6" onPress={() => handleNumberInput('6')} />
          <Button 
            label="*" 
            onPress={() => handleOperation('*')} 
            isOperation 
            isSelected={operator === '*'}
          />
        </View>
        <View style={styles.row}>
          <Button label="1" onPress={() => handleNumberInput('1')} />
          <Button label="2" onPress={() => handleNumberInput('2')} />
          <Button label="3" onPress={() => handleNumberInput('3')} />
          <Button 
            label="-" 
            onPress={() => handleOperation('-')} 
            isOperation 
            isSelected={operator === '-'}
          />
        </View>
        <View style={styles.row}>
          <Button label="C" onPress={() => handleOperation('C')} isOperation />
          <Button label="0" onPress={() => handleNumberInput('0')} />
          <Button label="=" onPress={() => handleOperation('=')} isOperation />
          <Button 
            label="+" 
            onPress={() => handleOperation('+')} 
            isOperation 
            isSelected={operator === '+'}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    marginBottom: 20,
  },
  displayText: {
    fontSize: 70,
    color: '#fff',
    fontWeight: '300',
  },
  buttonsContainer: {
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});