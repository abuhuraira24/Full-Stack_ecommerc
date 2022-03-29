const productValidator = (product) => {
  const error = {};

  if (!product.productName) {
    error.productName = "Please Provide your Product Name!";
  }
  if (!product.price) {
    error.price = "Please Provide your Product Name!";
  } else if (product.price <= 0) {
    error.price = "Please Provide your Product Name!";
  }
  if (!product.discount) {
    error.discount = "Please Provide a Discount!";
  } else if (product.discount <= 0) {
    error.discount = "Please Provide a Discount!";
  }
  if (!product.sortDesc) {
    error.sortDesc = "Please Provide a Sort Description!";
  }
  if (!product.categorie) {
    error.categorie = "Please Provide Product Categorie!";
  }
  if (!product.desc) {
    error.desc = "Please Provide Product Description!";
  }

  return {
    error,
    isValid: Object.keys(error).length === 0,
  };
};

module.exports = productValidator;
