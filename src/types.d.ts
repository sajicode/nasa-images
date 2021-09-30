export interface ResultData {
  date_created: Date | string;
  nasa_id: string;
  secondary_creator: string;
  description: string;
  description_508: string;
  title: string;
  center: string;
  keywords: string[];
  media_type: string;
}

interface ResultLinks {
  rel: string;
  href: string;
  render: string;
}

export interface ResultType {
  data: ResultData[];
  links: ResultLinks[];
  href: string;
}

interface ErrorResponse {
  Response: string;
  Error: string;
}

type NasaContextType = {
  results: ResultType[];
  error: string | null;
  loader: boolean;
  keyword: string | null;
  searchKeyword: (keyword: string | null) => Promise<void>;
  addKeyWord: (keyword: string | null) => void;
};
