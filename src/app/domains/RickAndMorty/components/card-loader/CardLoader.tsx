import { CardSkeleton } from "app/domains/Common/components/loaders";

const CardLoader = () => (
  <div className="grid gap-6 mx-auto my-4 mb-8 sm:grid-cols-2 lg:grid-cols-4">
    <CardSkeleton noOfCards={4} />
  </div>
);

export default CardLoader;
