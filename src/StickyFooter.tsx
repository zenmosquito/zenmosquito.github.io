import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import theme from "./theme";
import { useCurrentPath } from "./Router";
import { Block } from "@mui/icons-material";

function BuiltBy() {
  return (
    <Typography
      align="center"
      variant="body2"
      color={theme.palette.secondary.main}
      fontSize={15}
    >
      {"by "}
      <Link color="inherit" href="https://jasmincortez.github.io/WebDev/">
        Jasmin Cortez
      </Link>
      {", "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        mt: 2,
        zIndex: 99,
        display: useCurrentPath() === "/inicio" ? "none" : "block",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
          }}
        >
          <BuiltBy />
        </Container>
      </Box>
    </Box>
  );
}
