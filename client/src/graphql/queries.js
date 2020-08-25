import { gql } from "@apollo/client";

export const GET_LEADS = gql`
  query {
    leads {
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
`;

export const GET_RANDOMLEADS = gql`
  query {
    randomLeads {
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
`;

export const GET_LEADSCOUNT = gql`
  query {
    leadsCount
  }
`;

export const GET_USER = gql`
  query findUser($data: TypeInputUser) {
    findUser(data: $data) {
      _id
      uid
      displayName
      email
      photoURL
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

export const SEARCH_LEADS = gql`
  query searchLeads($key: String!, $searchTerm: String!) {
    searchLeads(key: $key, searchTerm: $searchTerm) {
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
`;
