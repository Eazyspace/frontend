import { Backdrop, CircularProgress } from "@mui/material";

export default function BackdropLoading({ showBackdrop }) {
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
