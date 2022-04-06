import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ padding: "15px 0px" }}
        >
          EazySpace
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
