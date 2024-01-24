const REACT_APP_EDAMAM_API_KEY = "b7a251cfae02f9675aaebc199f7f9343";
const REACT_APP_EDAMAM_APP_ID = "c92f9dc2";

export async function fetchRecipes(filter) {
  const { query, limit } = filter;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_EDAMAM_APP_ID}&app_key=${REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}&`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.hits;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
}

export async function fetchRecipe(id) {
  try {
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${REACT_APP_EDAMAM_APP_ID}&app_key=${REACT_APP_EDAMAM_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data[0];
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
}
