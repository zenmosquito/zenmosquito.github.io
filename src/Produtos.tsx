import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import theme from "./theme";

const velaszm = [
  {
    img: "./velazen.png",
    author: "ZenMosquito",
  },
  {
    img: "./butia.png",
    author: "Butiá",
  },
  {
    img: "./abaca.png",
    author: "Abacá",
  },
  {
    img: "./santarem.png",
    author: "Santarém",
  },
  {
    img: "./bangla.png",
    author: "Bangladesh",
  },
  {
    img: "./eco.png",
    author: "Eco-Esfera",
  },
  {
    img: "./raw.png",
    author: "Raw",
  },
  {
    img: "./ramie.png",
    author: "Ramie",
  },
  {
    img: "./upshot.png",
    author: "",
  },
];

// Linha ZenDecor

const velaszd = [
  {
    img: "./bowl.png",
    author: "Bowl Cerâmica",
  },
  {
    img: "./totem.png",
    author: "Totem",
  },
];

export default function Projects() {
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
        Produtos
      </Typography>
      {/* Linha ZenMosquito */}
      <Typography
        color={theme.palette.bodytext.main}
        variant="body1"
        sx={{ mt: 3, pt: 2, fontWeight: "bold" }}
      >
        Linha ZenMosquito
      </Typography>
      <Typography color={theme.palette.bodytext.main} variant="caption">
        Velas com nossos blends de óleos essenciais.
      </Typography>
      <ImageList sx={{ mx: "auto" }} variant="masonry" cols={3} gap={8}>
        {velaszm.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt="velas-img"
              loading="lazy"
              style={{ borderRadius: "0.5rem" }}
            />
            <ImageListItemBar subtitle={item.author} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
      {/* Zen Decor */}
      <Typography
        color={theme.palette.bodytext.main}
        variant="body1"
        sx={{ mt: 3, pt: 2, fontWeight: "bold" }}
      >
        Linha ZenDecor
      </Typography>
      <Typography color={theme.palette.bodytext.main} variant="caption">
        Velas prefeitas para decoração. Sem óleos essenciais.
      </Typography>
      <ImageList sx={{ mx: "auto" }} variant="masonry" cols={3} gap={8}>
        {velaszd.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt="velas-img"
              loading="lazy"
              style={{ borderRadius: "0.5rem" }}
            />
            <ImageListItemBar subtitle={item.author} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
