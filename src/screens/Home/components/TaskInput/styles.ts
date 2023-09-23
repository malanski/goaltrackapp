import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 32,
    marginBottom: 40
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginRight: 12
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#083f2a',

  },

  buttonAdd: {
    opacity: 0.5,
    color: '#ffff',
    fontSize: 32,
  },
})
