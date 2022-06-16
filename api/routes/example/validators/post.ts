import FastestValidator from "fastest-validator";

const fv = new FastestValidator({
  useNewCustomCheckerFunction: true,
});

const validator = fv.compile({
  $$async: true,
  text: {
    type: "string",
    min: 6,
    max: 30,
    convert: true,
  },
});

export default validator;
