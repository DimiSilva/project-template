import mongoose from "mongoose";
import { enums } from "common";

export default ($mongoose = mongoose) => {
  const subSchema = new $mongoose.Schema(
    {
      prop: { type: Number, integer: true, default: 0 },
    },
    { _id: false, versionKey: false }
  );

  const schema = new $mongoose.Schema(
    {
      prop: { type: String, index: true, max: 100, required: true },
      uniqueProp: { type: String, index: true, required: true, unique: true },
      subSchema: { type: subSchema, default: {} },
    },
    { timestamps: { currentTime: () => new Date() } }
  );

  const Model = $mongoose.model(enums.dbModels.COLLECTION1, schema);

  return Model;
};
