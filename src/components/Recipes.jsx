import React, { useEffect, useState } from "react";
import { BsSearchAlt2 } from "react-icons/bs";
import Loading from "./Loading";
import Searchbar from "./Searchbar";
import { BiSearchAlt2 } from "react-icons/bi";
import RecipeCard from "./RecipeCard";
import { fetchRecipes as apiFetchRecipes } from "../utils";
import Button from "./Button";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Vegan");
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    try {
      const data = await apiFetchRecipes({ query, limit });
      setRecipes(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchRecipes();
  }, []);

  const handleSearchedRecipe = async (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  const showMore = () => {
    setLimit((prev) => prev + 10);
    fetchRecipes();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="w-full lg:w-2/4" onSubmit={handleSearchedRecipe}>
          <Searchbar
            placeholder="eg...Veg"
            handleInputChange={handleChange}
            rightIcon={
              <BiSearchAlt2
                className="text-gray-600"
                onClick={handleSearchedRecipe}
              />
            }
          />
        </form>
      </div>

      {recipes?.length > 0 ? (
        <>
          <div className="flex-wrap gap-10 px-0 lg:px-10 py-10">
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>

          <div className="flex w-full items-center justify-center py-10">
            <Button
              title="Show More"
              containerStyle="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
              handleClick={showMore}
            />
          </div>
        </>
      ) : (
        <div className="text-white font-bold w-full items-center justify-center py-10">
          <p className="text-center">No Recipe Found</p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
