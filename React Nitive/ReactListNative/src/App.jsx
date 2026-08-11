import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles';
import Header from './components/header/Header';
import FormTask from './components/formtask/FormTaskStyles';


function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <FormTask />
    <View style={styles.container}>
      <Text>Bem Vindo ao React List</Text>
      <StatusBar style='auto'/>
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;