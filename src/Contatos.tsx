import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import theme from "./theme";
import { Box } from "@mui/material";

export default function Contact() {
  const imgsize = 40;
  return (
    <Container
      maxWidth="sm"
      component="main"
      sx={{ mt: 10, minHeight: "100dvh", zIndex: 99 }}
    >
      <Typography
        textAlign={"center"}
        variant="h5"
        color={theme.palette.bodytext.main}
        sx={{ mt: 3 }}
      >
        Contatos
      </Typography>
      <img
        src="./sandra.jpeg"
        style={{
          width: "50%",
          borderRadius: "50%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 40,
        }}
      />
      <Typography
        color={theme.palette.bodytext.main}
        variant="body1"
        textAlign={"center"}
        sx={{ mt: 3, fontSize: 20 }}
      >
        Perguntas? Encomendas?
      </Typography>
      <Typography
        color={theme.palette.bodytext.main}
        variant="body1"
        textAlign={"center"}
        sx={{ fontWeight: "bold", fontSize: 20 }}
      >
        Fale com a Zen!
      </Typography>
      <Stack spacing={4} alignItems="center" sx={{ mt: 5 }}>
        {/* WhatsApp button */}
        <Box
          alignItems={"center"}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="./mosquito.png" height={imgsize} width={imgsize} />
          <Button
            href="https://wa.me/5521993057239"
            target="_blank"
            component="a"
            startIcon={<WhatsAppIcon />}
            sx={{
              color: theme.palette.primary.main,
              fontSize: 15,
              backgroundColor: theme.palette.secondary.main,
              px: 1.5,
              py: 0.5,
              mx: 1,
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { color: theme.palette.highlight.main },
            }}
          >
            Faça seu pedido!
          </Button>
          <img src="./mosquito.png" height={imgsize} width={imgsize} />
        </Box>
        {/* Email button */}
        <Box
          alignItems={"center"}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            target="_blank"
            href="mailto:zenmosquito10@gmail.com"
            component="a"
            startIcon={<AlternateEmailIcon />}
            sx={{
              color: theme.palette.secondary.main,
              fontSize: 15,
              px: 1.5,
              py: 0.5,
              mx: 1,
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { color: theme.palette.highlight.main },
            }}
          >
            Email
          </Button>
          {/* Instagram button */}

          <Button
            target="_blank"
            href="https://www.instagram.com/zenmosquito/"
            component="a"
            startIcon={<InstagramIcon />}
            sx={{
              color: theme.palette.secondary.main,
              fontSize: 15,
              px: 1.5,
              py: 0.5,
              mx: 1,
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { color: theme.palette.highlight.main },
            }}
          >
            Instagram
          </Button>
          {/* <Button
            target="_blank"
            href="https://tiktok.com/@zen.mosquito"
            component="a"
            startIcon={<InstagramIcon />}
            sx={{
              color: theme.palette.secondary.main,
              fontSize: 15,
              px: 1.5,
              py: 0.5,
              mx: 1,
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { color: theme.palette.highlight.main },
            }}
          >
            TikTok
          </Button> */}
        </Box>
      </Stack>
    </Container>
  );
}
