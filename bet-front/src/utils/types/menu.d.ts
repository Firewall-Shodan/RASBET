interface IMenuItem {
  icon?: JSX.Element;
  title: string;
  href?: string;
  items?: IMenuItem[];
}
