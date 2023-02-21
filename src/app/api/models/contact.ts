/* tslint:disable */
/* eslint-disable */
export interface Contact {
  id?: string;
  type?: 'ContactType.FACEBOOK(label=facebook)' | 'ContactType.INSTAGRAM(label=instagram)' | 'ContactType.TELEPHONE(label=telephone)' | 'ContactType.EMAIL(label=email)';
  value: string;
}
