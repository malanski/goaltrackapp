import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  activityList: {
    // width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent:'space-between',
    paddingBottom: 48
  },
    emptyList: {
    paddingVertical: 48,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  emptyListMessage: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  }
});
