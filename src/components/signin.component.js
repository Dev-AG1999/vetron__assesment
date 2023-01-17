import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Lottie from "react-lottie";
import animationData from "../assets/onboarding.json";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Logo from "../assets/icon.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function SignIn({
  username,
  password,
  onUserName,
  onPassword,
  onSubmit,
  res_error,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          background: "#09134D",
          borderWidth: 2,
          borderRadius: "2%",
        }}
      >
        <CssBaseline />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
            }}
            height={250}
            width={250}
          />
          <img width={400} height={80} src={Logo} />
        </Grid>

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoFocus
            onChange={onUserName}
            value={username || ""}
            autoComplete="off"
            style={{
              backgroundColor: "#f6ddc5",
              borderRadius: 10,
              color: "#39E062",
            }}
            InputProps={{
              style: {
                // color: "#09134D",
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={onPassword || ""}
            value={password}
            autoComplete="off"
            style={{
              backgroundColor: "#f6ddc5",
              borderRadius: 10,
              color: "#39E062",
            }}
            InputProps={{
              style: {
                color: "red",
              },
            }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onSubmit}
            style={{ backgroundColor: "#39E062", padding: 20 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
        {res_error !== null && (
          <span style={{ color: "#F5F2EF", fontSize: 20 }}>{res_error}</span>
        )}
      </Container>
    </ThemeProvider>
  );
}
