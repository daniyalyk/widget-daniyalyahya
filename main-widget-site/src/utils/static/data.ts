export const ownerData: ApiData = {
  columns: [
    { label: "Name", key: "name", type: "string" },
    { label: "Date", key: "date", type: "date" },
    { label: "Category", key: "category", type: "string" },
    { label: "Amount", key: "amount", type: "number" },
    { label: "Created At", key: "created_at", type: "date" },
  ],
  api: "https://us-central1-fir-apps-services.cloudfunctions.net/transactions",
};
