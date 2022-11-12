/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule {
    onCreateSchedule {
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
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule {
    onUpdateSchedule {
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
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule {
    onDeleteSchedule {
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
export const onCreateBus = /* GraphQL */ `
  subscription OnCreateBus {
    onCreateBus {
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
export const onUpdateBus = /* GraphQL */ `
  subscription OnUpdateBus {
    onUpdateBus {
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
export const onDeleteBus = /* GraphQL */ `
  subscription OnDeleteBus {
    onDeleteBus {
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
export const onCreateRoute = /* GraphQL */ `
  subscription OnCreateRoute {
    onCreateRoute {
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
export const onUpdateRoute = /* GraphQL */ `
  subscription OnUpdateRoute {
    onUpdateRoute {
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
export const onDeleteRoute = /* GraphQL */ `
  subscription OnDeleteRoute {
    onDeleteRoute {
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
export const onCreateRouteImage = /* GraphQL */ `
  subscription OnCreateRouteImage {
    onCreateRouteImage {
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
export const onUpdateRouteImage = /* GraphQL */ `
  subscription OnUpdateRouteImage {
    onUpdateRouteImage {
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
export const onDeleteRouteImage = /* GraphQL */ `
  subscription OnDeleteRouteImage {
    onDeleteRouteImage {
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
export const onCreateBusImage = /* GraphQL */ `
  subscription OnCreateBusImage {
    onCreateBusImage {
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
export const onUpdateBusImage = /* GraphQL */ `
  subscription OnUpdateBusImage {
    onUpdateBusImage {
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
export const onDeleteBusImage = /* GraphQL */ `
  subscription OnDeleteBusImage {
    onDeleteBusImage {
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
export const onCreateDriver = /* GraphQL */ `
  subscription OnCreateDriver {
    onCreateDriver {
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
export const onUpdateDriver = /* GraphQL */ `
  subscription OnUpdateDriver {
    onUpdateDriver {
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
export const onDeleteDriver = /* GraphQL */ `
  subscription OnDeleteDriver {
    onDeleteDriver {
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
export const onCreateConductor = /* GraphQL */ `
  subscription OnCreateConductor {
    onCreateConductor {
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
export const onUpdateConductor = /* GraphQL */ `
  subscription OnUpdateConductor {
    onUpdateConductor {
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
export const onDeleteConductor = /* GraphQL */ `
  subscription OnDeleteConductor {
    onDeleteConductor {
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
export const onCreateTicketSale = /* GraphQL */ `
  subscription OnCreateTicketSale {
    onCreateTicketSale {
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
export const onUpdateTicketSale = /* GraphQL */ `
  subscription OnUpdateTicketSale {
    onUpdateTicketSale {
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
export const onDeleteTicketSale = /* GraphQL */ `
  subscription OnDeleteTicketSale {
    onDeleteTicketSale {
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
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket {
    onCreateTicket {
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
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket {
    onUpdateTicket {
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
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket {
    onDeleteTicket {
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
export const onCreateScheduleBus = /* GraphQL */ `
  subscription OnCreateScheduleBus {
    onCreateScheduleBus {
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
export const onUpdateScheduleBus = /* GraphQL */ `
  subscription OnUpdateScheduleBus {
    onUpdateScheduleBus {
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
export const onDeleteScheduleBus = /* GraphQL */ `
  subscription OnDeleteScheduleBus {
    onDeleteScheduleBus {
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
export const onCreateDriverSchedule = /* GraphQL */ `
  subscription OnCreateDriverSchedule {
    onCreateDriverSchedule {
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
export const onUpdateDriverSchedule = /* GraphQL */ `
  subscription OnUpdateDriverSchedule {
    onUpdateDriverSchedule {
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
export const onDeleteDriverSchedule = /* GraphQL */ `
  subscription OnDeleteDriverSchedule {
    onDeleteDriverSchedule {
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
export const onCreateConductorSchedule = /* GraphQL */ `
  subscription OnCreateConductorSchedule {
    onCreateConductorSchedule {
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
export const onUpdateConductorSchedule = /* GraphQL */ `
  subscription OnUpdateConductorSchedule {
    onUpdateConductorSchedule {
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
export const onDeleteConductorSchedule = /* GraphQL */ `
  subscription OnDeleteConductorSchedule {
    onDeleteConductorSchedule {
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
export const onCreateRouteBus = /* GraphQL */ `
  subscription OnCreateRouteBus {
    onCreateRouteBus {
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
export const onUpdateRouteBus = /* GraphQL */ `
  subscription OnUpdateRouteBus {
    onUpdateRouteBus {
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
export const onDeleteRouteBus = /* GraphQL */ `
  subscription OnDeleteRouteBus {
    onDeleteRouteBus {
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
