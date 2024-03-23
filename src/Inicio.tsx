import { Box, Button, alpha } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import theme from "./theme";

export default function Inicio() {
  const imgsize = 40;

  return (
    <Box
      alignItems={"center"}
      sx={{
        width: "100vw",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        top: "94%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src="./mosquito.png" height={imgsize} width={imgsize} />
      <Button
        href="https://wa.me/5521993057239"
        target="_blank"
        component="a"
        startIcon={<WhatsAppIcon />}
        sx={{
          color: theme.palette.secondary.main,
          fontSize: 15,
          backgroundColor: alpha(theme.palette.primary.main, 0.5),
          px: 1.5,
          py: 0.5,
          mx: 1,
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        Fale com a Zen!
      </Button>
      <img src="./mosquito.png" height={imgsize} width={imgsize} />
    </Box>
  );
}
