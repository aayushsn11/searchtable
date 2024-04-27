import axiosInstance from "../axios.config";

export const getCountryData = async () => {
  const response = await axiosInstance.get("geo/adminDivisions", {
    params: { countryIds: "IN", namePrefix: "del", limit: "5" },
  });

  return response.data;
};
