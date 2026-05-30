import { Box, Typography, Button, Container } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import heroImage from "../assets/hero-bestix.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
      background: `
      radial-gradient(
        circle at bottom right,
        rgba(223, 30, 37, 0.16) 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at top left,
        rgba(59, 130, 246, 0.10) 0%,
        transparent 35%
      ),
      #111827
    `,
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      pt: 20,
    }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 6,
            alignItems: "center",
          }}
        >
          {/* TEXTO */}
          <Box>
            <Box
              sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  ml: { xs: 0, md: 6 },
                  gap: 1,
                  px: 2,
                  py: 0.8,
                  borderRadius: "999px",
                  border: "1px solid #DF1E25",
                  backgroundColor: "rgba(223, 30, 37, 0.12)",
                  backdropFilter: "blur(10px)",
                  mb: 3,
              }}
              >
              <AutoAwesomeIcon
                  sx={{
                  color: "#DF1E25",
                  fontSize: "16px",
                  }}
              />

              <Typography
                  sx={{
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  }}
              >
                  INDUMENTARIA CORPORATIVA
              </Typography>
              </Box>

            <Typography
              variant="h1"
              sx={{
                 ml: { xs: 0, md: 6 },
                color: "#fff",
                fontWeight: 600,
                fontSize: { xs: "42px", md: "64px" },
                lineHeight: 1,
                mb: 3,
              }}
            >
              Vestí a tu equipo con la identidad de tu marca.
            </Typography>

            <Typography
              sx={{
                color: "#D1D5DB",
                fontSize: "18px",
                maxWidth: "540px",
                mb: 4,
                lineHeight: 1.8,
                 ml: { xs: 0, md: 6 },
              }}
            >
              En{" "}
              <Box
                component="span"
                sx={{
                  color: "#DF1E25",
                  fontWeight: 600,
                }}
              >
                Bestix
              </Box>{" "}
              fabricamos uniformes y ropa corporativa con estampado y
              bordado profesional para empresas.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
                ml: { xs: 0, md: 6 },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#DF1E25",

                  borderRadius: "999px",

                  px: 4,
                  py: 1.5,

                  textTransform: "none",

                  fontWeight: 600,
                  fontSize: "16px",

                  boxShadow: "none",

                  "&:hover": {
                    backgroundColor: "#b91c1c",
                    boxShadow: "none",
                  },
                }}
              >
                Pedir presupuesto
              </Button>

              <Button
                variant="outlined"
                startIcon={<WhatsAppIcon />}
                sx={{
                  color: "#FFFFFF",
                  borderColor: "rgba(255,255,255,0.25)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "999px",
                  px: 4,
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "16px",

                  "&:hover": {
                    borderColor: "#FFFFFF",
                    backgroundColor: "rgba(255,255,255,0.12)",
                  },
                }}
              >
                WhatsApp
              </Button>
            </Box>
          </Box>

          {/* IMAGEN */}
          <Box>
            <Box
              component="img"
              src={heroImage}
              alt="Bestix"
              sx={{
                width: "100%",
                borderRadius: "24px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;