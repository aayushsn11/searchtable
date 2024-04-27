import axiosInstance from "../axios.config";

export const getCountryData = async ({ namePrefix, limit = 5 }) => {
  try {
    const response = await axiosInstance.get("geo/adminDivisions", {
      params: { countryIds: "IN", namePrefix: namePrefix, limit: limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching country data:", error.message);
    return error
  }
};
