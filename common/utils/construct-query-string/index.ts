const constructQueryString = (params: Object) =>
  Object.entries(params).reduce(
    (qs, [key, value], index) =>
      `${qs}${index === 0 ? "?" : "&"}${key}=${value}`,
    ""
  );

export default constructQueryString;
