import { takeLatest, put, all } from 'redux-saga/effects';
import types from '../../constants/actionTypes';
import { API, graphqlOperation } from 'aws-amplify';
import { searchProperties } from '../graphql/queries';

function* searchPropertiesRequest(action) {
    const { checkIn, checkOut, city, guests, propertyType } = action.searchParams;
    const filter = { 
        city: {
          eq: city
        },
        maxOccupancy: {
          gte: guests
        },
        propertyType: {
          eq: propertyType
        }
    };

    try {
        const properties = await API.graphql({ query: searchProperties, variables: { filter } });
        const availableProperties = properties.data.searchBookings.items.filter((x) => {
          if (!x.bookings) {
            return true;
          }
    
          if (x.bookings.find((checkIn >= x.checkIn && checkIn <= x.checkOut) || checkIn <= x.checkIn && checkOut >= x.checkIn)) {
            return false;
          }
        });
        const data = {
            items: availableProperties
        };
      yield put({type: types.SEARCH_PROPERTIES_SUCCESS, payload: data})
    } catch (e) {
      yield put({type: types.SEARCH_PROPERTIES_FAILURE})
    }
  }