import React from "react";
import { Link } from "react-router-dom";
import { MDBDataTableV5 } from "mdbreact";
import { useMutation } from "@apollo/client";
import { DELETE_LEAD } from "../../graphql/mutations";
import Loading from "../Loading/Loading";

import styles from "./dashboard.module.scss";

const Dashboard = ({ user }) => {
  const [deleteLead] = useMutation(DELETE_LEAD);

  const handleDeleteBtn = async (leadId) => {
    deleteLead({
      variables: {
        id: user._id,
        leadId: leadId,
      },
    });
  };

  const rows = user?.leadsList.map((lead) => {
    const {
      _id,
      city,
      state,
      category,
      disposition,
      phoneNumber,
      businessName,
    } = lead;

    return {
      city: city,
      state: state,
      phoneNumber: (
        <a className={styles.dashboardPhoneNum} href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </a>
      ),
      disposition: disposition,
      businessName: businessName,
      category: category[0] || category,
      edit: (
        <Link className={styles.dashboardLink} to={`/dashboard/${_id}`}>
          <i className="fas fa-edit" />
        </Link>
      ),
      delete: (
        <i onClick={() => handleDeleteBtn(_id)} className="fas fa-trash-alt" />
      ),
    };
  });

  const data = {
    columns: [
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
        label: "Phone",
        field: "phoneNumber",
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
      {
        label: "Disposition",
        field: "disposition",
        sort: "asc",
      },
      {
        label: "Edit",
        field: "edit",
      },
      {
        label: "Delete",
        field: "delete",
      },
    ],
    rows: rows,
  };

  return (
    <div className={styles.dashboard}>
      {user ? (
        <MDBDataTableV5
          hover
          searchTop
          responsive
          data={data}
          entries={5}
          pagesAmount={4}
          searchBottom={false}
          entriesOptions={[5, 10, 20]}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Dashboard;
