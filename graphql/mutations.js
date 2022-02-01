/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
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
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
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
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
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
export const createGuest = /* GraphQL */ `
  mutation CreateGuest(
    $input: CreateGuestInput!
    $condition: ModelGuestConditionInput
  ) {
    createGuest(input: $input, condition: $condition) {
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
export const updateGuest = /* GraphQL */ `
  mutation UpdateGuest(
    $input: UpdateGuestInput!
    $condition: ModelGuestConditionInput
  ) {
    updateGuest(input: $input, condition: $condition) {
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
export const deleteGuest = /* GraphQL */ `
  mutation DeleteGuest(
    $input: DeleteGuestInput!
    $condition: ModelGuestConditionInput
  ) {
    deleteGuest(input: $input, condition: $condition) {
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
export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
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
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
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
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
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
