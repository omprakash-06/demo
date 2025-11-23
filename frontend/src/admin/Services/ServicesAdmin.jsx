import { useState } from "react";
import ServiceForm from "./ServiceForm";
import ServiceTable from "./ServiceTable";

export default function ServicesAdmin() {
  const [selected, setSelected] = useState(null);   // Store the service being edited
  const [refreshKey, setRefreshKey] = useState(0);  // Trigger reload

  const refresh = () => setRefreshKey(prev => prev + 1);

  return (
    <div className="p-4">
      <ServiceForm refresh={refresh} selected={selected} setSelected={setSelected} />
      <ServiceTable refresh={refresh} refreshKey={refreshKey} setSelected={setSelected} />
    </div>
  );
}
