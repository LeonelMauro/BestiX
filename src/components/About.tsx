import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PaletteIcon from "@mui/icons-material/Palette";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const features = [
  {
    title: "Calidad garantizada",
    description: "Control de cada prenda antes de salir del taller.",
    icon: <VerifiedIcon />,
  },
  {
    title: "Entregas puntuales",
    description: "Cumplimos los plazos pactados. Sin sorpresas.",
    icon: <ScheduleIcon />,
  },
  {
    title: "Asesoramiento de diseño",
    description: "Te ayudamos a elegir colores, técnicas y telas.",
    icon: <PaletteIcon />,
  },
  {
    title: "Envíos a todo el país",
    description: "Logística confiable hasta la puerta de tu empresa.",
    icon: <LocalShippingIcon />,
  },
  {
    title: "Mínimos accesibles",
    description: "Trabajamos con pymes y grandes empresas por igual.",
    icon: <GroupsIcon />,
  },
  {
    title: "+10 años de experiencia",
    description: "Cientos de empresas ya visten Bestix.",
    icon: <WorkspacePremiumIcon />,
  },
];

const About = () => {
  return (
    <Box
      id="sobre-nosotros"
      sx={{
        backgroundColor: "#FFFFFF",
        py: { xs: 10, md: 14 },
        scrollMarginTop: "70px",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "5fr 7fr",
            },
            gap: 6,
            alignItems: "center",
          }}
        >
          {/* TEXTO */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                textAlign: {
                  xs: "center",
                  md: "center",
                  lg: "left",
                },
              }}
            >
              <Typography
                sx={{
              color: "#DF1E25",
              fontSize: "20px",
              fontWeight: 700,
              mb: 2,
              letterSpacing: "0.5px",
            }}
              >
                ¿Por qué Bestix?
              </Typography>

              <Typography
                sx={{
                  color: "#111827",
                  fontSize: {
                    xs: "38px",
                    md: "52px",
                  },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  mb: 3,
                }}
              >
                El proveedor que tu empresa estaba buscando.
              </Typography>

              <Typography
                sx={{
                  color: "#6B7280",
                  fontSize: "16px",
                  lineHeight: 1.8,
                  maxWidth: "550px",
                  mx: {
                    xs: "auto",
                    lg: 0,
                  },
                }}
              >
                Trabajamos con seriedad, claridad y compromiso.
                Nuestro objetivo es que cada prenda represente
                lo mejor de tu marca.
              </Typography>
            </Box>
          </Box>


          {/* CARDS */}
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",      // Mobile
                sm: "1fr 1fr",  // Tablet
                lg: "1fr 1fr",  // Desktop
              },

              gap: 2,
            }}
          >
            {features.map((item) => (
              <Box
                key={item.title}
                sx={{
                  p: 2.5,
                  border: "1px solid #E5E7EB",
                  borderRadius: "16px",
                  transition: ".3s",
                  minHeight: "150px",

                  "&:hover": {
                    borderColor: "#DF1E25",
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 20px rgba(223,30,37,0.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    backgroundColor: "rgba(223,30,37,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 1.5,

                    "& svg": {
                      color: "#DF1E25",
                      fontSize: 24,
                    },
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    color: "#111827",
                    fontWeight: 600,
                    fontSize: "18px",
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#6B7280",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
          </Box>

      </Container>
    </Box>
  );
};

export default About;