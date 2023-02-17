/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSchedule = /* GraphQL */ `
  mutation CreateSchedule(
    $input: CreateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    createSchedule(input: $input, condition: $condition) {
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
export const updateSchedule = /* GraphQL */ `
  mutation UpdateSchedule(
    $input: UpdateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    updateSchedule(input: $input, condition: $condition) {
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
export const deleteSchedule = /* GraphQL */ `
  mutation DeleteSchedule(
    $input: DeleteScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    deleteSchedule(input: $input, condition: $condition) {
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
export const createBus = /* GraphQL */ `
  mutation CreateBus(
    $input: CreateBusInput!
    $condition: ModelBusConditionInput
  ) {
    createBus(input: $input, condition: $condition) {
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
export const updateBus = /* GraphQL */ `
  mutation UpdateBus(
    $input: UpdateBusInput!
    $condition: ModelBusConditionInput
  ) {
    updateBus(input: $input, condition: $condition) {
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
export const deleteBus = /* GraphQL */ `
  mutation DeleteBus(
    $input: DeleteBusInput!
    $condition: ModelBusConditionInput
  ) {
    deleteBus(input: $input, condition: $condition) {
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
export const createRoute = /* GraphQL */ `
  mutation CreateRoute(
    $input: CreateRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    createRoute(input: $input, condition: $condition) {
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
export const updateRoute = /* GraphQL */ `
  mutation UpdateRoute(
    $input: UpdateRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    updateRoute(input: $input, condition: $condition) {
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
export const deleteRoute = /* GraphQL */ `
  mutation DeleteRoute(
    $input: DeleteRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    deleteRoute(input: $input, condition: $condition) {
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
export const createRouteImage = /* GraphQL */ `
  mutation CreateRouteImage(
    $input: CreateRouteImageInput!
    $condition: ModelRouteImageConditionInput
  ) {
    createRouteImage(input: $input, condition: $condition) {
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
export const updateRouteImage = /* GraphQL */ `
  mutation UpdateRouteImage(
    $input: UpdateRouteImageInput!
    $condition: ModelRouteImageConditionInput
  ) {
    updateRouteImage(input: $input, condition: $condition) {
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
export const deleteRouteImage = /* GraphQL */ `
  mutation DeleteRouteImage(
    $input: DeleteRouteImageInput!
    $condition: ModelRouteImageConditionInput
  ) {
    deleteRouteImage(input: $input, condition: $condition) {
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
export const createBusImage = /* GraphQL */ `
  mutation CreateBusImage(
    $input: CreateBusImageInput!
    $condition: ModelBusImageConditionInput
  ) {
    createBusImage(input: $input, condition: $condition) {
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
export const updateBusImage = /* GraphQL */ `
  mutation UpdateBusImage(
    $input: UpdateBusImageInput!
    $condition: ModelBusImageConditionInput
  ) {
    updateBusImage(input: $input, condition: $condition) {
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
export const deleteBusImage = /* GraphQL */ `
  mutation DeleteBusImage(
    $input: DeleteBusImageInput!
    $condition: ModelBusImageConditionInput
  ) {
    deleteBusImage(input: $input, condition: $condition) {
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
export const createDriver = /* GraphQL */ `
  mutation CreateDriver(
    $input: CreateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    createDriver(input: $input, condition: $condition) {
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
export const updateDriver = /* GraphQL */ `
  mutation UpdateDriver(
    $input: UpdateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    updateDriver(input: $input, condition: $condition) {
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
export const deleteDriver = /* GraphQL */ `
  mutation DeleteDriver(
    $input: DeleteDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    deleteDriver(input: $input, condition: $condition) {
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
export const createConductor = /* GraphQL */ `
  mutation CreateConductor(
    $input: CreateConductorInput!
    $condition: ModelConductorConditionInput
  ) {
    createConductor(input: $input, condition: $condition) {
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
export const updateConductor = /* GraphQL */ `
  mutation UpdateConductor(
    $input: UpdateConductorInput!
    $condition: ModelConductorConditionInput
  ) {
    updateConductor(input: $input, condition: $condition) {
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
export const deleteConductor = /* GraphQL */ `
  mutation DeleteConductor(
    $input: DeleteConductorInput!
    $condition: ModelConductorConditionInput
  ) {
    deleteConductor(input: $input, condition: $condition) {
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
export const createTicketSale = /* GraphQL */ `
  mutation CreateTicketSale(
    $input: CreateTicketSaleInput!
    $condition: ModelTicketSaleConditionInput
  ) {
    createTicketSale(input: $input, condition: $condition) {
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
export const updateTicketSale = /* GraphQL */ `
  mutation UpdateTicketSale(
    $input: UpdateTicketSaleInput!
    $condition: ModelTicketSaleConditionInput
  ) {
    updateTicketSale(input: $input, condition: $condition) {
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
export const deleteTicketSale = /* GraphQL */ `
  mutation DeleteTicketSale(
    $input: DeleteTicketSaleInput!
    $condition: ModelTicketSaleConditionInput
  ) {
    deleteTicketSale(input: $input, condition: $condition) {
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
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
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
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
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
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
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
export const createScheduleBus = /* GraphQL */ `
  mutation CreateScheduleBus(
    $input: CreateScheduleBusInput!
    $condition: ModelScheduleBusConditionInput
  ) {
    createScheduleBus(input: $input, condition: $condition) {
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
export const updateScheduleBus = /* GraphQL */ `
  mutation UpdateScheduleBus(
    $input: UpdateScheduleBusInput!
    $condition: ModelScheduleBusConditionInput
  ) {
    updateScheduleBus(input: $input, condition: $condition) {
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
export const deleteScheduleBus = /* GraphQL */ `
  mutation DeleteScheduleBus(
    $input: DeleteScheduleBusInput!
    $condition: ModelScheduleBusConditionInput
  ) {
    deleteScheduleBus(input: $input, condition: $condition) {
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
export const createDriverSchedule = /* GraphQL */ `
  mutation CreateDriverSchedule(
    $input: CreateDriverScheduleInput!
    $condition: ModelDriverScheduleConditionInput
  ) {
    createDriverSchedule(input: $input, condition: $condition) {
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
export const updateDriverSchedule = /* GraphQL */ `
  mutation UpdateDriverSchedule(
    $input: UpdateDriverScheduleInput!
    $condition: ModelDriverScheduleConditionInput
  ) {
    updateDriverSchedule(input: $input, condition: $condition) {
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
export const deleteDriverSchedule = /* GraphQL */ `
  mutation DeleteDriverSchedule(
    $input: DeleteDriverScheduleInput!
    $condition: ModelDriverScheduleConditionInput
  ) {
    deleteDriverSchedule(input: $input, condition: $condition) {
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
export const createConductorSchedule = /* GraphQL */ `
  mutation CreateConductorSchedule(
    $input: CreateConductorScheduleInput!
    $condition: ModelConductorScheduleConditionInput
  ) {
    createConductorSchedule(input: $input, condition: $condition) {
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
export const updateConductorSchedule = /* GraphQL */ `
  mutation UpdateConductorSchedule(
    $input: UpdateConductorScheduleInput!
    $condition: ModelConductorScheduleConditionInput
  ) {
    updateConductorSchedule(input: $input, condition: $condition) {
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
export const deleteConductorSchedule = /* GraphQL */ `
  mutation DeleteConductorSchedule(
    $input: DeleteConductorScheduleInput!
    $condition: ModelConductorScheduleConditionInput
  ) {
    deleteConductorSchedule(input: $input, condition: $condition) {
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
export const createRouteBus = /* GraphQL */ `
  mutation CreateRouteBus(
    $input: CreateRouteBusInput!
    $condition: ModelRouteBusConditionInput
  ) {
    createRouteBus(input: $input, condition: $condition) {
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
export const updateRouteBus = /* GraphQL */ `
  mutation UpdateRouteBus(
    $input: UpdateRouteBusInput!
    $condition: ModelRouteBusConditionInput
  ) {
    updateRouteBus(input: $input, condition: $condition) {
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
export const deleteRouteBus = /* GraphQL */ `
  mutation DeleteRouteBus(
    $input: DeleteRouteBusInput!
    $condition: ModelRouteBusConditionInput
  ) {
    deleteRouteBus(input: $input, condition: $condition) {
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
