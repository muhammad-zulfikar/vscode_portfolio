import { Linkable } from './Linkable';

export interface ContactItem extends Linkable {
  text?: string;
  name: string;
  icon: string | string[];
  url: string;
  isMain?: boolean;
  isCenter?: boolean;
  badge?: any;
}
