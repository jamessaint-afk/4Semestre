import { Text, View } from 'react-native';
import { HeaderStyles } from './HeaderStyles';

function Header() {
  return (
    <View style={HeaderStyles.header}>
      <Text style={HeaderStyles.headerTitle}>React List</Text>
    </View>
  );
}
