const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Lead {
    _id: ID
    businessName: String
    phoneNumber: String
    city: String
    state: String
    firstName: String
    lastName: String
    streetAddress: String
    secondPhoneNumber: String
    notes: [String]
    category: [String]
    email: String
    disposition: String
  }

  type User {
    _id: ID
    uid: String
    email: String
    displayName: String
    photoURL: String
    indexOfMasterLeads: Int
    leadsList: [Lead]
  }

  input TypeInputUser {
    uid: String
    email: String
    photoURL: String
    providerId: String
    displayName: String
    phoneNumber: String
  }

  type Query {
    leads: [Lead]
    leadsCount: Int
    randomLeads: [Lead]
    findUser(data: TypeInputUser): User!
    searchLeads(key: String!, searchTerm: String!): [Lead]
  }

  type Mutation {
    updateLeadList(id: String!, leadId: String!): User!
  }
`;

module.exports = typeDefs;
