import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import logo from '../../../assets/logo.png';

import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDatail(incident) {
    navigation.navigate('Details', {incident});
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }
    if (total > 0 && incidents.length === total) {
      return;
    }
    setLoading(true);

    const response = await api.get('incidents', {params: {page}});

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['X-Total-Count']);
    setPage(page + 1);
    setLoading(false);
  }
  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.header_text}>
          Total de <Text style={styles.header_text_bold}>{total} casos</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia de alguém
      </Text>
      <FlatList
        data={incidents}
        style={styles.incident_container}
        keyExtractor={(incident) => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({item: incident}) => (
          <View style={styles.incident}>
            <Text style={styles.incident_property}>ONG:</Text>
            <Text style={styles.incident_value}>{incident.name}</Text>

            <Text style={styles.incident_name}>CASO:</Text>
            <Text style={styles.incident_name_value}>{incident.title}</Text>

            <Text style={styles.incident_title_value}>VALOR</Text>
            <Text style={styles.incident_value_save}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detail_button}
              onPress={() => navigateToDatail(incident)}>
              <Text style={styles.detail_button_text}>Ver mais detalhes</Text>
              <Icon name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
