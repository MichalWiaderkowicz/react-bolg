import { useSelector } from "react-redux";
import { getPostByCategory } from "../../../redux/postsRedux";
import Posts from "../Posts/Posts";
import { useParams } from "react-router-dom";

const Category = () => {
  const { name } = useParams();
  const categoryInPath = name;
  const postsWithCategory = useSelector((state) =>
    getPostByCategory(state, categoryInPath)
  );

  return (
    <div>
      <h2>
        Category: <span>{categoryInPath}</span>
      </h2>
      {postsWithCategory.length === 0 ? (
        <p>No posts in this category...</p>
      ) : (
        <Posts posts={postsWithCategory} />
      )}
    </div>
  );
};
export default Category;
