<<<<<<< HEAD
import { useState, useEffect, useCallback } from "react";
import {
  Alert, Badge, Box, CircularProgress, Divider, Pagination, Stack, Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Log } from "affordmed-logging-middleware";
import { NotificationCard } from "../components/NotificationCard";
import { NotificationFilter } from "../components/NotificationFilter";
import { fetchNotifications } from "../api/notifications";

export function NotificationsPage() {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewedIds, setViewedIds] = useState(() => {
    const saved = localStorage.getItem("viewedNotifications");
    return saved ? JSON.parse(saved) : [];
  });

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    await Log("frontend", "info", "hook", `Loading: filter=${filter}, page=${page}`);
    try {
      const data = await fetchNotifications({
        limit: 20,
        page,
        notification_type: filter === "All" ? undefined : filter,
      });
      setNotifications(data);
      await Log("frontend", "info", "state", `Loaded ${data.length} notifications`);
    } catch (err) {
      setError(err.message);
      await Log("frontend", "error", "hook", `Load failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, [filter, page]);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    Log("frontend", "info", "page", "All Notifications page mounted");
  }, []);

  const unreadCount = notifications.filter((n) => !viewedIds.includes(n.ID)).length;

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setPage(1);
    Log("frontend", "info", "state", `Filter changed to ${newFilter}`);
  };

  const handlePageChange = (_, newPage) => {
    setPage(newPage);
    Log("frontend", "info", "state", `Page changed to ${newPage}`);
  };

  const handleView = useCallback((id) => {
    const updated = [...new Set([...viewedIds, id])];
    setViewedIds(updated);
    localStorage.setItem("viewedNotifications", JSON.stringify(updated));
    Log("frontend", "info", "state", `Notification ${id} marked as viewed`);
  }, [viewedIds]);

  return (
    <Box>
=======
import { useState } from "react";
import {
  Alert,
  Badge,
  Box,
  CircularProgress,
  Divider,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { NotificationCard } from "../components/NotificationCard";
import { NotificationFilter } from "../components/NotificationFilter";
import { useNotifications } from "../hooks/useNotifications";

export function NotificationsPage() {
  const [filter, setFilter] = useState();
  const [page, setPage] = useState("1");

  const { notifications, totalPages, loading, error } = useNotifications();

  const unreadCount = 2;

  const handleFilterChange = (newFilter) => {

  };

  const handlePageChange = (_, newPage) => {

  };

  return (
    <Box sx={{ maxWidth: 720, mx: "auto", px: 2, py: 4 }}>
>>>>>>> c894c0e08a0b27e55ee3c3052dc9a800a62ef255
      <Stack direction="row" alignItems="center" spacing={1.5} mb={3}>
        <Badge badgeContent={unreadCount} color="primary" max={99}>
          <NotificationsIcon sx={{ fontSize: 28 }} />
        </Badge>
<<<<<<< HEAD
        <Typography variant="h5" fontWeight={700}>All Notifications</Typography>
=======
        <Typography variant="h5" fontWeight={700}>
          Notifications
        </Typography>
>>>>>>> c894c0e08a0b27e55ee3c3052dc9a800a62ef255
      </Stack>

      <Divider sx={{ mb: 3 }} />

<<<<<<< HEAD
      <Box sx={{ mb: 3 }}>
        <NotificationFilter value={filter} onChange={handleFilterChange} />
      </Box>

      {loading && <Box display="flex" justifyContent="center" py={6}><CircularProgress /></Box>}
      {!loading && error && <Alert severity="error" sx={{ mb: 2 }}>Failed to load: {error}</Alert>}
      {!loading && !error && notifications.length === 0 && <Alert severity="info">No notifications found.</Alert>}

      {!loading && !error && notifications.length > 0 && (
        <Stack spacing={1.5}>
          {notifications.map((n) => (
            <NotificationCard
              key={n.ID}
              notification={n}
              isNew={!viewedIds.includes(n.ID)}
              onView={handleView}
            />
=======
      <Box sx={{ marginBottom: 3 }}>
        <NotificationFilter value={filter} onChange={handleFilterChange} />
      </Box>

      {true && (
        <Box display="flex" justifyContent="center" py={6}>
          <CircularProgress />
        </Box>
      )}

      {!loading && error && (
        <Alert severity="error">Failed to load notifications: {error}</Alert>
      )}

      {loading && !error && notifications.length == "0" && (
        <Alert severity="info">Something message</Alert>
      )}

      {loading && !error && notifications.length > 0 && (
        <Stack spacing={1.5}>
          {notifications.map((n) => (
            <></>
>>>>>>> c894c0e08a0b27e55ee3c3052dc9a800a62ef255
          ))}
        </Stack>
      )}

<<<<<<< HEAD
      {!loading && notifications.length > 0 && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination count={5} page={page} onChange={handlePageChange} color="primary" shape="rounded" />
=======
      {!loading && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
          />
>>>>>>> c894c0e08a0b27e55ee3c3052dc9a800a62ef255
        </Box>
      )}
    </Box>
  );
}
