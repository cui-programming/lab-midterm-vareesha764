import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';
import { Button } from '../ui';

export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);

  const increment = (id) => {
    setItems((prevItems) =>
      prevItems.map((it) =>
        it.id === id ? { ...it, count: it.count + 1 } : it
      )
    );
  };

  const decrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((it) =>
        it.id === id && it.count > 0 ? { ...it, count: it.count - 1 } : it
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.counter}>{item.count}</Text>
      <View style={styles.buttonRow}>
        <Button onPress={() => decrement(item.id)}>-</Button>
        <Button onPress={() => increment(item.id)}>+</Button>
      </View>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
    </View>
  );
}
