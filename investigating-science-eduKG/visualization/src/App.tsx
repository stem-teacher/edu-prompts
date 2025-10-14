import React, { useEffect, useState } from "react";
import InvestigatingScienceVisualization from "./components/InvestigatingScienceVisualization";

const App: React.FC = () => {
  const [ndjsonData, setNdjsonData] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load the NDJSON data file
    fetch("/src/data/eduKG.ndjson")
      .then((response) => response.text())
      .then((data) => {
        setNdjsonData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading NDJSON data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        Loading data...
      </div>
    );
  }

  if (!ndjsonData) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        Error: Could not load data file
      </div>
    );
  }

  return <InvestigatingScienceVisualization ndjsonData={ndjsonData} />;
};

export default App;
