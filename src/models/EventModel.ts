import mongoose from "mongoose";
import { SchemaTypes } from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: SchemaTypes.Date,
      required: true,
      get: (date: Date): string =>
        date
          ? date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "",
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: "no description provided",
    },
    isFree: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true }, // Ensures get method applies when converting to JSON
    toObject: { getters: true }, // Ensures get method applies when converting to objects
  }
);

export const Event = mongoose.model("Event", eventSchema);
