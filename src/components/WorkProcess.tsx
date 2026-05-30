import { Box, Typography, Container, Grid } from "@mui/material";

const steps = [
  {
    number: "01",
    title: "Contanos tu necesidad",
    description:
      "Cantidad, tipo de prenda y logo. Te respondemos en menos de 24 hs.",
  },
  {
    number: "02",
    title: "Diseño y muestra",
    description:
      "Preparamos el arte digital y, si querés, una muestra física.",
  },
  {
    number: "03",
    title: "Producción",
    description:
      "Bordamos o estampamos con control de calidad en cada etapa.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Empaquetado profesional y envío a la dirección que indiques.",
  },
];

const WorkProcess = () => {
  return (
    <Box
      id="work-process"
      sx={{
        backgroundColor: "#ffffff",
        py: {
          xs: 8,
          md: 10,
          lg: 12,
        },
      }}
    >
      <Container maxWidth="xl">
        {/* TITULO */}
        <Box
          sx={{
            textAlign: "center",
            mb: {
              xs: 6,
              md: 8,
            },
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
            CÓMO TRABAJAMOS
          </Typography>

          <Typography
            sx={{
              color: "#111827",
              fontWeight: 700,
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3.2rem",
              },
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Un proceso claro, sin sorpresas
          </Typography>

          <Typography
            sx={{
              color: "#6B7280",
              maxWidth: "700px",
              mx: "auto",
              px: { xs: 2, md: 0 },
              fontSize: {
                xs: "15px",
                md: "18px",
              },
              lineHeight: 1.8,
            }}
          >
            Desde el primer contacto hasta la entrega final, te
            acompañamos en cada etapa para garantizar un resultado
            profesional y a la altura de tu marca.
          </Typography>
        </Box>

        {/* CARDS */}
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {steps.map((step) => (
            <Grid
              key={step.number}
              size={{
                xs: 12,
                sm: 6,
                lg: 3,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  backgroundColor: "#1F2937",
                  borderRadius: {
                    xs: "18px",
                    md: "24px",
                  },
                  p: {
                    xs: 3,
                    md: 4,
                  },
                  minHeight: {
                    xs: 220,
                    md: 260,
                  },
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all .3s ease",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",

                  "@media (hover:hover)": {
                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: "#DF1E25",
                      boxShadow: "0 20px 40px rgba(223,30,37,0.12)",
                    },
                  },
                }}
              >
                              {/* NUMERO GIGANTE */}
                <Typography
                  sx={{
                    position: "absolute",
                    top: -20,
                    right: 10,
                    fontSize: {
                      xs: "90px",
                      md: "120px",
                    },
                    fontWeight: 900,
                    color: "rgba(255,255,255,0.08)",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {step.number}
                </Typography>


                {/* TITULO */}
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: {
                      xs: "20px",
                      md: "24px",
                    },
                    fontWeight: 600,
                    lineHeight: 1.3,
                    mb: 2,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {step.title}
                </Typography>

                {/* DESCRIPCION */}
                <Typography
                  sx={{
                    color: "#D1D5DB",
                    fontSize: {
                      xs: "14px",
                      md: "15px",
                    },
                    lineHeight: 1.8,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkProcess;