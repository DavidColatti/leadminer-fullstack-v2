const Lead = require("../models/Lead");
const User = require("../models/User");

const resolvers = {
  Query: {
    leads: async () => {
      const res = await Lead.find();

      return res;
    },
    randomLeads: async () => {
      const res = await Lead.aggregate([{ $sample: { size: 12 } }]);

      return res;
    },
    leadsCount: async () => {
      const res = await Lead.countDocuments();

      return res;
    },
    findUser: async (_, { data }) => {
      if (data.uid) {
        const currentUser = await User.findOne({ uid: data.uid });

        if (!currentUser) {
          const newUser = await User.create(data);

          return newUser;
        } else {
          return currentUser;
        }
      }
    },
    searchLeads: async (_, { key, searchTerm }) => {
      if (searchTerm.length >= 1) {
        const res = await Lead.find({
          [key]: { $regex: searchTerm, $options: "i" },
        });

        return res;
      } else {
        return [];
      }
    },
  },
  Mutation: {
    updateLeadList: async (_, { id, leadId }) => {
      const user = await User.findById(id);
      const lead = await Lead.findById(leadId);
      user.leadsList.push(lead);

      console.log(user, lead);
      user.save();

      return user;
    },
  },
};

module.exports = resolvers;
