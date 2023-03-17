import {ColoredName} from 'components/coloredName';
import {DepartureTime} from 'components/departureTime';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {STOP_EVENT_CARD_HEIGHT} from 'shared/constants';
import {theme} from 'shared/theme';

import {StopEventCardProps} from './StopEventCard.types';

const StopEventCard = (props: StopEventCardProps) => {
  const {departureTimePlanned, transportation} = props;
  const {destination, description, disassembledName, iconId} = transportation;

  return (
    <View style={styles.container}>
      <DepartureTime time={departureTimePlanned} style={styles.time} />
      <View style={styles.details}>
        <View style={styles.header}>
          <ColoredName
            name={disassembledName}
            iconId={iconId}
            style={styles.name}
          />
          <Text style={styles.destination}>{destination.name}</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default StopEventCard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    height: STOP_EVENT_CARD_HEIGHT,
  },
  time: {
    fontSize: 16,
    width: 60,
    height: '100%',
    color: theme.primary,
  },
  details: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.white,
    textAlign: 'center',
    width: 60,
    borderRadius: 4,
    overflow: 'hidden',
  },
  destination: {
    fontSize: 16,
    color: theme.primary,
    textAlign: 'center',
    paddingLeft: 5,
  },
  description: {
    fontSize: 12,
    color: theme.grey_3,
    paddingVertical: 2,
  },
});
