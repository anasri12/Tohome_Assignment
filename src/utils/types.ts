export interface User {
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: "male" | "female";
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  height: number;
  weight: number;
  eyeColor: string;
  hair: hairType;
  ip: string;
  address: addressType;
  macAddress: string;
  university: string;
  bank: bankType;
  company: companyType;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: cryptoType;
  role: string;
}

export interface DepartmentSummary {
  male: number;
  female: number;
  ageRange: string;
  hair: Record<string, number>;
  addressUser: Record<string, string>;
}

export type TransformedDataType = Record<string, DepartmentSummary>;

interface hairType {
  color: string;
  type: string;
}

interface addressType {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: coordinatesType;
  country: string;
}

interface coordinatesType {
  lat: number;
  lng: number;
}

interface bankType {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface companyType {
  department: string;
  name: string;
  title: string;
  address: addressType;
}

interface cryptoType {
  coin: string;
  wallet: string;
  network: string;
}
