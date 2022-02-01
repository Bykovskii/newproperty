import { connect } from 'react-redux';
import { PropertySearchComponent } from './component';

const mapStateToProps = state => {
    return {
        searchResults: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleNewSearchResults: (params) => dispatch({ type: 'GET_SEARCH_RESULTS' }),
        handleClearSearchResults: () => dispatch({ type: 'CLEAR_SEARCH_RESULTS' })
    }
};

export const PropertySearchContainer = connect(mapStateToProps, mapDispatchToProps)(PropertySearchComponent);