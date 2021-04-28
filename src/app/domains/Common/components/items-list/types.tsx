import { ReactNode } from "react";

export interface PaginationMeta {
  next: string | null;
  prev: string | null;
}
export interface ItemsListProps {
  // TODO: add generics type
  data: any[];
  viewSelectedItemInfo: () => void;
  renderItems?: (data: ReactNode) => void;
  searchBy?: string;
  setCurrentSelected: (data: any) => void;
  currentPage?: number;
  setPage?: (page: number) => void;
  paginationMeta?: PaginationMeta;
}
