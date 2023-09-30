export const addProduct = (product) => {
    return {
      type: 'ADD_PRODUCT',
      payload: product,
    };
  };
  
  export const editProduct = (product, index) => {
    return {
      type: 'EDIT_PRODUCT',
      payload: { product, index },
    };
  };
  
  export const deleteProduct = (index) => {
    return {
      type: 'DELETE_PRODUCT',
      payload: index,
    };
  };
  