// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Schedule, Bus, Driver, Conductor, BusImage, TicketSale, Route, RouteImage, Ticket, ScheduleBus, DriverSchedule, ConductorSchedule, RouteBus } = initSchema(schema);

export {
  Schedule,
  Bus,
  Driver,
  Conductor,
  BusImage,
  TicketSale,
  Route,
  RouteImage,
  Ticket,
  ScheduleBus,
  DriverSchedule,
  ConductorSchedule,
  RouteBus
};