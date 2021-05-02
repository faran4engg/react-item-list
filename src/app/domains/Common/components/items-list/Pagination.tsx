import { Button } from "../button";

export interface PaginationProps {
  currentPage: number;
  setPage: (page: number) => void;
  nextPage: string | null;
  prevPage: string | null;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setPage,
  nextPage,
  prevPage,
}) => {
  return (
    <div className="flex justify-center mb-5">
      <div className="mx-2">
        <Button
          onClick={() => setPage(currentPage - 1)}
          disabled={!prevPage}
          className={`cursor-${!!prevPage ? "pointer" : "not-allowed"}`}
        >
          Prev
        </Button>
      </div>
      <div className="mx-2">
        <Button
          onClick={() => setPage(currentPage + 1)}
          disabled={!nextPage}
          className={`cursor-${!!nextPage ? "pointer" : "not-allowed"}`}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
