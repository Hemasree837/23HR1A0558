import { ToggleButton, ToggleButtonGroup } from "@mui/material";
<<<<<<< HEAD
import { Log } from "affordmed-logging-middleware";
=======
>>>>>>> c894c0e08a0b27e55ee3c3052dc9a800a62ef255

const filters = ["All", "Placement", "Result", "Event"];

export function NotificationFilter({ value, onChange }) {
<<<<<<< HEAD
  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      Log("frontend", "info", "component", `NotificationFilter changed to: ${newValue}`);
      onChange(newValue);
    }
  };

=======
>>>>>>> c894c0e08a0b27e55ee3c3052dc9a800a62ef255
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
<<<<<<< HEAD
      onChange={handleChange}
=======
>>>>>>> c894c0e08a0b27e55ee3c3052dc9a800a62ef255
      size="small"
      sx={{ flexWrap: "wrap", gap: 0.5 }}
    >
      {filters.map((type) => (
<<<<<<< HEAD
        <ToggleButton key={type} value={type} sx={{ textTransform: "none", px: 2 }}>
=======
        <ToggleButton value={type} sx={{ textTransform: "none", px: 2 }}>
>>>>>>> c894c0e08a0b27e55ee3c3052dc9a800a62ef255
          {type}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> c894c0e08a0b27e55ee3c3052dc9a800a62ef255
