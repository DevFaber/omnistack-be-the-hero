import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  header_text: {
    fontSize: 15,
    color: '#737380',
  },

  header_text_bold: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    lineHeight: 14,
    color: '#737380',
    marginLeft: 2,
  },

  incident_container: {
    marginTop: 32,
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
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
    marginBottom: 24,
    color: '#737380',
  },
  detail_button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detail_button_text: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
