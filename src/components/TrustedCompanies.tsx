import { Box, Container, Typography } from "@mui/material";

const companies = [
  "INDUSTRIAS SUR",
  "TECHCORP",
  "LOGÍSTICA AR",
  "SALUD+",
  "AGRO PAMPA",
  "CONSTRUCT",
];

const TrustedCompanies = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e9e9f0ff",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        {/* TITULO */}
        <Typography
          sx={{
            color: "#7C7373",
            textAlign: "center",
            fontSize: "12px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Empresas que confían en{" "}
          <Box
            component="span"
            sx={{
              color: "#DF1E25",
              fontWeight: 600,
            }}
          >
            Bestix
          </Box>
        </Typography>

        {/* EMPRESAS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: { xs: 4, md: 4 },
            mb: 3,
          }}
        >
          {companies.map((company, index) => (
            <Typography
              key={index}
              sx={{
                color: "#9CA3AF",

                fontSize: {
                  xs: "12px",
                  md: "14px",
                },
                fontWeight: 600,
                letterSpacing: "1px",
                transition: ".3s",
                cursor: "pointer",
                "&:hover": {
                  color: "#DF1E25",
                },
              }}
            >
              {company}
            </Typography>
          ))}
        </Box>

        {/* LINEA */}
        <Box
          sx={{
            width: "100%",
            height: "4px",
            background:
              "linear-gradient(to right, transparent, rgba(0, 0, 0, 0), transparent)",
          }}
        />
      </Container>
    </Box>
  );
};

export default TrustedCompanies;