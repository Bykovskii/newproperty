import { createStore } from 'vuex';
import { propertySearchReducer } from './features/property-search/reducer';

export const store = createStore(propertySearchReducer);