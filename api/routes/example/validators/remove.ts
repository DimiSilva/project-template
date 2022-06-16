import FastestValidator from "fastest-validator";

const fv = new FastestValidator({
  useNewCustomCheckerFunction: true,
});

const validator = fv.compile({
  $$async: true,
  exampleId: {
    type: "string",
  },
});

export default validator;
