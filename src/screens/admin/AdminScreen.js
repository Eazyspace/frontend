import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  StyledAdminScreen,
  StyledAppBar,
  Main,
  StyledDrawer,
  DrawerHeader,
  FloorButton,
} from "./AdminScreen.styled";

function AdminScreen() {
  const [openedDrawer, setOpenedDrawer] = useState(true);

  const openingDrawer = () => {
    setOpenedDrawer(true);
  };
  const closingDrawer = () => {
    setOpenedDrawer(false);
  };

  return (
    <StyledAdminScreen>
      <StyledAppBar>
        <Toolbar>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ padding: "15px 0px" }}
          >
            EazySpace
          </Typography>
          <Button sx={{ backgroundColor: "transparent", color: "white" }}>
            Login
          </Button>
        </Toolbar>
      </StyledAppBar>
      <Box sx={{ display: "flex", height: "100%" }}>
        <StyledDrawer variant="persistent" anchor="left" open={openedDrawer}>
          <Grid
            container
            direction="column"
            sx={{ height: "100%", padding: "20px 10px 10px 10px" }}
          >
            <Grid item xs={1} />
            <Grid item xs={10}>
              <DrawerHeader>
                <IconButton aria-label="close-drawer" onClick={closingDrawer}>
                  <ArrowLeftRounded />
                </IconButton>
              </DrawerHeader>
              <TextField label="Search" />
              <FloorButton>
                <Typography variant="h5">Ground</Typography>
              </FloorButton>
            </Grid>
          </Grid>
        </StyledDrawer>
        <Main open={openedDrawer}>
          <IconButton
            aria-label="open-drawer"
            onClick={openingDrawer}
            sx={{ ...(openedDrawer && { display: "none" }) }}
          >
            <ArrowRightRounded />
          </IconButton>
          <p>
            Mollit sint minim velit labore. Ullamco ad quis non esse consequat
            ut velit laboris. Qui nulla fugiat Lorem exercitation occaecat sunt
            irure cupidatat elit irure laboris ut sint reprehenderit. Mollit
            proident exercitation anim consequat do in sint. Sint nisi aliqua
            labore consectetur eiusmod excepteur nostrud minim esse cupidatat
            excepteur fugiat amet adipisicing. Mollit sint eiusmod reprehenderit
            aliquip id elit. Reprehenderit nulla sint labore nisi nisi quis
            voluptate. Laborum voluptate ut velit laboris commodo incididunt.
            Non nisi velit occaecat quis ea consequat aliquip eu et elit.
            Pariatur ipsum veniam amet ullamco veniam nisi et veniam esse magna
            eu. Dolor et cupidatat sunt incididunt non do minim ipsum. Amet anim
            id labore occaecat pariatur voluptate nostrud adipisicing aliquip
            ipsum ullamco laboris pariatur. Deserunt consectetur cillum
            consequat qui incididunt ex aliqua et amet. Duis laboris incididunt
            est culpa fugiat commodo sit duis tempor. Sunt excepteur et proident
            exercitation quis est nisi eu aliqua. Reprehenderit dolore cupidatat
            sint do duis qui voluptate aliquip voluptate aliquip consequat
            consectetur voluptate et. Elit anim deserunt magna magna sit nulla
            excepteur aliqua ut sunt in velit. Officia excepteur eiusmod Lorem
            est exercitation duis aute ad irure consectetur non pariatur nostrud
            nisi. Laboris laborum culpa dolor reprehenderit. Sint velit
            consectetur commodo sit magna dolor ex consequat. Laborum ipsum
            irure magna est sunt in velit laboris sint culpa proident eu
            exercitation dolor. Lorem et ullamco tempor fugiat consectetur enim
            quis do. Sunt nisi ex enim elit nulla. Reprehenderit aute sit sint
            tempor sint adipisicing cillum sunt. Cupidatat qui magna esse culpa
            in. Laboris in labore ut ut dolore ullamco ad ut aute laborum sunt.
            Labore nostrud labore in deserunt reprehenderit commodo ad magna.
            Fugiat est aliqua dolore eiusmod dolore proident enim aute. Proident
            culpa ipsum et reprehenderit occaecat magna amet nulla sunt id.
            Adipisicing fugiat et ea minim commodo ex ex in minim est. Nostrud
            laboris do adipisicing voluptate fugiat. Minim ipsum culpa ut ea
            quis. Incididunt consectetur ut tempor est minim.
          </p>
          <p>
            Nisi sint laborum magna pariatur enim cupidatat sint. Est culpa id
            veniam dolore consectetur qui. Tempor veniam id consectetur dolore
            in pariatur velit ullamco tempor quis irure aute. Duis enim
            excepteur pariatur consectetur.
          </p>
          <p>
            Nisi sint laborum magna pariatur enim cupidatat sint. Est culpa id
            veniam dolore consectetur qui. Tempor veniam id consectetur dolore
            in pariatur velit ullamco tempor quis irure aute. Duis enim
            excepteur pariatur consectetur.
          </p>
        </Main>
      </Box>
    </StyledAdminScreen>
  );
}

export default AdminScreen;
