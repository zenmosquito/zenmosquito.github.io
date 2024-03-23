import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import theme from "./theme";

const velas = [
  {
    img: "./velazen.png",
    author: "ZenMosquito",
  },
  {
    img: "./raw.png",
    author: "Raw",
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
    img: "./abaca.png",
    author: "Abacá",
  },
  {
    img: "./ramie.png",
    author: "Ramie",
  },
  {
    img: "./eco.png",
    author: "Eco-Esfera",
  },
  {
    img: "./butia.png",
    author: "Butiá",
  },
  {
    img: "./totem.png",
    author: "ZenDecor Totem",
  },
  {
    img: "./bowl.png",
    author: "ZenDecor Bowl",
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
      <ImageList sx={{ mx: "auto" }} variant="masonry" cols={3} gap={8}>
        {velas.map((item) => (
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
