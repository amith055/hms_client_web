export type MenuItem = {
  items: string[];
  calories: number;
};

export type DayMenu = {
  breakfast: MenuItem;
  lunch: MenuItem;
  dinner: MenuItem;
};

export type WeeklyMenu = {
  monday: DayMenu;
  tuesday: DayMenu;
  wednesday: DayMenu;
  thursday: DayMenu;
  friday: DayMenu;
  saturday: DayMenu;
  sunday: DayMenu;
};

export type Hostel = {
  id: string;
  hostelName: string;
  collegeName: string;
  city: string;
  state: string;
  address: string;
  adminNumber: string;
  adminUid: string;
  menu?: WeeklyMenu;
};
