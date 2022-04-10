import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect } from "react";
export default function BackdropLoading({ showBackdrop }) {
  //const

  //hook

  //methods

  // UI
  return (
    <Backdrop
      style={{
        zIndex: 999,
        color: "#fff",
      }}
      open={showBackdrop}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
