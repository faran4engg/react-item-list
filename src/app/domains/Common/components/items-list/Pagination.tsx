import { Button } from "../button";

export interface PaginationProps {
  page: any;
  setPage: any;
  next: any;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage, next }) => {
  return (
    <div className="flex justify-center mb-5">
      <div className="mx-1">
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={`cursor-${page === 1 ? "not-allowed" : "pointer"}`}
        >
          Previous
        </Button>
      </div>
      <div className="mx-6">
        <Button
          onClick={() => setPage(page + 1)}
          disabled={!next}
          className={`cursor-${!next ? "not-allowed" : "pointer"}`}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
