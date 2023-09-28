import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  activityItemStyle: {
    flex: 1,
    flexDirection:'row',
    color:'#ffff',
    backgroundColor: '#111422',
    fontSize: 20,
    alignItems:'center',
    justifyContent:'space-between',
    // minWidth: 290,
    // minWidth: 290,
    // maxWidth: 1440,
    width: 375,
    // height: 'auto',
    marginBottom: 8,
    gap: 16,
    marginHorizontal: 'auto',
    borderRadius: 8,
    
    // flexWrap: 'wrap'
  },

  activityText: {
    display: 'flex',
    alignSelf: 'flex-start',
    flex: 1,
    // flexWrap: 'wrap',
    // height: 'auto',
    padding: 8,

    color:'#ffff',
    // padding: 8,
    fontSize: 20,
    // alignItems:'center',
    // justifyContent:'space-between',
    // width:'90%',
  },
  checkButton: {
    padding: 8,

  },
  removeButton:{
    // position: 'absolute',
    // right: 0,
    // width: 32,
    // height: 'auto',
    height: '100%',
    padding: 8,
    borderLeftColor:'#98a7b3',
    borderLeftWidth: 1, 
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
  }
})