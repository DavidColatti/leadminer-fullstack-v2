import { gql } from "@apollo/client";

export const UPDATE_LEADLIST = gql`
  mutation updateLeadList($id: String!, $leadId: String!) {
    updateLeadList(id: $id, leadId: $leadId) {
      _id
      uid
      displayName
      leadsList {
        _id
        businessName
        phoneNumber
        city
        state
        firstName
        lastName
        streetAddress
        secondPhoneNumber
        notes
        category
        email
        disposition
      }
    }
  }
`;
