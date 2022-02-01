/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import React, { Component, useState } from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
  Input,
  Menu,
  Search,
  Segment,
  Select,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { API, graphqlOperation } from 'aws-amplify';
import { listCitiesAutocomplete } from '../../graphql/queries';
import types from '../../constants/actionTypes';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBxGtRgInA5eKUzG3GsYgeu2Z7hhO2uptw';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const housingTypeoptions = [
  { key: 'all', value: 'all', text: 'All' },
  { key: 'sfh', value: 'sfh', text: 'Single Family', },
  { key: 'dpx', value: 'dpx', text: 'Duplex' },
  { key: 'twn', value: 'twn', text: 'Townhouse' }
];
const InputActions = () => {
  const [bookingDates, setBookingDates] = useState(null);
  const [selectedCity, setSelectedCity] = useState();
  const [citySuggestions, setCitySuggestions] = useState();
  const [numGuests, setNumGuests] = useState(1);
  const [housingType, setHousingType] = useState('Single Family');
  const onChangeBookingDates = (event, data) => {
    setBookingDates(data.value);
  }

  const onCityInput = async (e, i) => {
    const cities = await API.graphql({ query: listCitiesAutocomplete, variables: { query: { input: i.value, types: '(cities)', language: 'us-EN', key: GOOGLE_MAPS_API_KEY } } });
    if (!cities || !cities.data || !cities.data.listCitiesAutocomplete.predictions) {
      setCitySuggestions([]);
    }
    setCitySuggestions(cities.data.listCitiesAutocomplete.predictions);
  };
  const onCitySelect = (e, d) => {
    setSelectedCity(d.result.description);
  }

  const onSubmitForm = async (e, d) => {
    const { dispatch } = this.props;
    console.log('state', {bookingDates, selectedCity, numGuests, housingType});
    console.log('event', e);
    console.log('data', d);
    const checkInDate = new Date(bookingDates[0]).getTime();
    const checkOutDate = new Date(bookingDates[1]).getTime();
    
    dispatch({
      type: types.SEARCH_PROPERTIES_REQUEST,
      searchParams: {
        city: selectedCity.split(',')[0].trim(),
        checkIn: checkInDate,
        checkOut: checkOutDate,
        propertyType: housingType.trim(),
        guests: parseInt(numGuests)
      }
    });
  }
  return (
    <Input action>
      <Search
        placeholder='City...'
        onSearchChange={onCityInput}
        onResultSelect={onCitySelect}
        value={selectedCity}
        results={citySuggestions} style={{
          maxHeight: '50px',
          borderRadius: '0'
        }}
        style={{ backgroundColor: 'white' }} />
      <SemanticDatepicker
        placeholder="Dates"
        onChange={onChangeBookingDates}
        type='range'
        style={{
          minHeight: '50px',
          borderRadius: '0',
          backgroundColor: 'white'
        }} />
      <Select compact options={housingTypeoptions} defaultValue='sfh'
        onChange={(e, d) => setHousingType(d.value)}
        style={{
          maxHeight: '50px',
          paddingTop: '0',
          paddingBottom: '0'
        }} />
      <input placeholder='Guests'
        onChange={(e) => setNumGuests(e.target.value)}
        style={{ maxWidth: '50px' }} />
      <Button type='submit'
        onClick={onSubmitForm}>Search</Button>
    </Input>
  )
}

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Search Properties'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content="Find the property you need. Fast."
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <InputActions />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {
    citySuggestions: [{ description: 'hi' }]
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  onCityInput = async (input) => {
    const variables = {
      query: {
        input: input,
        types: '(cities)',
        language: 'us-EN',
        key: GOOGLE_MAPS_API_KEY
      }
    };
    const cities = await API.graphql(graphqlOperation(variables));
    if (!cities || !cities.data || !cities.data.items) {
      this.setState()
    }
    this.setState({
      citySuggestions: cities.data.listCitiesAutocomplete.items.map((x) => {
        return { description: x };
      })
    });
  }


  render() {
    // const { children } = this.props
    const { searchResults, handleNewSearchResults, handleClearSearchResults } = this.props;
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <HomepageHeading />
          </Segment>
        </Visibility>
        {/*children*/}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    // const { children } = this.props
    const { searchResults, handleNewSearchResults, handleClearSearchResults } = this.props;
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {/*children*/}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ searchResults, handleNewSearchResults, handleClearSearchResults }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer searchResults handleNewSearchResults handleClearSearchResults></DesktopContainer>
    <MobileContainer searchResults handleNewSearchResults handleClearSearchResults></MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export const PropertySearchComponent = ({ searchResults, handleNewSearchResults, handleClearSearchResults }) => (
  <ResponsiveContainer />
)