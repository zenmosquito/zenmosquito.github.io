import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <Container
      maxWidth="sm"
      component="main"
      sx={{ mt: 10, minHeight: "100dvh" }}
    >
      <Typography variant="h2" sx={{ mt: 3 }}>
        Oops!
      </Typography>
      <Typography variant="body1" sx={{ my: 1 }}>
        This page doesn't exist, sorry.
      </Typography>
    </Container>
  );
}
