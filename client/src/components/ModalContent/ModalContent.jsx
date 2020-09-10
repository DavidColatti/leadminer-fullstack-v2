import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import styles from "./modalcontent.module.scss";

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

  return (
    <>
      {selectedLead && (
        <MDBCard narrow className={styles.modal}>
          <MDBCardBody>
            <MDBInput name="businessName" label="Company Name" />
            <MDBInput name="firstName" label="First Name" />
            <MDBInput name="lastName" label="Last Name" />
            <MDBInput name="email" outline icon="envelope" />
            <MDBInput name="phoneNumber" label="Phone Number" />
            <MDBInput name="secondPhoneNumber" label="Second Phone Number" />
            <MDBInput name="streetAddress" label="Street" />
            <MDBInput name="city" label="City" />
            <MDBInput name="state" label="State" />
            <div>
              <label for="disposition">Disposition</label>
              <select
                name="disposition"
                className="browser-default custom-select"
              >
                <option value="prospect">Prospect</option>
                <option value="contacted">Contacted</option>
                <option value="apptSet">Appt Set</option>
                <option value="proposalSent">Sent Proposal</option>
                <option value="client">Client</option>
              </select>
            </div>

            <div>
              <label for="notes">Notes</label>
              <MDBInput name="notes" type="textarea" label="Notes" outline />
            </div>
            <MDBBtn>Save</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      )}
    </>
  );
};

export default ModalContent;
