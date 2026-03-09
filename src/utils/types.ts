type Department = {
  _id: string;
  name: string;
  admin: string;
  configurations: any;
  sector: any;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
};

type Station = {
  _id: string;
  name: string;
  address: string;
  location: any;
  capacity: number;
  distance: number;
  is_active: boolean;
  availablePlaces: number;
  createdAt: string;
  updatedAt: string;
};

type DeviceType = {
  name: string;
  id: number;
};

type CurrentLocation = {
  type: "Point";
  coordinates: [number, number];
};

export type Car = {
  _id: string;
  make: string;
  model: string;
  car_type: string;
  sequence_number: string;
  license_plate: string;
  color: string;

  department: Department;

  image_plate: string;

  current_station: Station;

  status: string;
  fuel_type: string;

  image: string;

  upcoming_maintenance: string | null;

  current_location: CurrentLocation;

  device_type: DeviceType;

  serial_number: string;

  is_active: boolean;

  createdAt: string;
  updatedAt: string;

  trip: any[];
};
