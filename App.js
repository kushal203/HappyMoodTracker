
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [mood, setMood] = useState(null);

  const moods = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '😢', label: 'Sad' },
    { emoji: '😡', label: 'Angry' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🌞 Welcome to Happy</Text>
      <Text style={styles.subHeader}>How are you feeling today?</Text>

      <View style={styles.moodContainer}>
        {moods.map((m) => (
          <TouchableOpacity
            key={m.label}
            style={styles.moodButton}
            onPress={() => setMood(m.label)}>
            <Text style={styles.emoji}>{m.emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {mood && (
        <Text style={styles.thankYou}>You selected: {mood}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f5f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 20,
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  moodButton: {
    marginHorizontal: 10,
  },
  emoji: {
    fontSize: 40,
  },
  thankYou: {
    fontSize: 20,
    color: '#333',
    marginTop: 20,
  },
});
