import Order from "../models/Order";

export const renderOrders = async (req, res) => {
  const orders = await Order.find().lean();

  res.render("index", { orders: orders });
};

export const createOrder = async (req, res) => {
  try {
    const order = Order(req.body);

    const orderSaved = await order.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const About = (req, res) => {
  res.render("about");
};

export const renderOrderEdit = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).lean();

    res.render("edit", { order });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateOrder = async (req, res) => {
  const { id } = req.params;

  await Order.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;

  await Order.findByIdAndDelete(id);

  res.redirect("/");
};

export const sendOrder = async (req, res) => {
  const { id } = req.params;

  const order = await Order.findById(id);

  order.started = !order.started;

  await order.save();

  res.redirect("/");
};
