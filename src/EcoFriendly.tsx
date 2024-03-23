import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import theme from "./theme";
import { Box, Button, alpha } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function EcoFriendly() {
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
        Eco-Friendly
      </Typography>
      <Container
        sx={{
          borderRadius: 2,
          boxShadow: "#7a7979 0 2px 10px 0",
        }}
      >
        <Typography
          color={theme.palette.bodytext.main}
          variant="body1"
          sx={{ mt: 3, pt: 2, fontWeight: "bold" }}
        >
          Sustentabilidade
        </Typography>
        <Typography
          color={theme.palette.bodytext.main}
          sx={{ my: 3, fontSize: 20, pb: 10 }}
        >
          Buscamos uma produção de baixo impacto ambiental, vegana e artesanal.
          <Typography
            color={theme.palette.bodytext.main}
            display="block"
            sx={{ my: 3, fontSize: 20 }}
          >
            Para cuidar do nosso planeta fazemos a reciclagem da Cera de Soja de
            todas as velas retornadas na área do Rio de Janeiro.
          </Typography>
          ✦ Devolvendo o vidro das velas de cachepô, pague apenas o refil!
          <Typography
            color={theme.palette.bodytext.main}
            display="block"
            sx={{ my: 3, fontSize: 20 }}
          >
            ✦ Devolvendo sua ZenMosquito vazia, ganhe 10% de desconto na compra
            de uma nova ZenMosquito!
          </Typography>
          Todo o resíduo de cera das velas devolvidas é reaproveitado na
          fabricação da nossa vela Eco-Esfera.
        </Typography>
        <Box
          alignItems={"center"}
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            top: "106%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
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
            Saiba mais e fale com a Zen!
          </Button>
          <img src="./mosquito.png" height={imgsize} width={imgsize} />
        </Box>
      </Container>
    </Container>
  );
}
