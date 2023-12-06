import { Menu, SearchRounded } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useCallback, useMemo } from "react";
const drawerWidth = 240;
interface Props {
  window?: () => Window;
}
function Navbar(props: Props) {
  //#region Drawer
  const { window } = props;

  const drawerItems: {
    label: string;
    href?: string;
  }[] = useMemo(() => [{ label: "Trang chủ", href: "/" }], []);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prevState) => !prevState);
  }, []);

  const drawer = useMemo(
    () => (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
        <Divider />
        <List>
          {drawerItems.map((item, i) => (
            <ListItem key={i} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                href={item.href ?? "#"}
              >
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "caption.fontSize",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    },
                  }}
                  primary={item.label}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    ),
    [drawerItems]
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  //#endregion

  return (
    <Box
      component={"div"}
      id="headerApp"
      sx={{ display: "flex", height: "fit-content" }}
    >
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "common.white",
          boxShadow: "none",
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <Menu />
            </IconButton>
            <Box
              sx={{
                direction: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: 4,
                py: 1,
              }}
            >
              {/* LOGO */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Box
                  component={"img"}
                  src="https://themes.pixelstrap.com/fastkart/assets/images/logo/1.png"
                  sx={{
                    maxWidth: 100,
                    mr: 1,
                    pointerEvents: "none",
                  }}
                />
                <Box
                  sx={{
                    p: 1,
                    border: 1,
                    borderColor: "grey.300",
                    mr: 1,
                  }}
                >
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: "grey.300",
                      aspectRatio: "1/1",
                    }}
                  >
                    <Menu />
                  </Button>
                </Box>

                <TextField
                  placeholder="Tìm kiếm ..."
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                direction: "row",
                alignItems: "center",
                justifyContent: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              {/* Search */}
              <IconButton
                color="primary"
                size="small"
                sx={{
                  mx: 2,
                }}
              >
                <SearchRounded fontSize="inherit" />
              </IconButton>

              <Divider variant="middle" orientation="vertical" />

              <IconButton
                color="primary"
                size="small"
                sx={{
                  mx: 2,
                }}
              >
                <SearchRounded fontSize="inherit" />
              </IconButton>
              <Divider variant="middle" orientation="vertical" />

              <IconButton
                color="primary"
                size="small"
                sx={{
                  mx: 2,
                }}
              >
                <SearchRounded fontSize="inherit" />
              </IconButton>
              <Divider variant="middle" orientation="vertical" />

              <IconButton
                color="primary"
                size="small"
                sx={{
                  mx: 2,
                }}
              >
                <SearchRounded fontSize="inherit" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
}

export default Navbar;
