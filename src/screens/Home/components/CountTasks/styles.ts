
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  countTasks: {
    // flex: 1,
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: '#1c1e23',
    borderRadius: 8,
    marginBottom: 16,
  },
  totalAmount: {
    // textAlign: 'left',
    color: '#a4842b',
    fontSize: 20,
    fontFamily: 'boogalooRegular',


  },
  doneAmount: {
    // textAlign: 'left',
    color: '#47b167',
    fontSize: 20,
    fontFamily: 'boogalooRegular',

  },
})
