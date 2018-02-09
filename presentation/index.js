// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        {/* intro slide */}
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Array Methods
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            erin fox
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1}>
            @erinfoox
          </Text>
        </Slide>
        {/* What i'll be explaining */}
        <Slide bgColor="primary">
          <Heading size={1} textColor="secondary">
            What is an Array Method?
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} textColor="secondary">
            Why use an Array Method?
          </Heading>
        </Slide>
        {/* .map method */}
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            .map
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image
            height={200}
            width={425}
            src={require('../assets/array-example.jpg')}
          />
          <Image src={require('../assets/map-examples.jpg')} />
        </Slide>
        {/* .filter method */}
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            .filter
          </Heading>
        </Slide>
        <Slide>
          <Image
            height={200}
            width={425}
            src={require('../assets/array-example.jpg')}
          />
          <Image
            height={150}
            width={550}
            src={require('../assets/filter-examples.jpg')}
          />
        </Slide>
        {/* .find method */}
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            .find
          </Heading>
        </Slide>
        <Slide>
          <Image
            height={200}
            width={425}
            src={require('../assets/array-example.jpg')}
          />
          <Image
            height={200}
            width={520}
            src={require('../assets/find-examples.jpg')}
          />
        </Slide>
        {/* .reduce method */}
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            .reduce
          </Heading>
        </Slide>
        <Slide>
          <Image
            height={300}
            width={200}
            src={require('../assets/reduce-array-example.jpg')}
          />
          <Image
            height={200}
            width={700}
            src={require('../assets/reduce-examples.jpg')}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            ['hip','hip']
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
