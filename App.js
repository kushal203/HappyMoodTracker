import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '😢', label: 'Sad' },
    { emoji: '😡', label: 'Angry' },
  ];

  const handleSubmit = () => {
    if (selectedMood) {
      Alert.alert('Mood Submitted', `You're feeling: ${selectedMood}`);
      setSelectedMood(null); // Reset mood
    } else {
      Alert.alert('No Mood Selected', 'Please select a mood before submitting.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌞 How are you feeling today?</Text>
      <View style={styles.emojiContainer}>
        {moods.map((mood) => (
          <TouchableOpacity
            key={mood.label}
            onPress={() => setSelectedMood(mood.label)}
            style={[
              styles.emojiButton,
              selectedMood === mood.label && styles.selectedEmoji,
            ]}
          >
            <Text style={styles.emoji}>{mood.emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitText}>Submit Mood</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  emojiContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  emojiButton: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  selectedEmoji: {
    borderColor: '#007bff',
    backgroundColor: '#e0f0ff',
  },
  emoji: {
    fontSize: 40,
  },
  submitButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
  },
});
