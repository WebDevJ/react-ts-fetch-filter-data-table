import React from "react";
import TableWithSearch from "./components/TableWithSearch";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <TableWithSearch />
    </div>
  );
};

export default App;
