const initialState = {
  user: {
    name: "Helva",
    favorites: [161235, 67283],
    darkMode: false,
  },
  pizzas: [
    {
      id: 161235,
      name: "Pizza Margherita",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      bought: 5,
      image:
        "https://shop.eismann.nl/upload/product-detail-theme/nl/3181-pizza-margherita-K-20200525.jpg",
      ingredients: ["tomatoes", "mozzarella", "basil", "oil"],
    },
    {
      id: 67283,
      name: "Pizza Napoletana",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      bought: 2,
      image: "https://www.wearegarcia.com/static/uploads-cms2/Pizza.jpg",
      ingredients: ["tomatoes", "mozzarella", "oil"],
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      bought: 10,
      image:
        "https://kookidee.nl/wp-content/uploads/2018/11/pizza-bianca-prosciutto-crudo-burrata-rucola-03.jpg",
      ingredients: ["ricotta", "mozzarella", "garlic"],
    },
  ],
};

function toggleSomething(array, input) {
  let newArray;

  if (array.includes(input)) {
    newArray = array.filter((ingredient) => ingredient !== input);
  } else {
    newArray = [...array, input];
  }
  return newArray;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        pizzas: [
          ...state.pizzas,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            bought: 0,
          },
        ],
      };
    }
    case "TOGGLE_FAVORITE_PIZZA": {
      let favo = state.user.favorites;
      let newFavorites = toggleSomething(favo, action.payload);

      return {
        ...state,
        user: {
          ...state.user,
          favorites: newFavorites,
        },
      };
    }
    case "TOGGLE_DARKMODE": {
      return {
        ...state,
        user: { ...state.user, darkMode: !state.user.darkMode },
      };
    }
    default: {
      return state;
    }
  }
}
