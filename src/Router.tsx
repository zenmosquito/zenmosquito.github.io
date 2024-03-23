import {
  Link,
  createBrowserRouter,
  Navigate,
  useLocation,
  matchRoutes,
} from "react-router-dom";
import NotFound from "./NotFound";
import QuemSomos from "./QuemSomos";
import Produtos from "./Produtos";
import App from "./App";
import theme from "./theme";
import { Button, ListItem } from "@mui/material";
import EcoFriendly from "./EcoFriendly";
import Contatos from "./Contatos";
import Inicio from "./Inicio";

export interface RouteDefinition {
  label: string;
  aria: string;
  to: string;
  element: JSX.Element;
}

export const BASE_URL = "/acting-portfolio-boilerplate/";

export const routes: RouteDefinition[] = [
  {
    label: "Início",
    aria: "Navigate to inicio",
    to: "inicio",
    element: <Inicio />,
  },
  {
    label: "Quem Somos",
    aria: "Navigate to quem somos",
    to: "quem-somos",
    element: <QuemSomos />,
  },
  {
    label: "Eco-Friendly",
    aria: "Navigate to eco friendly",
    to: "eco-friendly",
    element: <EcoFriendly />,
  },
  {
    label: "Produtos",
    aria: "Navigate to produtos",
    to: "produtos",
    element: <Produtos />,
  },
  {
    label: "Contatos",
    aria: "Navigate to contatos",
    to: "contatos",
    element: <Contatos />,
  },
];

export const useCurrentPath = () => {
  const location = useLocation();
  return location.pathname;
};

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Navigate to="/inicio" replace />,
        },
        ...routes.map((route) => {
          return {
            path: route.to,
            element: route.element,
          };
        }),
      ],
    },
  ],
  {
    basename: BASE_URL,
  }
);

export type RouterLinkProps = {
  to: string;
  label: string;
  color?: string;
};

export function RouterLink(props: RouterLinkProps) {
  return (
    <Link to={props.to}>
      <Button
        sx={{
          color: props.color || theme.palette.secondary.main,
          mx: 2,
          fontSize: 20,
          "&:hover": { color: theme.palette.highlight.main },
        }}
      >
        {props.label}
      </Button>
    </Link>
  );
}

export function ListRouterLink(props: RouterLinkProps) {
  return (
    <ListItem disablePadding sx={{ justifyContent: "center" }}>
      <Link
        to={props.to}
        style={{ width: "100%", textDecoration: "none", padding: "0 1rem" }}
      >
        <Button
          fullWidth
          sx={{
            color: theme.palette.secondary.main,
            my: 1,
            fontSize: 20,
          }}
        >
          {props.label}
        </Button>
      </Link>
    </ListItem>
  );
}
