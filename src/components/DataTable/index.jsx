import React, { useEffect, useState } from "react";
import "../../assets/styles/DataTable.css";
import { getCountryData } from "../../api";

const DataTable = () => {
  const [data, setData] = useState([
    { id: 1, name: "Central Delhi district", country: "India" },
    { id: 2, name: "Delakhari", country: "India" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    // const getResponse = async function () {
    //   const res = await getCountryData();
    // };
    // getResponse();
  }, []);

  return (
    <div className="datatable">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search places..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
