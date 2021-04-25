import { ReactNode, FC } from "react";
export interface ItemListRootProps {
  children: ReactNode;
}
const ItemListRoot: FC<ItemListRootProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export default ItemListRoot;
