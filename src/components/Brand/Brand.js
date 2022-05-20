import { StyledBrand } from "./Brand.styled";

function Brand(props) {
  return <StyledBrand>{props.children}</StyledBrand>;
}

export default Brand;
