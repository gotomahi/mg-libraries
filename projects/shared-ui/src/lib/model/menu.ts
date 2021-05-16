export class Menu {
  displayName: string;
  name: string;
  link?: string;
  allowedOnLogin: boolean;
  skipLocationChange?: boolean;
  menuSide?: string;
  accessRoles?: string;
  subMenu?: Menu[];
}
