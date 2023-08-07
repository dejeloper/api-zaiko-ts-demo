export interface IPersons {
  name: string;
  lastName: string;
  documentType: number;
  documentNumber: string;
  dateBirthday: Date;
  state: number;
  enabled?: boolean;
  dateCreated?: Date;
  UserCreated?: string;
  DateUpdate?: Date;
  UserUpdate?: string;
}
