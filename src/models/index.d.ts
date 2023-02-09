import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type ScheduleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DriverMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConductorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusImageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TicketSaleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RouteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RouteImageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TicketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ScheduleBusMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DriverScheduleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConductorScheduleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RouteBusMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerSchedule = {
  readonly id: string;
  readonly name?: string | null;
  readonly time?: string | null;
  readonly type?: string | null;
  readonly day?: string | null;
  readonly buss?: (ScheduleBus | null)[] | null;
  readonly drivers?: (DriverSchedule | null)[] | null;
  readonly conductors?: (ConductorSchedule | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySchedule = {
  readonly id: string;
  readonly name?: string | null;
  readonly time?: string | null;
  readonly type?: string | null;
  readonly day?: string | null;
  readonly buss: AsyncCollection<ScheduleBus>;
  readonly drivers: AsyncCollection<DriverSchedule>;
  readonly conductors: AsyncCollection<ConductorSchedule>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Schedule = LazyLoading extends LazyLoadingDisabled ? EagerSchedule : LazySchedule

export declare const Schedule: (new (init: ModelInit<Schedule, ScheduleMetaData>) => Schedule) & {
  copyOf(source: Schedule, mutator: (draft: MutableModel<Schedule, ScheduleMetaData>) => MutableModel<Schedule, ScheduleMetaData> | void): Schedule;
}

type EagerBus = {
  readonly id: string;
  readonly name: string;
  readonly trackingID?: string | null;
  readonly Driver?: Driver | null;
  readonly Conductor?: Conductor | null;
  readonly BusImages?: (BusImage | null)[] | null;
  readonly status_on?: boolean | null;
  readonly TicketSales?: (TicketSale | null)[] | null;
  readonly Schedules?: (ScheduleBus | null)[] | null;
  readonly routeID: string;
  readonly routes?: (RouteBus | null)[] | null;
  readonly Tickets?: (Ticket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly busDriverId?: string | null;
  readonly busConductorId?: string | null;
}

type LazyBus = {
  readonly id: string;
  readonly name: string;
  readonly trackingID?: string | null;
  readonly Driver: AsyncItem<Driver | undefined>;
  readonly Conductor: AsyncItem<Conductor | undefined>;
  readonly BusImages: AsyncCollection<BusImage>;
  readonly status_on?: boolean | null;
  readonly TicketSales: AsyncCollection<TicketSale>;
  readonly Schedules: AsyncCollection<ScheduleBus>;
  readonly routeID: string;
  readonly routes: AsyncCollection<RouteBus>;
  readonly Tickets: AsyncCollection<Ticket>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly busDriverId?: string | null;
  readonly busConductorId?: string | null;
}

export declare type Bus = LazyLoading extends LazyLoadingDisabled ? EagerBus : LazyBus

export declare const Bus: (new (init: ModelInit<Bus, BusMetaData>) => Bus) & {
  copyOf(source: Bus, mutator: (draft: MutableModel<Bus, BusMetaData>) => MutableModel<Bus, BusMetaData> | void): Bus;
}

type EagerDriver = {
  readonly id: string;
  readonly name: string;
  readonly licenseNumber: string;
  readonly phone: string;
  readonly licenseExpiry?: string | null;
  readonly Bus?: Bus | null;
  readonly Schedules?: (DriverSchedule | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDriver = {
  readonly id: string;
  readonly name: string;
  readonly licenseNumber: string;
  readonly phone: string;
  readonly licenseExpiry?: string | null;
  readonly Bus: AsyncItem<Bus | undefined>;
  readonly Schedules: AsyncCollection<DriverSchedule>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Driver = LazyLoading extends LazyLoadingDisabled ? EagerDriver : LazyDriver

export declare const Driver: (new (init: ModelInit<Driver, DriverMetaData>) => Driver) & {
  copyOf(source: Driver, mutator: (draft: MutableModel<Driver, DriverMetaData>) => MutableModel<Driver, DriverMetaData> | void): Driver;
}

type EagerConductor = {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly Bus?: Bus | null;
  readonly Schedules?: (ConductorSchedule | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConductor = {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly Bus: AsyncItem<Bus | undefined>;
  readonly Schedules: AsyncCollection<ConductorSchedule>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Conductor = LazyLoading extends LazyLoadingDisabled ? EagerConductor : LazyConductor

export declare const Conductor: (new (init: ModelInit<Conductor, ConductorMetaData>) => Conductor) & {
  copyOf(source: Conductor, mutator: (draft: MutableModel<Conductor, ConductorMetaData>) => MutableModel<Conductor, ConductorMetaData> | void): Conductor;
}

type EagerBusImage = {
  readonly id: string;
  readonly tags?: (string | null)[] | null;
  readonly caption?: string | null;
  readonly url?: string | null;
  readonly busID: string;
  readonly Bus?: Bus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusImage = {
  readonly id: string;
  readonly tags?: (string | null)[] | null;
  readonly caption?: string | null;
  readonly url?: string | null;
  readonly busID: string;
  readonly Bus: AsyncItem<Bus | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BusImage = LazyLoading extends LazyLoadingDisabled ? EagerBusImage : LazyBusImage

export declare const BusImage: (new (init: ModelInit<BusImage, BusImageMetaData>) => BusImage) & {
  copyOf(source: BusImage, mutator: (draft: MutableModel<BusImage, BusImageMetaData>) => MutableModel<BusImage, BusImageMetaData> | void): BusImage;
}

type EagerTicketSale = {
  readonly id: string;
  readonly expired?: boolean | null;
  readonly token: string;
  readonly userID: string;
  readonly busID: string;
  readonly routeID: string;
  readonly Route?: Route | null;
  readonly Bus?: Bus | null;
  readonly price: number;
  readonly name: string;
  readonly paymentVia?: string | null;
  readonly TicketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTicketSale = {
  readonly id: string;
  readonly expired?: boolean | null;
  readonly token: string;
  readonly userID: string;
  readonly busID: string;
  readonly routeID: string;
  readonly Route: AsyncItem<Route | undefined>;
  readonly Bus: AsyncItem<Bus | undefined>;
  readonly price: number;
  readonly name: string;
  readonly paymentVia?: string | null;
  readonly TicketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TicketSale = LazyLoading extends LazyLoadingDisabled ? EagerTicketSale : LazyTicketSale

export declare const TicketSale: (new (init: ModelInit<TicketSale, TicketSaleMetaData>) => TicketSale) & {
  copyOf(source: TicketSale, mutator: (draft: MutableModel<TicketSale, TicketSaleMetaData>) => MutableModel<TicketSale, TicketSaleMetaData> | void): TicketSale;
}

type EagerRoute = {
  readonly id: string;
  readonly routeName: string;
  readonly pickupPoints?: (string | null)[] | null;
  readonly image?: string | null;
  readonly RouteImages?: (RouteImage | null)[] | null;
  readonly Buses?: (RouteBus | null)[] | null;
  readonly TicketSales?: (TicketSale | null)[] | null;
  readonly distance?: number | null;
  readonly avg_duration?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRoute = {
  readonly id: string;
  readonly routeName: string;
  readonly pickupPoints?: (string | null)[] | null;
  readonly image?: string | null;
  readonly RouteImages: AsyncCollection<RouteImage>;
  readonly Buses: AsyncCollection<RouteBus>;
  readonly TicketSales: AsyncCollection<TicketSale>;
  readonly distance?: number | null;
  readonly avg_duration?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Route = LazyLoading extends LazyLoadingDisabled ? EagerRoute : LazyRoute

export declare const Route: (new (init: ModelInit<Route, RouteMetaData>) => Route) & {
  copyOf(source: Route, mutator: (draft: MutableModel<Route, RouteMetaData>) => MutableModel<Route, RouteMetaData> | void): Route;
}

type EagerRouteImage = {
  readonly id: string;
  readonly url?: string | null;
  readonly tags?: string | null;
  readonly caption?: string | null;
  readonly routeID: string;
  readonly Route?: Route | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRouteImage = {
  readonly id: string;
  readonly url?: string | null;
  readonly tags?: string | null;
  readonly caption?: string | null;
  readonly routeID: string;
  readonly Route: AsyncItem<Route | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RouteImage = LazyLoading extends LazyLoadingDisabled ? EagerRouteImage : LazyRouteImage

export declare const RouteImage: (new (init: ModelInit<RouteImage, RouteImageMetaData>) => RouteImage) & {
  copyOf(source: RouteImage, mutator: (draft: MutableModel<RouteImage, RouteImageMetaData>) => MutableModel<RouteImage, RouteImageMetaData> | void): RouteImage;
}

type EagerTicket = {
  readonly id: string;
  readonly busID: string;
  readonly Bus?: Bus | null;
  readonly price: number;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTicket = {
  readonly id: string;
  readonly busID: string;
  readonly Bus: AsyncItem<Bus | undefined>;
  readonly price: number;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ticket = LazyLoading extends LazyLoadingDisabled ? EagerTicket : LazyTicket

export declare const Ticket: (new (init: ModelInit<Ticket, TicketMetaData>) => Ticket) & {
  copyOf(source: Ticket, mutator: (draft: MutableModel<Ticket, TicketMetaData>) => MutableModel<Ticket, TicketMetaData> | void): Ticket;
}

type EagerScheduleBus = {
  readonly id: string;
  readonly schedule: Schedule;
  readonly bus: Bus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyScheduleBus = {
  readonly id: string;
  readonly schedule: AsyncItem<Schedule>;
  readonly bus: AsyncItem<Bus>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ScheduleBus = LazyLoading extends LazyLoadingDisabled ? EagerScheduleBus : LazyScheduleBus

export declare const ScheduleBus: (new (init: ModelInit<ScheduleBus, ScheduleBusMetaData>) => ScheduleBus) & {
  copyOf(source: ScheduleBus, mutator: (draft: MutableModel<ScheduleBus, ScheduleBusMetaData>) => MutableModel<ScheduleBus, ScheduleBusMetaData> | void): ScheduleBus;
}

type EagerDriverSchedule = {
  readonly id: string;
  readonly schedule: Schedule;
  readonly driver: Driver;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDriverSchedule = {
  readonly id: string;
  readonly schedule: AsyncItem<Schedule>;
  readonly driver: AsyncItem<Driver>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DriverSchedule = LazyLoading extends LazyLoadingDisabled ? EagerDriverSchedule : LazyDriverSchedule

export declare const DriverSchedule: (new (init: ModelInit<DriverSchedule, DriverScheduleMetaData>) => DriverSchedule) & {
  copyOf(source: DriverSchedule, mutator: (draft: MutableModel<DriverSchedule, DriverScheduleMetaData>) => MutableModel<DriverSchedule, DriverScheduleMetaData> | void): DriverSchedule;
}

type EagerConductorSchedule = {
  readonly id: string;
  readonly schedule: Schedule;
  readonly conductor: Conductor;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConductorSchedule = {
  readonly id: string;
  readonly schedule: AsyncItem<Schedule>;
  readonly conductor: AsyncItem<Conductor>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ConductorSchedule = LazyLoading extends LazyLoadingDisabled ? EagerConductorSchedule : LazyConductorSchedule

export declare const ConductorSchedule: (new (init: ModelInit<ConductorSchedule, ConductorScheduleMetaData>) => ConductorSchedule) & {
  copyOf(source: ConductorSchedule, mutator: (draft: MutableModel<ConductorSchedule, ConductorScheduleMetaData>) => MutableModel<ConductorSchedule, ConductorScheduleMetaData> | void): ConductorSchedule;
}

type EagerRouteBus = {
  readonly id: string;
  readonly bus: Bus;
  readonly route: Route;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRouteBus = {
  readonly id: string;
  readonly bus: AsyncItem<Bus>;
  readonly route: AsyncItem<Route>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RouteBus = LazyLoading extends LazyLoadingDisabled ? EagerRouteBus : LazyRouteBus

export declare const RouteBus: (new (init: ModelInit<RouteBus, RouteBusMetaData>) => RouteBus) & {
  copyOf(source: RouteBus, mutator: (draft: MutableModel<RouteBus, RouteBusMetaData>) => MutableModel<RouteBus, RouteBusMetaData> | void): RouteBus;
}