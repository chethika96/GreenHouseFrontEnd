import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Replace with your login logic
    console.log('Logging in with username:', username, 'and password:', password);
  };

  const handleRegister = () => {
    // Replace with your register logic
    console.log('Registering with username:', username, 'and password:', password);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#000000', '#333333']} // Adjust gradient colors as needed
        start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} // Gradient from top to bottom
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={{ alignItems: 'center', paddingHorizontal: 20, paddingTop: 80 }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 20 }}>
              スマート{"\n"}グリーンハウス
            </Text>
            <View style={{ width: '80%', marginBottom: 10 }}>
              <TextInput
                placeholder="ユーザー名"
                placeholderTextColor="#ffffff"
                style={{
                  backgroundColor: '#333333',
                  borderRadius: 10,
                  padding: 15,
                  color: '#ffffff',
                }}
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={{ width: '80%', marginBottom: 20 }}>
              <TextInput
                placeholder="パスワード"
                placeholderTextColor="#ffffff"
                secureTextEntry
                style={{
                  backgroundColor: '#333333',
                  borderRadius: 10,
                  padding: 15,
                  color: '#ffffff',
                }}
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <TouchableOpacity
              onPress={handleLogin}
              style={{
                width: '80%',
                backgroundColor: '#000000',
                borderRadius: 10,
                padding: 15,
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>ログイン</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleRegister}
              style={{
                width: '80%',
                backgroundColor: '#000000',
                borderRadius: 10,
                padding: 15,
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>新規登録</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}
