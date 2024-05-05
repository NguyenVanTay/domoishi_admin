/** @format */

export const isValidInputsUser = (formData, toast) => {
  const regxNumber = new RegExp("^[0-9-+]{9,15}$");
  const regxEmail = /\S+@\S+\.\S+/;
  if (!formData.name) {
    toast.error("name is required");
    return false;
  }

  if (!formData.phone) {
    toast.error("phone is required");
    return false;
  }
  if (!regxNumber.test(formData.phone)) {
    toast.info(
      "please enter a unique valid phone number and must be more than 9 characters and less than 15 characters"
    );
    return false;
  }
  if (!formData.email) {
    toast.error("email is required");
    return false;
  }
  if (!regxEmail.test(formData.email)) {
    toast.info("please enter a valid email ");
    return false;
  }
  if (!formData.address) {
    toast.error("address is required");
    return false;
  }
  if (!formData.password) {
    toast.error("password is required");
    return false;
  }

  return true;
};
export const isValidInputCategory = (formData, toast) => {
  if (!formData.name) {
    toast.error("name category is required");
    return false;
  }

  return true;
};
export const isValidInputProduct = (formData, toast) => {
  var regxPrice = new RegExp("^[0-9]$");
  if (!formData.name) {
    toast.error("name category is required");
    return false;
  }

  if (!formData.price) {
    toast.error("price is required ");
    return false;
  }
  if (!regxPrice.test(formData.price)) {
    toast.info("please enter price only number");
    return false;
  }
  if (!formData.description) {
    toast.error("description is required ");
    return false;
  }

  return true;
};
