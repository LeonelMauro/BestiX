import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "¿Cuál es la cantidad mínima de pedido?",
    answer:
      "Trabajamos desde 10 prendas para bordado y desde 20 para estampado. Consultanos por proyectos menores.",
  },
  {
    question: "¿Cuánto demora un pedido?",
    answer:
      "Entre 7 y 15 días hábiles según la cantidad y la técnica. Para pedidos urgentes coordinamos plazos especiales.",
  },
  {
    question: "¿Puedo enviarles mi propia ropa para personalizar?",
    answer:
      "Sí. Aceptamos prendas del cliente previa evaluación del material y la técnica adecuada.",
  },
  {
    question: "¿Hacen muestras antes de producir?",
    answer:
      "Sí, enviamos arte digital sin cargo y muestra física con costo a cuenta del pedido final.",
  },
];

const Faq = () => {
  return (
    <Box
      id="faq"
      sx={{
        backgroundColor: "#ffffff",
        py: {
          xs: 8,
          md: 10,
          lg: 12,
        },
      }}
    >
      <Container maxWidth="lg">
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
            PREGUNTAS FRECUENTES
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
            Resolvemos tus dudas
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
            Respondemos las consultas más habituales sobre
            bordados, estampados, uniformes corporativos y
            pedidos personalizados.
          </Typography>
        </Box>

        {/* FAQ */}
        <Box
          sx={{
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              disableGutters
              sx={{
                backgroundColor: "#1F2937",
                color: "#FFFFFF",
                borderRadius: "18px !important",
                mb: 2,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "none",

                "&:before": {
                  display: "none",
                },

                "&.Mui-expanded": {
                  borderColor: "#DF1E25",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#DF1E25",
                    }}
                  />
                }
                sx={{
                  px: {
                    xs: 2,
                    md: 3,
                  },
                  py: 1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: {
                      xs: "16px",
                      md: "18px",
                    },
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  px: {
                    xs: 2,
                    md: 3,
                  },
                  pb: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#D1D5DB",
                    lineHeight: 1.8,
                    fontSize: {
                      xs: "14px",
                      md: "15px",
                    },
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Box
         sx={{
            mt: {
               xs: 6,
               md: 8,
            },
            maxWidth: "900px",
            mx: "auto",
            borderRadius: {
               xs: "20px",
               md: "24px",
            },
            background: `
               radial-gradient(
               circle at top right,
               rgba(255,255,255,0.08) 0%,
               transparent 35%
               ),
               #1F2937
            `,
            border: "1px solid rgba(255,255,255,0.06)",
            p: {
               xs: 3,
               md: 5,
            },
            textAlign: "center",
         }}
         >
        <Typography
         sx={{
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: {
               xs: "1.8rem",
               md: "2.4rem",
            },
            lineHeight: 1.1,
            mb: 2,
         }}
         >
         ¿Listo para vestir a tu equipo?
         </Typography>

        <Typography
            sx={{
               color: "#D1D5DB",
               maxWidth: "600px",
               mx: "auto",
               fontSize: {
                  xs: "14px",
                  md: "16px",
               },
               lineHeight: 1.7,
               mb: 3,
            }}
            >
            Respondé un breve formulario y en menos de 24 horas
            tendrás tu presupuesto sin compromiso.
            </Typography>
        <Button
            component="a"
            href="#contact"
            variant="contained"
            sx={{
               backgroundColor: "#DF1E25",
               borderRadius: "999px",
               px: 4,
               py: 1.3,
               fontSize: "15px",
               fontWeight: 600,
               textTransform: "none",

               "&:hover": {
                  backgroundColor: "#c81920",
               },
            }}
            >
            Solicitar presupuesto
            </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Faq;