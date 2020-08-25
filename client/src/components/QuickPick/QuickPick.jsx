import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { useQuery, useMutation } from "@apollo/client";
import Loading from "../Loading";
import styles from "./quickpick.module.scss";
import { GET_RANDOMLEADS } from "../../graphql/queries";
import { UPDATE_LEADLIST } from "../../graphql/mutations";

const QuickPick = ({ user }) => {
  const { data } = useQuery(GET_RANDOMLEADS);
  const [updateLeadList] = useMutation(UPDATE_LEADLIST);

  const handleAddBtn = async (lead) => {
    updateLeadList({
      variables: {
        id: user._id,
        leadId: lead._id,
      },
    });
  };

  const rows = data?.randomLeads.map((lead) => {
    const { businessName, category, city, state } = lead;

    return {
      add: (
        <i onClick={() => handleAddBtn(lead)} className="fas fa-plus-circle" />
      ),
      businessName: businessName,
      category: category[0] || category,
      city: city,
      state: state,
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
