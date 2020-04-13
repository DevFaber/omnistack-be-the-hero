import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  incidents: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 24,
  },

  incident_property: {
    fontSize: 14,
    color: '#41414D',
    fontWeight: 'bold',
  },
  incident_value: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },
  incident_name: {
    fontSize: 14,
    color: '#41414D',
    fontWeight: 'bold',
  },
  incident_name_value: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },
  incident_title_value: {
    fontSize: 14,
    color: '#41414D',
    fontWeight: 'bold',
  },
  incident_value_save: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 4,
    color: '#737380',
  },

  contact_box: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },
  hero_title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30,
  },
  hero_description: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16,
  },
  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    backgroundColor: '#E02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  action_text: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
