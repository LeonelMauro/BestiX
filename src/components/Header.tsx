import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";

import logo from "../assets/g10.svg";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sections = [
    { id: "service", label: "Servicios" },
    { id: "work-process", label: "Procesos" },
    { id: "sobre-nosotros", label: "Nosotros" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",

          height: "60px",
          minHeight: "52px !important",

          px: { xs: 1.5, md: 4 },
        }}
      >
      
        {/* LOGO */}
        <Box
          component="img"
          src={logo}
          alt="Bestix"
          sx={{
            width: { xs: 90, md: 130 },
            objectFit: "contain",
            cursor: "pointer",
          }}
        />

        {/* MOBILE */}
        {isMobile ? (
          <>
            <IconButton onClick={() => setOpenDrawer(true)}>
              <MenuIcon sx={{ color: "#111827" }} />
            </IconButton>

            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
            >
              <Box
                sx={{
                  width: 200,
                  height: "100%",
                  backgroundColor: "#111827",
                  pt: 8,
                }}
              >
                <List>
                  {sections.map((section) => (
                    <ListItem
                      key={section.id}
                      sx={{
                        justifyContent: "center",
                      }}
                    >
                      <ScrollLink
                        to={section.id}
                        smooth={true}
                        duration={600}
                        offset={-80}
                        onClick={() => setOpenDrawer(false)}
                        style={{
                          color: "#ffffff",
                          textDecoration: "none",
                          cursor: "pointer",
                          fontWeight: 500,
                          fontSize: "16px",
                        }}
                      >
                        {section.label}
                      </ScrollLink>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          /* DESKTOP */
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            {sections.map((section) => (
              <ScrollLink
                key={section.id}
                to={section.id}
                smooth={true}
                duration={600}
                offset={-70}
                style={{
                  textDecoration: "none",
                  color: "#797272",
                  fontWeight: 400,
                  fontSize: "15px",
                  letterSpacing: "0.5px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  height: "80px",
                }}
              >
                {section.label}
              </ScrollLink>
            ))}

            {/* BOTÓN */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#DF1E25",
                borderRadius: "999px",
                px: 3,
                py: 1,
                textTransform: "none",
                fontWeight: 400,
                boxShadow: "none",

                "&:hover": {
                  backgroundColor: "#b91c1c",
                  boxShadow: "none",
                },
              }}
            >
              Pedir presupuesto
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;