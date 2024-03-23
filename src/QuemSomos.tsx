import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import theme from "./theme";

export default function Bio() {
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
        Quem somos?
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
          Sobre a Zen
        </Typography>
        <Typography
          color={theme.palette.bodytext.main}
          sx={{ my: 3, fontSize: 20, pb: 2 }}
        >
          A ZenMosquito é uma marca carioca de velas artesanais.
          <Typography
            color={theme.palette.bodytext.main}
            display="block"
            sx={{ my: 3, fontSize: 20 }}
          >
            A única vela repelente vegana e eco-friendly do mercado. Além de
            repelente, nosso blend ZenMosquito é aromaterapêutico. E para
            acalmar a alma, temos também o blend Lavanda com Laranja. Todos
            feitos com óleos essenciais 100% puros!
          </Typography>
          A base das velas, de cera de soja ecológica, é livre de parabenos,
          portanto ao serem queimadas as velas não emitem nenhum tipo de
          substância nociva à saúde.
          <Typography
            color={theme.palette.bodytext.main}
            display="block"
            sx={{ my: 3, fontSize: 20 }}
          >
            A produção das velas é feita em recipientes de vidros selecionados
            acomodadas em cachepôs de macramê; frutos de uma parceria com um
            artesão local.
          </Typography>
          Prezamos pelo consumo consciente e cuidamos do planeta, oferecendo
          refil na área do Rio de Janeiro para as velas em vidro e transformando
          todo resíduo de cera das velas devolvidas na Luminária Eco-Esfera.
        </Typography>
      </Container>
    </Container>
  );
}
