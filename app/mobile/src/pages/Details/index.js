import React from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailCompose from 'react-native-mail-compose';

import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../../../assets/logo.png';
import styles from './styles';

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;

  function navigateBack() {
    navigation.goBack();
  }

  async function sendMail() {
    const message =
      'Gostaria de doar alguns frascos de Alcool em gel 70% que comprei em grande quantidade e receio não ser mais necessário aqui';

    try {
      await MailCompose.send({
        toRecipients: 'cuiaba.tecnica@porter.com',
        subject: 'Doação',
        text: message,
      });
    } catch (error) {
      alert.alert('Houve um erro ao processar seu email!');
    }
  }

  function sendWhatsapp() {
    const phone = '065999584097';
    const message = 'Doação de fundos para coso do COVID19';
    Linking.openURL(`whatsapp://send?phone=${phone}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />

        <TouchableOpacity onPress={navigateBack}>
          <Icon name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incidents}>
        <Text style={styles.incident_property}>ONG:</Text>
        <Text style={styles.incident_value}>
          {incident.name} de {incident.city}/{incident.uf}
        </Text>

        <Text style={styles.incident_name}>CASO:</Text>
        <Text style={styles.incident_name_value}>{incident.title}</Text>

        <Text style={styles.incident_title_value}>VALOR</Text>
        <Text style={styles.incident_value_save}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contact_box}>
        <Text style={styles.hero_title}>Salve o dia!</Text>
        <Text style={styles.hero_title}>Seja o herói desse caso. </Text>

        <Text style={styles.hero_description}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.action_text}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.action_text}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
