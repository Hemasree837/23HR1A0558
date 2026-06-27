<<<<<<< HEAD
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, AppBar, Toolbar, Typography, Container, Tabs, Tab, Box } from "@mui/material";
import { Notifications, PriorityHigh } from "@mui/icons-material";
import { Log, setToken } from "affordmed-logging-middleware";
import { NotificationsPage } from "./pages/NotificationsPage";
import PriorityPage from "./pages/PriorityPage";

const theme = createTheme({
  palette: { primary: { main: "#1565c0" }, background: { default: "#f5f7fa" } },
  typography: { fontFamily: "'Inter', -apple-system, sans-serif" },
});

setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrb3Rpa2FoZW1hc3JlZUBnbWFpbC5jb20iLCJleHAiOjE3ODI1Mzg5OTgsImlhdCI6MTc4MjUzODA5OCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjU5ZTBiNTlkLWRiNGEtNDNmMy1iZWExLThiN2FjNzI2Y2U4MiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImsgaGVtYXNyZWUiLCJzdWIiOiI4YWFjNWZiOC1mMzhjLTQ0ZGItOTNiNy0xMWVjZWY2ODIxMWIifSwiZW1haWwiOiJrb3Rpa2FoZW1hc3JlZUBnbWFpbC5jb20iLCJuYW1lIjoiayBoZW1hc3JlZSIsInJvbGxObyI6IjIzaHIxYTA1NTgiLCJhY2Nlc3NDb2RlIjoiYVRreWJzIiwiY2xpZW50SUQiOiI4YWFjNWZiOC1mMzhjLTQ0ZGItOTNiNy0xMWVjZWY2ODIxMWIiLCJjbGllbnRTZWNyZXQiOiJ4YVhmeXBYQmJueFdEZmd2In0.zRnxSAtLMlgywJDDcO4Y0Z8ZKvVB3uTejgu_dfz5Z9k");

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const tab = location.pathname === "/priority" ? 1 : 0;

  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar>
        <Notifications sx={{ mr: 1 }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Campus Notifications</Typography>
        <Tabs
          value={tab}
          onChange={(e, v) => {
            navigate(v === 0 ? "/" : "/priority");
            Log("frontend", "info", "component", `Navigated to ${v === 0 ? "All" : "Priority"} page`);
          }}
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab icon={<Notifications />} label="All" />
          <Tab icon={<PriorityHigh />} label="Priority" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default function App() {
  useEffect(() => {
    Log("frontend", "info", "config", "App initialized");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Container maxWidth="md" sx={{ mt: 3, mb: 4 }}>
          <Routes>
            <Route path="/" element={<NotificationsPage />} />
            <Route path="/priority" element={<PriorityPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}
=======
export default function App() {
  return "Notifications App";
}
>>>>>>> c894c0e08a0b27e55ee3c3052dc9a800a62ef255
