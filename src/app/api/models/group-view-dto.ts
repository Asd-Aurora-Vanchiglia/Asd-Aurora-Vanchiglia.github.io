/* tslint:disable */
/* eslint-disable */
import { Contact } from './contact';
export interface GroupViewDto {
  contacts?: Array<Contact>;
  coverImageId?: string;
  description?: string;
  id?: string;
  onMenu?: boolean;
  title?: string;
  titleLinkParsed?: string;
}
