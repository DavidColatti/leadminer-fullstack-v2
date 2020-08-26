import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MDBBtn, MDBCard, MDBView, MDBCardBody, MDBInput } from "mdbreact";

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
        <MDBCard narrow>
          <MDBView cascade>Company Card</MDBView>

          <MDBCardBody>
            <MDBInput name="businessName" label="Company Name" />
            <MDBInput name="firstName" label="First Name" />
            <MDBInput name="lastName" label="Last Name" />
            <MDBInput name="email" label="E-mail" outline icon="envelope" />
            <MDBInput name="phoneNumber" label="Phone Number" />
            <MDBInput name="secondPhoneNumber" label="Second Phone Number" />
            <MDBInput name="streetAddress" label="Street" />
            <MDBInput name="city" label="City" />
            <MDBInput name="state" label="State" />

            <MDBInput name="notes" type="textarea" label="Notes" outline />
            <MDBBtn color="unique">Save</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      )}
    </>
  );
};

export default ModalContent;
