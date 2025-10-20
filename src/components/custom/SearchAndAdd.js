import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../../styles/styles';
import { TextInput, Button } from '../ui';
import { initialAzkaar } from '../../data/azkaar';

export default function SearchAndAdd() {
  const [items, setItems] = useState(initialAzkaar);
  const [searchText, setSearchText] = useState('');
  const [newPhrase, setNewPhrase] = useState('');

  const filteredItems = items.filter((it) =>
    it.phrase.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAdd = () => {
    const trimmed = newPhrase.trim();
    if (!trimmed) {
      alert('Please enter a phrase.');
      return;
    }

    const exists = items.some(
      (it) => it.phrase.toLowerCase() === trimmed.toLowerCase()
    );
    if (exists) {
      alert('This zikr already exists.');
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      phrase: trimmed,
      count: 0,
    };

    setItems([...items, newItem]);
    setNewPhrase('');
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Search & Add Zikr</Text>

      <TextInput
        placeholder="Search zikr..."
        value={searchText}
        onChangeText={setSearchText}
        style={styles.textInput}
      />

      <View style={styles.addContainer}>
        <TextInput
          placeholder="Add new zikr..."
          value={newPhrase}
          onChangeText={setNewPhrase}
          style={styles.addInput}
        />
        <Button style={styles.button} onPress={handleAdd}>
          Add
        </Button>
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(it) => it.id}
        renderItem={({ item }) => (
          <Text style={styles.listItemText}>
            {item.phrase} ({item.count})
          </Text>
        )}
      />
    </View>
  );
}
