import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
    contactName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    rfc: {
      type: String,
      trim: true,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    specificCosting: {
      type: String,
    },
    technicalRequirements: {
      type: String,
      required: true,
    },
    briefDescription: {
      type: String,
      required: true,
    },
    started: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

export default model("Order", orderSchema);
