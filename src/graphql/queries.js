/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSchedule = /* GraphQL */ `
  query GetSchedule($id: ID!) {
    getSchedule(id: $id) {
      id
      name
      time
      type
      day
      buss {
        items {
          id
          scheduleID
          busID
          schedule {
            id
            name
            time
            type
            day
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
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
      drivers {
        items {
          id
          scheduleID
          driverID
          schedule {
            id
            name
            time
            type
            day
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
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
      conductors {
        items {
          id
          scheduleID
          conductorID
          schedule {
            id
            name
            time
            type
            day
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSchedules = /* GraphQL */ `
  query ListSchedules(
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        time
        type
        day
        buss {
          items {
            id
            scheduleID
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        drivers {
          items {
            id
            scheduleID
            driverID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conductors {
          items {
            id
            scheduleID
            conductorID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const syncSchedules = /* GraphQL */ `
  query SyncSchedules(
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        time
        type
        day
        buss {
          items {
            id
            scheduleID
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        drivers {
          items {
            id
            scheduleID
            driverID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conductors {
          items {
            id
            scheduleID
            conductorID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const getBus = /* GraphQL */ `
  query GetBus($id: ID!) {
    getBus(id: $id) {
      id
      name
      trackingID
      Driver {
        id
        name
        licenseNumber
        phone
        licenseExpiry
        Bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          items {
            id
            scheduleID
            driverID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        driverBusId
      }
      Conductor {
        id
        name
        phone
        Bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          items {
            id
            scheduleID
            conductorID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conductorBusId
      }
      BusImages {
        items {
          id
          tags
          caption
          url
          busID
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busBusImagesId
        }
        nextToken
        startedAt
      }
      status_on
      TicketSales {
        items {
          id
          expired
          token
          userID
          busID
          routeID
          Route {
            id
            routeName
            pickupPoints
            image
            distance
            avg_duration
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          price
          name
          paymentVia
          TicketID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busTicketSalesId
          routeTicketSalesId
        }
        nextToken
        startedAt
      }
      Schedules {
        items {
          id
          scheduleID
          busID
          schedule {
            id
            name
            time
            type
            day
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
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
      routeID
      routes {
        items {
          id
          busID
          routeID
          bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          route {
            id
            routeName
            pickupPoints
            image
            distance
            avg_duration
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
        }
        nextToken
        startedAt
      }
      Tickets {
        items {
          id
          busID
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          price
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busTicketsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      busDriverId
      busConductorId
    }
  }
`;
export const listBuses = /* GraphQL */ `
  query ListBuses(
    $filter: ModelBusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          items {
            id
            tags
            caption
            url
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busBusImagesId
          }
          nextToken
          startedAt
        }
        status_on
        TicketSales {
          items {
            id
            expired
            token
            userID
            busID
            routeID
            price
            name
            paymentVia
            TicketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketSalesId
            routeTicketSalesId
          }
          nextToken
          startedAt
        }
        Schedules {
          items {
            id
            scheduleID
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        routeID
        routes {
          items {
            id
            busID
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Tickets {
          items {
            id
            busID
            price
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBuses = /* GraphQL */ `
  query SyncBuses(
    $filter: ModelBusFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          items {
            id
            tags
            caption
            url
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busBusImagesId
          }
          nextToken
          startedAt
        }
        status_on
        TicketSales {
          items {
            id
            expired
            token
            userID
            busID
            routeID
            price
            name
            paymentVia
            TicketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketSalesId
            routeTicketSalesId
          }
          nextToken
          startedAt
        }
        Schedules {
          items {
            id
            scheduleID
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        routeID
        routes {
          items {
            id
            busID
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Tickets {
          items {
            id
            busID
            price
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      nextToken
      startedAt
    }
  }
`;
export const getRoute = /* GraphQL */ `
  query GetRoute($id: ID!) {
    getRoute(id: $id) {
      id
      routeName
      pickupPoints
      image
      RouteImages {
        items {
          id
          url
          tags
          caption
          routeID
          Route {
            id
            routeName
            pickupPoints
            image
            distance
            avg_duration
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
          routeRouteImagesId
        }
        nextToken
        startedAt
      }
      Buses {
        items {
          id
          busID
          routeID
          bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          route {
            id
            routeName
            pickupPoints
            image
            distance
            avg_duration
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
        }
        nextToken
        startedAt
      }
      TicketSales {
        items {
          id
          expired
          token
          userID
          busID
          routeID
          Route {
            id
            routeName
            pickupPoints
            image
            distance
            avg_duration
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          price
          name
          paymentVia
          TicketID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busTicketSalesId
          routeTicketSalesId
        }
        nextToken
        startedAt
      }
      distance
      avg_duration
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRoutes = /* GraphQL */ `
  query ListRoutes(
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        routeName
        pickupPoints
        image
        RouteImages {
          items {
            id
            url
            tags
            caption
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            routeRouteImagesId
          }
          nextToken
          startedAt
        }
        Buses {
          items {
            id
            busID
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        TicketSales {
          items {
            id
            expired
            token
            userID
            busID
            routeID
            price
            name
            paymentVia
            TicketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketSalesId
            routeTicketSalesId
          }
          nextToken
          startedAt
        }
        distance
        avg_duration
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
export const syncRoutes = /* GraphQL */ `
  query SyncRoutes(
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRoutes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        routeName
        pickupPoints
        image
        RouteImages {
          items {
            id
            url
            tags
            caption
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            routeRouteImagesId
          }
          nextToken
          startedAt
        }
        Buses {
          items {
            id
            busID
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        TicketSales {
          items {
            id
            expired
            token
            userID
            busID
            routeID
            price
            name
            paymentVia
            TicketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketSalesId
            routeTicketSalesId
          }
          nextToken
          startedAt
        }
        distance
        avg_duration
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
export const getRouteImage = /* GraphQL */ `
  query GetRouteImage($id: ID!) {
    getRouteImage(id: $id) {
      id
      url
      tags
      caption
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        RouteImages {
          items {
            id
            url
            tags
            caption
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            routeRouteImagesId
          }
          nextToken
          startedAt
        }
        Buses {
          items {
            id
            busID
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        TicketSales {
          items {
            id
            expired
            token
            userID
            busID
            routeID
            price
            name
            paymentVia
            TicketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketSalesId
            routeTicketSalesId
          }
          nextToken
          startedAt
        }
        distance
        avg_duration
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
      routeRouteImagesId
    }
  }
`;
export const listRouteImages = /* GraphQL */ `
  query ListRouteImages(
    $filter: ModelRouteImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRouteImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        tags
        caption
        routeID
        Route {
          id
          routeName
          pickupPoints
          image
          RouteImages {
            nextToken
            startedAt
          }
          Buses {
            nextToken
            startedAt
          }
          TicketSales {
            nextToken
            startedAt
          }
          distance
          avg_duration
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
        routeRouteImagesId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRouteImages = /* GraphQL */ `
  query SyncRouteImages(
    $filter: ModelRouteImageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRouteImages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        url
        tags
        caption
        routeID
        Route {
          id
          routeName
          pickupPoints
          image
          RouteImages {
            nextToken
            startedAt
          }
          Buses {
            nextToken
            startedAt
          }
          TicketSales {
            nextToken
            startedAt
          }
          distance
          avg_duration
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
        routeRouteImagesId
      }
      nextToken
      startedAt
    }
  }
`;
export const getBusImage = /* GraphQL */ `
  query GetBusImage($id: ID!) {
    getBusImage(id: $id) {
      id
      tags
      caption
      url
      busID
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          items {
            id
            tags
            caption
            url
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busBusImagesId
          }
          nextToken
          startedAt
        }
        status_on
        TicketSales {
          items {
            id
            expired
            token
            userID
            busID
            routeID
            price
            name
            paymentVia
            TicketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketSalesId
            routeTicketSalesId
          }
          nextToken
          startedAt
        }
        Schedules {
          items {
            id
            scheduleID
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        routeID
        routes {
          items {
            id
            busID
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Tickets {
          items {
            id
            busID
            price
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      busBusImagesId
    }
  }
`;
export const listBusImages = /* GraphQL */ `
  query ListBusImages(
    $filter: ModelBusImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tags
        caption
        url
        busID
        Bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busBusImagesId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBusImages = /* GraphQL */ `
  query SyncBusImages(
    $filter: ModelBusImageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBusImages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tags
        caption
        url
        busID
        Bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busBusImagesId
      }
      nextToken
      startedAt
    }
  }
`;
export const getDriver = /* GraphQL */ `
  query GetDriver($id: ID!) {
    getDriver(id: $id) {
      id
      name
      licenseNumber
      phone
      licenseExpiry
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          items {
            id
            tags
            caption
            url
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busBusImagesId
          }
          nextToken
          startedAt
        }
        status_on
        TicketSales {
          items {
            id
            expired
            token
            userID
            busID
            routeID
            price
            name
            paymentVia
            TicketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketSalesId
            routeTicketSalesId
          }
          nextToken
          startedAt
        }
        Schedules {
          items {
            id
            scheduleID
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        routeID
        routes {
          items {
            id
            busID
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Tickets {
          items {
            id
            busID
            price
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      Schedules {
        items {
          id
          scheduleID
          driverID
          schedule {
            id
            name
            time
            type
            day
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      driverBusId
    }
  }
`;
export const listDrivers = /* GraphQL */ `
  query ListDrivers(
    $filter: ModelDriverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        licenseNumber
        phone
        licenseExpiry
        Bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          items {
            id
            scheduleID
            driverID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        driverBusId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDrivers = /* GraphQL */ `
  query SyncDrivers(
    $filter: ModelDriverFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDrivers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        licenseNumber
        phone
        licenseExpiry
        Bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          items {
            id
            scheduleID
            driverID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        driverBusId
      }
      nextToken
      startedAt
    }
  }
`;
export const getConductor = /* GraphQL */ `
  query GetConductor($id: ID!) {
    getConductor(id: $id) {
      id
      name
      phone
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          items {
            id
            tags
            caption
            url
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busBusImagesId
          }
          nextToken
          startedAt
        }
        status_on
        TicketSales {
          items {
            id
            expired
            token
            userID
            busID
            routeID
            price
            name
            paymentVia
            TicketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketSalesId
            routeTicketSalesId
          }
          nextToken
          startedAt
        }
        Schedules {
          items {
            id
            scheduleID
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        routeID
        routes {
          items {
            id
            busID
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Tickets {
          items {
            id
            busID
            price
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      Schedules {
        items {
          id
          scheduleID
          conductorID
          schedule {
            id
            name
            time
            type
            day
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      conductorBusId
    }
  }
`;
export const listConductors = /* GraphQL */ `
  query ListConductors(
    $filter: ModelConductorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConductors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        Bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          items {
            id
            scheduleID
            conductorID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conductorBusId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncConductors = /* GraphQL */ `
  query SyncConductors(
    $filter: ModelConductorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConductors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        phone
        Bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          items {
            id
            scheduleID
            conductorID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conductorBusId
      }
      nextToken
      startedAt
    }
  }
`;
export const getTicketSale = /* GraphQL */ `
  query GetTicketSale($id: ID!) {
    getTicketSale(id: $id) {
      id
      expired
      token
      userID
      busID
      routeID
      Route {
        id
        routeName
        pickupPoints
        image
        RouteImages {
          items {
            id
            url
            tags
            caption
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            routeRouteImagesId
          }
          nextToken
          startedAt
        }
        Buses {
          items {
            id
            busID
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        TicketSales {
          items {
            id
            expired
            token
            userID
            busID
            routeID
            price
            name
            paymentVia
            TicketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketSalesId
            routeTicketSalesId
          }
          nextToken
          startedAt
        }
        distance
        avg_duration
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          items {
            id
            tags
            caption
            url
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busBusImagesId
          }
          nextToken
          startedAt
        }
        status_on
        TicketSales {
          items {
            id
            expired
            token
            userID
            busID
            routeID
            price
            name
            paymentVia
            TicketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketSalesId
            routeTicketSalesId
          }
          nextToken
          startedAt
        }
        Schedules {
          items {
            id
            scheduleID
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        routeID
        routes {
          items {
            id
            busID
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Tickets {
          items {
            id
            busID
            price
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      price
      name
      paymentVia
      TicketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      busTicketSalesId
      routeTicketSalesId
    }
  }
`;
export const listTicketSales = /* GraphQL */ `
  query ListTicketSales(
    $filter: ModelTicketSaleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTicketSales(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        expired
        token
        userID
        busID
        routeID
        Route {
          id
          routeName
          pickupPoints
          image
          RouteImages {
            nextToken
            startedAt
          }
          Buses {
            nextToken
            startedAt
          }
          TicketSales {
            nextToken
            startedAt
          }
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        price
        name
        paymentVia
        TicketID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busTicketSalesId
        routeTicketSalesId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTicketSales = /* GraphQL */ `
  query SyncTicketSales(
    $filter: ModelTicketSaleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTicketSales(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        expired
        token
        userID
        busID
        routeID
        Route {
          id
          routeName
          pickupPoints
          image
          RouteImages {
            nextToken
            startedAt
          }
          Buses {
            nextToken
            startedAt
          }
          TicketSales {
            nextToken
            startedAt
          }
          distance
          avg_duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        price
        name
        paymentVia
        TicketID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busTicketSalesId
        routeTicketSalesId
      }
      nextToken
      startedAt
    }
  }
`;
export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
      id
      busID
      Bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          items {
            id
            tags
            caption
            url
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busBusImagesId
          }
          nextToken
          startedAt
        }
        status_on
        TicketSales {
          items {
            id
            expired
            token
            userID
            busID
            routeID
            price
            name
            paymentVia
            TicketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketSalesId
            routeTicketSalesId
          }
          nextToken
          startedAt
        }
        Schedules {
          items {
            id
            scheduleID
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        routeID
        routes {
          items {
            id
            busID
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Tickets {
          items {
            id
            busID
            price
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      price
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      busTicketsId
    }
  }
`;
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        busID
        Bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        price
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busTicketsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTickets = /* GraphQL */ `
  query SyncTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTickets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        busID
        Bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        price
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busTicketsId
      }
      nextToken
      startedAt
    }
  }
`;
export const getScheduleBus = /* GraphQL */ `
  query GetScheduleBus($id: ID!) {
    getScheduleBus(id: $id) {
      id
      scheduleID
      busID
      schedule {
        id
        name
        time
        type
        day
        buss {
          items {
            id
            scheduleID
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        drivers {
          items {
            id
            scheduleID
            driverID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conductors {
          items {
            id
            scheduleID
            conductorID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
      bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          items {
            id
            tags
            caption
            url
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busBusImagesId
          }
          nextToken
          startedAt
        }
        status_on
        TicketSales {
          items {
            id
            expired
            token
            userID
            busID
            routeID
            price
            name
            paymentVia
            TicketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketSalesId
            routeTicketSalesId
          }
          nextToken
          startedAt
        }
        Schedules {
          items {
            id
            scheduleID
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        routeID
        routes {
          items {
            id
            busID
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Tickets {
          items {
            id
            busID
            price
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listScheduleBuses = /* GraphQL */ `
  query ListScheduleBuses(
    $filter: ModelScheduleBusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScheduleBuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        scheduleID
        busID
        schedule {
          id
          name
          time
          type
          day
          buss {
            nextToken
            startedAt
          }
          drivers {
            nextToken
            startedAt
          }
          conductors {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
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
export const syncScheduleBuses = /* GraphQL */ `
  query SyncScheduleBuses(
    $filter: ModelScheduleBusFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncScheduleBuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        scheduleID
        busID
        schedule {
          id
          name
          time
          type
          day
          buss {
            nextToken
            startedAt
          }
          drivers {
            nextToken
            startedAt
          }
          conductors {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
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
export const getDriverSchedule = /* GraphQL */ `
  query GetDriverSchedule($id: ID!) {
    getDriverSchedule(id: $id) {
      id
      scheduleID
      driverID
      schedule {
        id
        name
        time
        type
        day
        buss {
          items {
            id
            scheduleID
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        drivers {
          items {
            id
            scheduleID
            driverID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conductors {
          items {
            id
            scheduleID
            conductorID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
      driver {
        id
        name
        licenseNumber
        phone
        licenseExpiry
        Bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          items {
            id
            scheduleID
            driverID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        driverBusId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDriverSchedules = /* GraphQL */ `
  query ListDriverSchedules(
    $filter: ModelDriverScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDriverSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        scheduleID
        driverID
        schedule {
          id
          name
          time
          type
          day
          buss {
            nextToken
            startedAt
          }
          drivers {
            nextToken
            startedAt
          }
          conductors {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
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
export const syncDriverSchedules = /* GraphQL */ `
  query SyncDriverSchedules(
    $filter: ModelDriverScheduleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDriverSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        scheduleID
        driverID
        schedule {
          id
          name
          time
          type
          day
          buss {
            nextToken
            startedAt
          }
          drivers {
            nextToken
            startedAt
          }
          conductors {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
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
export const getConductorSchedule = /* GraphQL */ `
  query GetConductorSchedule($id: ID!) {
    getConductorSchedule(id: $id) {
      id
      scheduleID
      conductorID
      schedule {
        id
        name
        time
        type
        day
        buss {
          items {
            id
            scheduleID
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        drivers {
          items {
            id
            scheduleID
            driverID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conductors {
          items {
            id
            scheduleID
            conductorID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
      conductor {
        id
        name
        phone
        Bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        Schedules {
          items {
            id
            scheduleID
            conductorID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conductorBusId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listConductorSchedules = /* GraphQL */ `
  query ListConductorSchedules(
    $filter: ModelConductorScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConductorSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        scheduleID
        conductorID
        schedule {
          id
          name
          time
          type
          day
          buss {
            nextToken
            startedAt
          }
          drivers {
            nextToken
            startedAt
          }
          conductors {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        conductor {
          id
          name
          phone
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
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
export const syncConductorSchedules = /* GraphQL */ `
  query SyncConductorSchedules(
    $filter: ModelConductorScheduleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConductorSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        scheduleID
        conductorID
        schedule {
          id
          name
          time
          type
          day
          buss {
            nextToken
            startedAt
          }
          drivers {
            nextToken
            startedAt
          }
          conductors {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        conductor {
          id
          name
          phone
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
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
export const getRouteBus = /* GraphQL */ `
  query GetRouteBus($id: ID!) {
    getRouteBus(id: $id) {
      id
      busID
      routeID
      bus {
        id
        name
        trackingID
        Driver {
          id
          name
          licenseNumber
          phone
          licenseExpiry
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          driverBusId
        }
        Conductor {
          id
          name
          phone
          Bus {
            id
            name
            trackingID
            status_on
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busDriverId
            busConductorId
          }
          Schedules {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conductorBusId
        }
        BusImages {
          items {
            id
            tags
            caption
            url
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busBusImagesId
          }
          nextToken
          startedAt
        }
        status_on
        TicketSales {
          items {
            id
            expired
            token
            userID
            busID
            routeID
            price
            name
            paymentVia
            TicketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketSalesId
            routeTicketSalesId
          }
          nextToken
          startedAt
        }
        Schedules {
          items {
            id
            scheduleID
            busID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        routeID
        routes {
          items {
            id
            busID
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Tickets {
          items {
            id
            busID
            price
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        busDriverId
        busConductorId
      }
      route {
        id
        routeName
        pickupPoints
        image
        RouteImages {
          items {
            id
            url
            tags
            caption
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            routeRouteImagesId
          }
          nextToken
          startedAt
        }
        Buses {
          items {
            id
            busID
            routeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        TicketSales {
          items {
            id
            expired
            token
            userID
            busID
            routeID
            price
            name
            paymentVia
            TicketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            busTicketSalesId
            routeTicketSalesId
          }
          nextToken
          startedAt
        }
        distance
        avg_duration
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
    }
  }
`;
export const listRouteBuses = /* GraphQL */ `
  query ListRouteBuses(
    $filter: ModelRouteBusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRouteBuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        busID
        routeID
        bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        route {
          id
          routeName
          pickupPoints
          image
          RouteImages {
            nextToken
            startedAt
          }
          Buses {
            nextToken
            startedAt
          }
          TicketSales {
            nextToken
            startedAt
          }
          distance
          avg_duration
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRouteBuses = /* GraphQL */ `
  query SyncRouteBuses(
    $filter: ModelRouteBusFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRouteBuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        busID
        routeID
        bus {
          id
          name
          trackingID
          Driver {
            id
            name
            licenseNumber
            phone
            licenseExpiry
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            driverBusId
          }
          Conductor {
            id
            name
            phone
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            conductorBusId
          }
          BusImages {
            nextToken
            startedAt
          }
          status_on
          TicketSales {
            nextToken
            startedAt
          }
          Schedules {
            nextToken
            startedAt
          }
          routeID
          routes {
            nextToken
            startedAt
          }
          Tickets {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          busDriverId
          busConductorId
        }
        route {
          id
          routeName
          pickupPoints
          image
          RouteImages {
            nextToken
            startedAt
          }
          Buses {
            nextToken
            startedAt
          }
          TicketSales {
            nextToken
            startedAt
          }
          distance
          avg_duration
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
      }
      nextToken
      startedAt
    }
  }
`;
