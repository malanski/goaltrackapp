import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    justifyContent:'space-between',
    paddingTop: 480,
    paddingBottom: 32,
    // position: 'absolute',
    // bottom: 0
  },

  removeChecked: {
    color: '#bb5525',
    backgroundColor: '#1c1e23',
    textTransform:'uppercase',
    borderRadius: 8,
    fontSize: 16,
    padding: 16,

  },
  signature: {
    paddingTop: 32,
    color: '#fff',
    fontSize: 16
  },

  portfolioLink: {
    paddingTop: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    
  },
  link: {
    color: '#fff',
    fontSize: 24

  }
})