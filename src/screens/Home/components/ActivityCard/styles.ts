import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  activityItem: {
    flex: 1,
    flexDirection:'row',
    color:'#ffff',
    backgroundColor: '#111422',
    padding: 8,
    fontSize: 20,
    alignItems:'center',
    justifyContent:'space-between',
    width:'96%',
    marginBottom: 8,
    borderRadius: 8
  },

  activityText: {
    // display: 'flex',
    color:'#ffff',
    padding: 8,
    fontSize: 20,
    alignItems:'center',
    justifyContent:'space-between',
    width:'90%',
  },
  removeButton:{
    width: 32,
    height: 32
  }
})