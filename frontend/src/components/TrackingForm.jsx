import React, { useState } from "react";

const TrackingForm = () => {
  const [trackingID, setTrackingID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tracking ID "${trackingID}" submitted! (Mock for now)`);
    setTrackingID("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={trackingID}
        onChange={(e) => setTrackingID(e.target.value)}
        placeholder="Enter Tracking ID"
        required
      />
      <button type="submit">Track</button>
    </form>
  );
};

export default TrackingForm;
