export const getSavedFoodIds = () => {
  const savedFoodIds = localStorage.getItem('saved_foods')
    ? JSON.parse(localStorage.getItem('saved_foods'))
    : [];

  return savedFoodIds;
};

export const saveFoodIds = (foodIdArr) => {
  if (foodIdArr.length) {
    localStorage.setItem('saved_foods', JSON.stringify(foodIdArr));
  } else {
    localStorage.removeItem('saved_foods');
  }
};

export const removeFoodId = (foodId) => {
  const savedFoodIds = localStorage.getItem('saved_foods')
    ? JSON.parse(localStorage.getItem('saved_foods'))
    : null;

  if (!savedFoodIds) {
    return false;
  }

  const updatedsavedFoodIds = savedFoodIds?.filter((savedFoodId) => savedFoodId !== foodId);
  localStorage.setItem('saved_foods', JSON.stringify(updatedsavedFoodIds));

  return true;
};
