import React, { useEffect, useState } from "react";

const UseDonationData = () => {
  const [donationData, setDonationData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/donation.json");
        const jsonData = await response.json();
        setDonationData(jsonData);
      } catch (error) {
        console.error("Error fetching donation data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return { donationData, loading };
};

export default UseDonationData;
