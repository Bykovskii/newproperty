/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking {
    onCreateBooking {
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
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking {
    onUpdateBooking {
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
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking {
    onDeleteBooking {
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
export const onCreateGuest = /* GraphQL */ `
  subscription OnCreateGuest {
    onCreateGuest {
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
export const onUpdateGuest = /* GraphQL */ `
  subscription OnUpdateGuest {
    onUpdateGuest {
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
export const onDeleteGuest = /* GraphQL */ `
  subscription OnDeleteGuest {
    onDeleteGuest {
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
export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty {
    onCreateProperty {
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
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty {
    onUpdateProperty {
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
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty {
    onDeleteProperty {
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto {
    onCreatePhoto {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto {
    onUpdatePhoto {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto {
    onDeletePhoto {
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
