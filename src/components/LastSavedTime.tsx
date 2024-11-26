import React from "react";
import { useAppContext } from "../contexts/AppContext";

const LastSavedTime = () => {
  const { loading, timeSinceLastUpdate } = useAppContext();
  return (
    <div>
      {loading ? (
        <span>Saving...</span>
      ) : (
        <span>
          Last save:{" "}
          {timeSinceLastUpdate > 60
            ? "few mins ago"
            : `${timeSinceLastUpdate} seconds ago`}
        </span>
      )}
    </div>
  );
};

export default LastSavedTime;
