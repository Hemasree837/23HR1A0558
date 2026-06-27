import { Log } from "affordmed-logging-middleware";

const API_BASE = "http://4.224.186.213/evaluation-service";

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrb3Rpa2FoZW1hc3JlZUBnbWFpbC5jb20iLCJleHAiOjE3ODI1Mzg5OTgsImlhdCI6MTc4MjUzODA5OCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjU5ZTBiNTlkLWRiNGEtNDNmMy1iZWExLThiN2FjNzI2Y2U4MiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImsgaGVtYXNyZWUiLCJzdWIiOiI4YWFjNWZiOC1mMzhjLTQ0ZGItOTNiNy0xMWVjZWY2ODIxMWIifSwiZW1haWwiOiJrb3Rpa2FoZW1hc3JlZUBnbWFpbC5jb20iLCJuYW1lIjoiayBoZW1hc3JlZSIsInJvbGxObyI6IjIzaHIxYTA1NTgiLCJhY2Nlc3NDb2RlIjoiYVRreWJzIiwiY2xpZW50SUQiOiI4YWFjNWZiOC1mMzhjLTQ0ZGItOTNiNy0xMWVjZWY2ODIxMWIiLCJjbGllbnRTZWNyZXQiOiJ4YVhmeXBYQmJueFdEZmd2In0.zRnxSAtLMlgywJDDcO4Y0Z8ZKvVB3uTejgu_dfz5Z9k";

export async function fetchNotifications({
  limit = 20,
  page = 1,
  notification_type
} = {}) {
  await Log(
    "frontend",
    "info",
    "api",
    `Fetching: limit=${limit}, page=${page}, type=${notification_type || "all"}`
  );

  try {
    let url = `${API_BASE}/notifications?limit=${limit}&page=${page}`;

    if (notification_type) {
      url += `&notification_type=${notification_type}`;
    }

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`
      }
    });

    if (!res.ok) {
      await Log("frontend", "error", "api", `Status ${res.status}`);
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    const notifications = data.notifications || [];

    await Log(
      "frontend",
      "info",
      "api",
      `Got ${notifications.length} notifications`
    );

    return notifications;
  } catch (err) {
    await Log("frontend", "error", "api", `Fetch failed: ${err.message}`);
    throw err;
  }
}