import { useState } from "react";
import TrainingForm from "./TrainingForm";
import TrainingTable from "./TrainingTable";

export default function TrainingAdmin() {
  const [selected, setSelected] = useState(null);   // Selected training item
  const [refreshKey, setRefreshKey] = useState(0);  // Refresh table

  const refresh = () => setRefreshKey(k => k + 1);

  return (
    <div className="p-4">
      <TrainingForm 
        selected={selected} 
        setSelected={setSelected} 
        refresh={refresh} 
      />

      <TrainingTable 
        setSelected={setSelected} 
        refreshKey={refreshKey} 
      />
    </div>
  );
}
