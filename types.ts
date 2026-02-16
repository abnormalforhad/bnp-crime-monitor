export interface Incident {
  id: number;
  date: string;
  time: string;
  title: string;
  description: string;
  location: string;
  isBnpRelated: boolean;
  link: string;
}

export interface MapStat {
  location: string;
  count: number;
  colorClass: string;
  top: string;
  left: string;
}

export interface StatCard {
  label: string;
  value: string;
  icon: any;
  colorClass: string;
  iconBgClass: string;
  textClass: string;
}