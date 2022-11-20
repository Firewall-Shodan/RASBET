interface IRoutesPath {
  path: string;
  private: boolean;
  element: React.FC;
  outlets?: IRoutesPath[];
  name?: string;
}

type RouteWrapperProps = {
  isPrivate: boolean;
  element: React.FC;
};
