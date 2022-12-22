type ApiData = {
  columns: Array<GridColumn>;
  api: string;
};

type GridColumn = {
  label: string;
  key: string;
  type: string;
};

type staticRow = {
  account_id: number;
  amount: number;
  category: string;
  created_at: string;
  date: string;
  id: number;
  item_id: number;
  name: string;
  type: string;
  updated_at: string;
  user_id: number;
};
type staticColumn = {
  label: string;
  key: string;
  type: string;
};
