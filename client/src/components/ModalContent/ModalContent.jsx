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

  const handleChange = (e) => {
    setSelectedLead({
      ...selectedLead,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {selectedLead && (
        <MDBCard narrow className={styles.modal}>
          <MDBCardBody>
            <div className={styles.modalInputSection}>
              <section>
                <MDBInput
                  name="businessName"
                  label="Company Name"
                  value={selectedLead.businessName}
                  onChange={(e) => handleChange(e)}
                />
                <MDBInput
                  name="firstName"
                  label="First Name"
                  value={selectedLead.firstName}
                  onChange={(e) => handleChange(e)}
                />
                <MDBInput
                  name="lastName"
                  label="Last Name"
                  value={selectedLead.lastName}
                  onChange={(e) => handleChange(e)}
                />
                <MDBInput
                  name="email"
                  outline
                  icon="envelope"
                  value={selectedLead.email}
                  onChange={(e) => handleChange(e)}
                />
                <MDBInput
                  name="phoneNumber"
                  label="Phone Number"
                  value={selectedLead.phoneNumber}
                  onChange={(e) => handleChange(e)}
                />
              </section>
              <section>
                <MDBInput
                  name="secondPhoneNumber"
                  label="Second Phone Number"
                  value={selectedLead.secondPhoneNumber}
                  onChange={(e) => handleChange(e)}
                />
                <MDBInput
                  name="streetAddress"
                  label="Street"
                  value={selectedLead.streetAddress}
                  onChange={(e) => handleChange(e)}
                />
                <MDBInput
                  name="city"
                  label="City"
                  value={selectedLead.city}
                  onChange={(e) => handleChange(e)}
                />
                <MDBInput
                  name="state"
                  label="State"
                  value={selectedLead.state}
                  onChange={(e) => handleChange(e)}
                />
                <div>
                  <label htmlFor="disposition">Disposition</label>
                  <select
                    name="disposition"
                    className="browser-default custom-select"
                    value={selectedLead.disposition}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="prospect">Prospect</option>
                    <option value="contacted">Contacted</option>
                    <option value="apptSet">Appt Set</option>
                    <option value="proposalSent">Sent Proposal</option>
                    <option value="client">Client</option>
                  </select>
                </div>
              </section>
            </div>

            <div className={styles.modalNotes}>
              <label htmlFor="notes">Notes</label>
              <MDBInput
                name="notes"
                type="textarea"
                outline
                value={selectedLead.notes}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </MDBCardBody>
          <MDBBtn color="inherit" className={styles.modalSaveBtn}>
            Save
          </MDBBtn>
        </MDBCard>
      )}
    </>
  );
};

export default ModalContent;
