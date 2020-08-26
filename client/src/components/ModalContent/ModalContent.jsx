import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ModalContent = ({ user }) => {
  const [selectedLead, setSelectedLead] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const leadId = location?.pathname.split("dashboard/")[1];

    if (leadId) {
      const foundLead = user?.leadsList.find((lead) => lead._id === leadId);

      setSelectedLead(foundLead);
    }
  }, [location, user]);

  return <div>{selectedLead && selectedLead.businessName}</div>;
};

export default ModalContent;
