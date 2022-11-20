export type Props = {
  icon?: JSX.Element;
  href?: string;
  title: string;
  items?: IMenuItem[];
  onClose: (() => void) | undefined;
};
