import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { MDBDataTableV5 } from "mdbreact";
import Loading from "../Loading/Loading";
import styles from "./searchtool.module.scss";
import { SEARCH_LEADS } from "./../../graphql/queries";

const SearchTool = ({ user }) => {
  const [keyType, setKeyType] = useState("businessName");
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useQuery(SEARCH_LEADS, {
    variables: {
      key: keyType,
      searchTerm: searchTerm,
    },
  });

  const handleAddBtn = (lead) => {
    user.leadsList.push(lead);
    console.log(user.leadsList);
  };

  const rows = data?.searchLeads.map((lead) => {
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
    <div className={styles.searchTool}>
      {user ? (
        <>
          <form className={styles.searchToolRadioGroup}>
            <div>
              <input
                name="businessName"
                id="businessName"
                type="radio"
                checked={keyType === "businessName"}
                onChange={(e) => setKeyType(e.target.name)}
              />
              <label className={styles.searchToolRadioLabel}>Company</label>
            </div>
            <div>
              <input
                name="category"
                id="category"
                type="radio"
                checked={keyType === "category"}
                onChange={(e) => setKeyType(e.target.name)}
              />
              <label className={styles.searchToolRadioLabel}>Category</label>
            </div>
            <div>
              <input
                name="city"
                id="city"
                type="radio"
                checked={keyType === "city"}
                onChange={(e) => setKeyType(e.target.name)}
              />
              <label className={styles.searchToolRadioLabel}>City</label>
            </div>
            <div>
              <input
                name="state"
                id="state"
                type="radio"
                checked={keyType === "state"}
                onChange={(e) => setKeyType(e.target.name)}
              />
              <label className={styles.searchToolRadioLabel}>State</label>
            </div>
          </form>

          <div className={styles.searchToolSearchContainer}>
            <input
              type="text"
              value={searchTerm}
              placeholder="Search..."
              className={styles.searchToolBar}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className={`fas fa-search ${styles.searchToolIcon}`} />
          </div>
          <MDBDataTableV5 hover searching={false} responsive data={tableData} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SearchTool;
