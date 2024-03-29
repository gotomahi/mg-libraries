import {User} from './user';

export class Customer {
  id: number;
  companyName: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  type: string;
  occupation: string;
  address: string;
  phone: string;
  status: string;
  createdDate: Date;
  selected: boolean;
  user: User;
}
