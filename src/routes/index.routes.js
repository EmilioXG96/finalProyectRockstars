import { Router } from "express";
import {
  renderOrders,
  createOrder,
  renderOrderEdit,
  updateOrder,
  deleteOrder,
  sendOrder,
} from "../controllers/order.controller";

const router = Router();

router.get("/", renderOrders);

router.post("/orders/add", createOrder);

router.get("/about");

router.get("/orders/:id/delete", deleteOrder);
// Edit (PUT verb substitute)
router.get("/orders/:id/edit", renderOrderEdit);

router.post("/orders/:id/update", updateOrder);

router.get("/orders/:id/startOrder", sendOrder);

export default router;
