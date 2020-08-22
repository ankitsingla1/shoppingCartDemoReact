import jsonData from "./data.json";
const loadData = [...jsonData];
const productreducer = function getProduct(state = loadData, action) {
  // console.log(action);
  switch (action.type) {
    case "NEW_PRODUCT":
      // console.log("Action with payload received in reducer with case new_product!")
      // console.log(action.payload);
      let tempProd = action.payload;
      tempProd.id = state.length + 1;
      let newProduct = [...state, tempProd];
      return newProduct;

    case "EDIT_PRODUCT":
      console.log(
        "Action with payload received in reducer with case edit_product!"
      );
      // console.log(action.payload);
      // let temp = action.payload
      var editProduct = state.map((obj) => {
        if (obj.id === action.payload.id) {
          console.log("before", obj);
          obj = action.payload;
          console.log("after", obj);
        }
        return obj;
      });
      return editProduct;

    case "DELETE_PRODUCT":
      // let temp = action.payload
      let filteredProducts = state.filter((prod) => {
        return prod.id !== action.payload;
      });
      // console.log(filteredProducts);
      return filteredProducts;

    default:
      break;
  }

  return state;
};

export default productreducer;
