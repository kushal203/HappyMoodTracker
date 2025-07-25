import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = ['😄', '😐', '😢', '😠'];

  const handleSubmit = () => {
    if (selectedMood) {
      Alert.alert("Mood Submitted", `You're feeling: ${selectedMood}`);
      setSelectedMood(null);
    } else {
      Alert.alert("No Mood Selected", "Please select a mood before submitting.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you feeling today?</Text>
      <View style={styles.emojiContainer}>
        {moods.map((mood, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedMood(mood)}
            style={[
              styles.emojiButton,
              selectedMood === mood && styles.selectedEmoji,
            ]}
          >
            <Text style={styles.emoji}>{mood}</Text>
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
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold', textAlign: 'center' },
  emojiContainer: { flexDirection: 'row', marginBottom: 30 },
  emojiButton: { margin: 10, padding: 10, borderRadius: 10, borderWidth: 2, borderColor: '#ccc' },
  selectedEmoji: { borderColor: '#007bff', backgroundColor: '#e0f0ff' },
  emoji: { fontSize: 40 },
  submitButton: { backgroundColor: '#007bff', padding: 15, borderRadius: 10 },
  submitText: { color: '#fff', fontSize: 18 },
});
