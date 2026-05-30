import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        background: `
          radial-gradient(
            circle at top left,
            rgba(223,30,37,0.08) 0%,
            transparent 40%
          ),
          #aac1d860
        `,
        py: {
          xs: 8,
          md: 12,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 2,
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: {
            xs: 6,
            md: 10,
          },
          alignItems: "center",
        }}
      >
        {/* IZQUIERDA */}
        <Box
          sx={{
            flex: 1,
            maxWidth: "520px",
            textAlign: {
              xs: "center",
              md: "left",
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
            CONTACTO
          </Typography>

          <Typography
            sx={{
              color: "#111827",
              fontWeight: 700,
              fontSize: {
                xs: "2rem",
                md: "3.2rem",
              },
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Hablemos de tu próximo pedido
          </Typography>

          <Typography
            sx={{
              color: "#6B7280",
              fontSize: {
                xs: "15px",
                md: "18px",
              },
              lineHeight: 1.8,
              mb: 5,
            }}
          >
            Completá el formulario o escribinos directamente.
            Respondemos en horario laboral en menos de 24 horas.
          </Typography>

          {/* CONTACT ITEMS */}
          <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1, md: 0.5 },
            }}
            >
            {[
              {
                icon: <WhatsAppIcon />,
                text: "WhatsApp directo",
              },
              {
                icon: <EmailIcon />,
                text: "ventas@bestix.com",
              },
              {
                icon: <PhoneIcon />,
                text: "+54 11 0000 0000",
              },
              {
                icon: <LocationOnIcon />,
                text: "Mendoza, Argentina",
              },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor: "#FFFFFF",
                  p: 0.7,
                  borderRadius: "16px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "12px",
                    backgroundColor: "rgba(223,30,37,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#DF1E25",
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    color: "#111827",
                    fontWeight: 500,
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* DERECHA - FORM */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            backgroundColor: "#FFFFFF",
            borderRadius: "28px",
            p: {
              xs: 3,
              md: 5,
            },
            border: "1px solid #E5E7EB",
            boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                },
              gap: 2,
            }}
          >
            <TextField
              fullWidth
              label="Nombre *"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                  backgroundColor: "#FAFAFA",
                },
              }}
            />

            <TextField
              fullWidth
              label="Empresa *"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                  backgroundColor: "#FAFAFA",
                },
              }}
            />

            <TextField
              fullWidth
              label="Email *"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                  backgroundColor: "#FAFAFA",
                },
              }}
            />

            <TextField
              fullWidth
              label="Teléfono"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                  backgroundColor: "#FAFAFA",
                },
              }}
            />

            <Box sx={{ gridColumn: "1 / -1" }}>
              <TextField
                fullWidth
                multiline
                rows={5}
                label="Contanos tu proyecto *"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "14px",
                    backgroundColor: "#FAFAFA",
                  },
                }}
              />
            </Box>
          </Box>

          <Typography
            sx={{
              color: "#6B7280",
              fontSize: "14px",
              mt: 2,
              mb: 2,
              textAlign: "center",
            }}
          >
            Sin compromiso. Te respondemos en menos de 24 hs.
          </Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#DF1E25",
              borderRadius: "999px",
              py: 1.8,
              fontSize: "16px",
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "none",

              "&:hover": {
                backgroundColor: "#C51920",
              },
            }}
          >
            Solicitar presupuesto
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;