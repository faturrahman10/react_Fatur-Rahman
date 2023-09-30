const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "Jalangkote",
      productCategory: "Snack",
      productFreshness: "Brand New",
      price: "50000",
      imageURL: "image",
      additionalDescription: "Enak Dimakan",
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'EDIT_PRODUCT':
      // eslint-disable-next-line no-case-declarations
      const { product, index } = action.payload;
      // eslint-disable-next-line no-case-declarations
      const updatedProducts = [...state.products];
      updatedProducts[index] = product;
      return {
        ...state,
        products: updatedProducts,
      };
    case 'DELETE_PRODUCT':
      // eslint-disable-next-line no-case-declarations
      const deletedIndex = action.payload;
      // eslint-disable-next-line no-case-declarations
      const updatedProductsAfterDelete = state.products.filter(
        (_, index) => index !== deletedIndex
      );
      return {
        ...state,
        products: updatedProductsAfterDelete,
      };
    default:
      return state;
  }
};

export default productReducer;
