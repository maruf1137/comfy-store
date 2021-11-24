import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
// import products_reducer from "./products_reducer";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tampSort = [...filtered_products];

    if (sort === "price-lowest") {
      tampSort = tampSort.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highst") {
      tampSort = tampSort.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tampSort = tampSort.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "name-z") {
      tampSort = tampSort.sort((a, b) => b.name.localeCompare(a.name));
    }
    return { ...state, filtered_products: tampSort };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;
    let tampPrducts = [...all_products];
    // filtering
    // text
    if (text) {
      tampPrducts = tampPrducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    // category
    if (category !== "all") {
      tampPrducts = tampPrducts.filter(
        (product) => product.category === category
      );
    }

    // company
    if (company !== "all") {
      tampPrducts = tampPrducts.filter(
        (product) => product.company === company
      );
    }

    // color
    if (color !== "all") {
      tampPrducts = tampPrducts.filter((product) =>
        product.colors.find((c) => c === color)
      );
    }

    // price
    tampPrducts = tampPrducts.filter((product) => product.price <= price);

    // shipping
    if (shipping) {
      tampPrducts = tampPrducts.filter((product) => product.shipping === true);
    }
    return { ...state, filtered_products: tampPrducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",

        price: state.filters.max_price,
        shipping: true,
      },
    };
  }
  // return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
