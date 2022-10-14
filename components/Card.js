import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Image } from "react-native";
import { Block, Text, theme } from "galio-framework";
class Card extends React.Component {
  render() {
    const { navigation, item, horizontal, full, style, imageStyle } =
      this.props;

    const imageStyles = [styles.image, imageStyle];
    const cardContainer = [styles.card, styles.shadow, style];

    return (
      <Block row={horizontal} card flex style={cardContainer}>
        <Block center style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={imageStyles} />
        </Block>
        <Block flex space="between">
          <Text h4 style={styles.cardTitle}>
            {item.title}
          </Text>
        </Block>
      </Block>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 2,
    minHeight: 320,
    minWidth: 280,
    marginBottom: 16,
  },
  cardTitle: {
    flex: 1,
    flexWrap: "wrap",
    paddingBottom: 5,
    textAlign: "center",
    color: "#4F398D",
  },
  imageContainer: {
    borderBottomWidth: 0.5,
    borderColor: "gray",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  image: {
    height: 260,
    width: 260,
    margin: 5,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    borderRadius: 15,
  },
});

export default withNavigation(Card);