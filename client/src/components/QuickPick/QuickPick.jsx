import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { useQuery, useMutation } from "@apollo/client";
import Loading from "../Loading";
import styles from "./quickpick.module.scss";
import { GET_RANDOMLEADS } from "../../graphql/queries";
import { ADD_LEAD } from "../../graphql/mutations";

const QuickPick = ({ user }) => {
  const { data } = useQuery(GET_RANDOMLEADS);
  const [addLead] = useMutation(ADD_LEAD);

  const handleAddBtn = async (leadId) => {
    addLead({
      variables: {
        id: user._id,
        leadId: leadId,
      },
    });
  };

  const rows = data?.randomLeads.map((lead) => {
    const { businessName, category, city, state, _id } = lead;

    return {
      add: (
        <i onClick={() => handleAddBtn(_id)} className="fas fa-plus-circle" />
      ),
      category: category[0] || category,
      businessName: businessName,
      state: state,
      city: city,
    };
  });

  const tableData = {
    columns: [
      {
        label: "Add",
        field: "add",
      },
      {
        label: "Company",
        field: "businessName",
        sort: "asc",
      },
      {
        label: "Category",
        field: "category",
        sort: "asc",
      },

      {
        label: "City",
        field: "city",
        sort: "asc",
      },
      {
        label: "State",
        field: "state",
        sort: "asc",
      },
    ],
    rows: rows,
  };

  return (
    <div className={styles.quickPick}>
      {user ? (
        <MDBDataTableV5
          hover
          responsive
          paging={false}
          searching={false}
          data={tableData}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default QuickPick;
