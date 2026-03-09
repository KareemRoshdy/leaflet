export const fetchData = async () => {
  try {
    const res = await fetch(
      "https://neom-u-drive-api-stage-176217773572.us-central1.run.app/vehicle/tracking?limit=500000000",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODQ5NWFiYzFjMmQyMGI4YWYwNDQ3OWQiLCJyb2xlIjoic3VwZXJhZG1pbiIsImlhdCI6MTc3Mjk2Mzg5MywiZXhwIjoxNzczMDUwMjkzfQ.le5kJN_NoSL7OrGyvRNAMGYO9rbyPBM8CjqLuNZ6APk",
        },
      },
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
