import { gql } from "@apollo/client";

export const ADD_LEAD = gql`
  mutation addLead($id: String!, $leadId: String!) {
    addLead(id: $id, leadId: $leadId) {
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

export const DELETE_LEAD = gql`
  mutation deleteLead($id: String!, $leadId: String!) {
    deleteLead(id: $id, leadId: $leadId) {
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
