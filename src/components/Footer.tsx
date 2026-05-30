import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#111827",
        color: "white",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* Logo */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              BESTIX
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#B0B0B0", maxWidth: 300 }}
            >
              Transformamos ideas en soluciones digitales para
              empresas que buscan crecer mediante la tecnología.
            </Typography>
          </Grid>

          {/* Navegación */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography sx={{ fontWeight: "bold" , mb: 2}}>
              Navegación
            </Typography>

            <Typography variant="body2">Inicio</Typography>
            <Typography variant="body2">Servicios</Typography>
            <Typography variant="body2">Nosotros</Typography>
            <Typography variant="body2">Contacto</Typography>
          </Grid>

          {/* Contacto */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography sx={{ fontWeight: "bold" , mb: 2}} >
              Contacto
            </Typography>

            <Typography variant="body2">
              info@bestix.com
            </Typography>

            <Typography variant="body2">
              Mendoza, Argentina
            </Typography>
          </Grid>

          {/* Redes */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography sx={{ fontWeight: "bold" , mb: 2}}>
              Seguinos
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>

              <IconButton sx={{ color: "white" }}>
                <InstagramIcon />
              </IconButton>

              <IconButton sx={{ color: "white" }}>
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            mt: 5,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#B0B0B0" }}
          >
            © 2026 Bestix. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;