import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";
import { NavLink } from "react-router-dom";
import pathToCategory from "../../../utils/pathToCategory";

const CategoriesCard = (props) => {
  const categories = useSelector(getAllCategories);

  return (
    <Card>
      <ListGroup variant="flush">
        {categories.map((category) => (
          <ListGroup.Item key={category.id}>
            <NavLink
              as={NavLink}
              to={"/category/" + pathToCategory(category.name)}
            >
              {category.name}
            </NavLink>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default CategoriesCard;
