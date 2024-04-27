import React, { useEffect, useState } from "react";
import "../../assets/styles/DataTable.css";
import { getCountryData } from "../../api";
import { debounce, filterValues } from "../../constant /constant";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("del");
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await getCountryData({
        namePrefix: searchQuery,
        limit: limit,
      });
      setData(res?.data || []);
      setLoading(false);
    };

    const debounceFetchData = debounce(fetchData, 500);
    debounceFetchData();

    return () => {
      debounceFetchData.cancel();
    };
  }, [searchQuery, limit]);

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setLimit(5)
  };

  return (
    <div className="datatable">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search places..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {data?.length ? (
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Place Name</th>
                    <th>Country</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination">
                <div className="paginate">
                  <div>Filter</div>
                  <select
                    value={limit}
                    onChange={(e) => setLimit(e.target.value)}
                  >
                    {filterValues.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ) : (
            <div className="noresults">
              <h3>No result found</h3>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DataTable;
