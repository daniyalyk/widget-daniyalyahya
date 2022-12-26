export const rows: Array<staticRow> = [
  {
    account_id: 0,
    amount: 0,
    category: "Null",
    created_at: "2022-01-01T00:00:00.000Z",
    date: "2022-01-01T00:00:00.000Z",
    id: 0,
    item_id: 0,
    name: "Null",
    type: "Null",
    updated_at: "2022-01-01T00:00:00.000Z",
    user_id: 0,
  },
  {
    account_id: 1,
    amount: 1,
    category: "Null",
    created_at: "2022-01-01T00:00:00.000Z",
    date: "2022-01-01T00:00:00.000Z",
    id: 1,
    item_id: 1,
    name: "Null",
    type: "Null",
    updated_at: "2022-01-01T00:00:00.000Z",
    user_id: 1,
  },
];
export const columns: Array<staticColumn> = [
  { label: "Column1", key: "column1", type: "string" },
  { label: "Column2", key: "column2", type: "date" },
  { label: "Column3", key: "column3", type: "string" },
  { label: "Column4", key: "column4", type: "number" },
  { label: "Column5", key: "column5", type: "date" },
];

export const ownerData_static: ApiData = {
  columns: [
    { label: "Name", key: "name", type: "string" },
    { label: "Date", key: "date", type: "date" },
    { label: "Category", key: "category", type: "string" },
    { label: "Amount", key: "amount", type: "number" },
    { label: "Created At", key: "created_at", type: "date" },
  ],
  api: "https://us-central1-fir-apps-services.cloudfunctions.net/transactions",
};
