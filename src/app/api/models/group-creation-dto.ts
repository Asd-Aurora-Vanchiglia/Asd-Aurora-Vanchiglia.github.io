/* tslint:disable */
/* eslint-disable */
import { ContactCreationDto } from './contact-creation-dto';
export interface GroupCreationDto {
  contacts?: Array<ContactCreationDto>;
  description?: string;
  onMenu?: boolean;
  title?: string;
}
