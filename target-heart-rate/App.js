import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [LimitLow, setLimitLow] = useState(null);
  const [LimitHigh, setLimitHigh] = useState(null);

  /* Calculate the lower and upper limits of the target heart rate
  Calculation formula:
  Lower: (220-age) * 0.65
  Upper: (220-age) * 0.85
   */
  const calculateLimit = () => {
    const ageNumber = parseInt(age, 10);
    if (ageNumber > 0) {
      const lower = ((220 - ageNumber) * 0.65).toFixed(0);
      const upper = ((220 - ageNumber) * 0.85).toFixed(0);
      setLimitLow(lower);
      setLimitHigh(upper);
    } else {
      alert('Please enter a valid age');
    }
  }

  return (
      <View style={styles.container}>
        <Text style={styles.ageText}>Age</Text>
        <TextInput
            style={styles.input}
            onChangeText={text => setAge(text)}
            value={age}
            keyboardType="numeric"
        />
        <Text style={styles.limitsText}>Limits</Text>
        <Text>{LimitLow} - {LimitHigh}</Text>
        <Button
            title="Calculate"
            onPress={calculateLimit}
        />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ageText: {
    fontSize: 30,
    marginBottom: 10,
  },
  limitsText: {
    fontSize: 30,
    marginTop: 10,
  },
  input: {
    height: 30,
    borderWidth: 1,
    width: '40%',
  },
});