/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listCitiesAutocomplete = /* GraphQL */ `
  query ListCitiesAutocomplete($query: QueryListCitiesAutocompleteQueryInput!) {
    listCitiesAutocomplete(query: $query) {
      predictions {
        description
      }
    }
  }
`;
export const searchBookings = /* GraphQL */ `
  query SearchBookings(
    $filter: SearchableBookingFilterInput
    $sort: [SearchableBookingSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableBookingAggregationInput]
  ) {
    searchBookings(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        checkIn
        checkOut
        occupancy
        property {
          id
          latitude
          longitude
          street
          city
          county
          state
          zip
          loc {
            latitude
            longitude
          }
          photos {
            nextToken
            startedAt
          }
          garage
          propertyType
          stories
          yearBuilt
          beds
          baths
          sqFt
          sqFtLot
          bookings {
            nextToken
            startedAt
          }
          maxOccupancy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        guest {
          id
          email
          firstName
          lastName
          bookings {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        guestBookingsId
        propertyBookingsId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchGuests = /* GraphQL */ `
  query SearchGuests(
    $filter: SearchableGuestFilterInput
    $sort: [SearchableGuestSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableGuestAggregationInput]
  ) {
    searchGuests(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        email
        firstName
        lastName
        bookings {
          items {
            id
            checkIn
            checkOut
            occupancy
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            guestBookingsId
            propertyBookingsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchProperties = /* GraphQL */ `
  query SearchProperties(
    $filter: SearchablePropertyFilterInput
    $sort: [SearchablePropertySortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePropertyAggregationInput]
  ) {
    searchProperties(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        latitude
        longitude
        street
        city
        county
        state
        zip
        loc {
          latitude
          longitude
        }
        photos {
          items {
            id
            title
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            propertyPhotosId
          }
          nextToken
          startedAt
        }
        garage
        propertyType
        stories
        yearBuilt
        beds
        baths
        sqFt
        sqFtLot
        bookings {
          items {
            id
            checkIn
            checkOut
            occupancy
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            guestBookingsId
            propertyBookingsId
          }
          nextToken
          startedAt
        }
        maxOccupancy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      checkIn
      checkOut
      occupancy
      property {
        id
        latitude
        longitude
        street
        city
        county
        state
        zip
        loc {
          latitude
          longitude
        }
        photos {
          items {
            id
            title
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            propertyPhotosId
          }
          nextToken
          startedAt
        }
        garage
        propertyType
        stories
        yearBuilt
        beds
        baths
        sqFt
        sqFtLot
        bookings {
          items {
            id
            checkIn
            checkOut
            occupancy
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            guestBookingsId
            propertyBookingsId
          }
          nextToken
          startedAt
        }
        maxOccupancy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      guest {
        id
        email
        firstName
        lastName
        bookings {
          items {
            id
            checkIn
            checkOut
            occupancy
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            guestBookingsId
            propertyBookingsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      guestBookingsId
      propertyBookingsId
    }
  }
`;
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        checkIn
        checkOut
        occupancy
        property {
          id
          latitude
          longitude
          street
          city
          county
          state
          zip
          loc {
            latitude
            longitude
          }
          photos {
            nextToken
            startedAt
          }
          garage
          propertyType
          stories
          yearBuilt
          beds
          baths
          sqFt
          sqFtLot
          bookings {
            nextToken
            startedAt
          }
          maxOccupancy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        guest {
          id
          email
          firstName
          lastName
          bookings {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        guestBookingsId
        propertyBookingsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBookings = /* GraphQL */ `
  query SyncBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBookings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        checkIn
        checkOut
        occupancy
        property {
          id
          latitude
          longitude
          street
          city
          county
          state
          zip
          loc {
            latitude
            longitude
          }
          photos {
            nextToken
            startedAt
          }
          garage
          propertyType
          stories
          yearBuilt
          beds
          baths
          sqFt
          sqFtLot
          bookings {
            nextToken
            startedAt
          }
          maxOccupancy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        guest {
          id
          email
          firstName
          lastName
          bookings {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        guestBookingsId
        propertyBookingsId
      }
      nextToken
      startedAt
    }
  }
`;
export const getGuest = /* GraphQL */ `
  query GetGuest($id: ID!) {
    getGuest(id: $id) {
      id
      email
      firstName
      lastName
      bookings {
        items {
          id
          checkIn
          checkOut
          occupancy
          property {
            id
            latitude
            longitude
            street
            city
            county
            state
            zip
            garage
            propertyType
            stories
            yearBuilt
            beds
            baths
            sqFt
            sqFtLot
            maxOccupancy
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          guest {
            id
            email
            firstName
            lastName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          guestBookingsId
          propertyBookingsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listGuests = /* GraphQL */ `
  query ListGuests(
    $filter: ModelGuestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        firstName
        lastName
        bookings {
          items {
            id
            checkIn
            checkOut
            occupancy
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            guestBookingsId
            propertyBookingsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGuests = /* GraphQL */ `
  query SyncGuests(
    $filter: ModelGuestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGuests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        firstName
        lastName
        bookings {
          items {
            id
            checkIn
            checkOut
            occupancy
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            guestBookingsId
            propertyBookingsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
      id
      latitude
      longitude
      street
      city
      county
      state
      zip
      loc {
        latitude
        longitude
      }
      photos {
        items {
          id
          title
          property {
            id
            latitude
            longitude
            street
            city
            county
            state
            zip
            garage
            propertyType
            stories
            yearBuilt
            beds
            baths
            sqFt
            sqFtLot
            maxOccupancy
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          propertyPhotosId
        }
        nextToken
        startedAt
      }
      garage
      propertyType
      stories
      yearBuilt
      beds
      baths
      sqFt
      sqFtLot
      bookings {
        items {
          id
          checkIn
          checkOut
          occupancy
          property {
            id
            latitude
            longitude
            street
            city
            county
            state
            zip
            garage
            propertyType
            stories
            yearBuilt
            beds
            baths
            sqFt
            sqFtLot
            maxOccupancy
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          guest {
            id
            email
            firstName
            lastName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          guestBookingsId
          propertyBookingsId
        }
        nextToken
        startedAt
      }
      maxOccupancy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProperties = /* GraphQL */ `
  query ListProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        latitude
        longitude
        street
        city
        county
        state
        zip
        loc {
          latitude
          longitude
        }
        photos {
          items {
            id
            title
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            propertyPhotosId
          }
          nextToken
          startedAt
        }
        garage
        propertyType
        stories
        yearBuilt
        beds
        baths
        sqFt
        sqFtLot
        bookings {
          items {
            id
            checkIn
            checkOut
            occupancy
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            guestBookingsId
            propertyBookingsId
          }
          nextToken
          startedAt
        }
        maxOccupancy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProperties = /* GraphQL */ `
  query SyncProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        latitude
        longitude
        street
        city
        county
        state
        zip
        loc {
          latitude
          longitude
        }
        photos {
          items {
            id
            title
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            propertyPhotosId
          }
          nextToken
          startedAt
        }
        garage
        propertyType
        stories
        yearBuilt
        beds
        baths
        sqFt
        sqFtLot
        bookings {
          items {
            id
            checkIn
            checkOut
            occupancy
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            guestBookingsId
            propertyBookingsId
          }
          nextToken
          startedAt
        }
        maxOccupancy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      title
      property {
        id
        latitude
        longitude
        street
        city
        county
        state
        zip
        loc {
          latitude
          longitude
        }
        photos {
          items {
            id
            title
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            propertyPhotosId
          }
          nextToken
          startedAt
        }
        garage
        propertyType
        stories
        yearBuilt
        beds
        baths
        sqFt
        sqFtLot
        bookings {
          items {
            id
            checkIn
            checkOut
            occupancy
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            guestBookingsId
            propertyBookingsId
          }
          nextToken
          startedAt
        }
        maxOccupancy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      propertyPhotosId
    }
  }
`;
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        property {
          id
          latitude
          longitude
          street
          city
          county
          state
          zip
          loc {
            latitude
            longitude
          }
          photos {
            nextToken
            startedAt
          }
          garage
          propertyType
          stories
          yearBuilt
          beds
          baths
          sqFt
          sqFtLot
          bookings {
            nextToken
            startedAt
          }
          maxOccupancy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        propertyPhotosId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPhotos = /* GraphQL */ `
  query SyncPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPhotos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        property {
          id
          latitude
          longitude
          street
          city
          county
          state
          zip
          loc {
            latitude
            longitude
          }
          photos {
            nextToken
            startedAt
          }
          garage
          propertyType
          stories
          yearBuilt
          beds
          baths
          sqFt
          sqFtLot
          bookings {
            nextToken
            startedAt
          }
          maxOccupancy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        propertyPhotosId
      }
      nextToken
      startedAt
    }
  }
`;
