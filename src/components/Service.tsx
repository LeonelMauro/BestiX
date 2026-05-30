import {
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PrintIcon from "@mui/icons-material/Print";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import bordado from "../assets/bordado.jpg";
import estampado from "../assets/estampado.jpg";
import uniformes from "../assets/uniformes.jpg";


const services = [
  {
    title: "Bordados",
    description:
      "Terminaciones premium con bordados profesionales para empresas y marcas.",
    icon: <WorkspacePremiumIcon />,
    image: bordado,
  },

  {
    title: "Estampado DTF",
    description:
      "Impresión de alta calidad y máxima durabilidad para todo tipo de prendas.",
    icon: <PrintIcon />,
    image: estampado,
  },

  {
    title: "Uniformes empresariales",
    description:
      "Indumentaria corporativa personalizada para potenciar tu identidad.",
    icon: <BusinessCenterIcon />,
    image: uniformes,
  },

  {
    title: "Equipos deportivos",
    description:
      "Conjuntos personalizados para fútbol, hockey y otras disciplinas.",
    icon: <SportsSoccerIcon />,
    image: uniformes,

  },
];

const Services = () => {
  return (
    <Box
      id="service"
      sx={{
        backgroundColor: "#ffffffff",
        py: 10,
      }}
    >
      <Container maxWidth="xl">
        {/* TITULO */}
        <Box
          sx={{
            textAlign: "center",
            mb: 8,
          }}
        >
          <Typography
            sx={{
              color: "#DF1E25",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "2px",
              mb: 2,
            }}
          >
            SERVICIOS
          </Typography>

          <Typography
            sx={{
              color: "#000000ff",

              fontSize: {
                xs: "36px",
                md: "52px",
              },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Todo lo que tu marca necesita vestir
          </Typography>

          <Typography
            sx={{
              color: "#7C7373",
              maxWidth: "700px",
              mx: "auto",
              fontSize: "18px",
              lineHeight: 1.8,
              fontWeight: 700,
            }}
          >
            Diseñamos y producimos indumentaria personalizada
            con calidad profesional y terminaciones premium.
          </Typography>
        </Box>

        {/* CARDS */}
        <Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
          {services.map((service, index) => (
            <Grid size={{xs:12, sm:6, lg:3}} key={index}>
              <Box
                sx={{
                  backgroundColor: "#1F2937",
                  borderRadius: { xs: "18px", md: "24px" },
                  overflow: "hidden",
                  height: "100%",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all .3s ease",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderColor: "#DF1E25",
                    boxShadow: "0 20px 40px rgba(223,30,37,0.12)",
                  },

                  "&:hover img": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {/* IMAGEN */}
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: 320,
                  }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "0.4s",
                    }}
                  />

                  {/* ICONO */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      width: 60,
                      height: 60,
                      borderRadius: "16px",
                      backgroundColor: "#DF1E25",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      "& svg": {
                        color: "#fff",
                        fontSize: 30,
                      },
                    }}
                  >
                    {service.icon}
                  </Box>
                </Box>

                {/* CONTENIDO */}
                <Box sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "24px",
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#D1D5DB",
                      lineHeight: 1,
                      fontSize: "14px",
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;