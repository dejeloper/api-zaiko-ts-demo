export const getLimitOffset = (param: any, numDefault: number) => {
  return param !== undefined && typeof param === "string" && param !== ""
    ? parseInt(param, 10)
    : numDefault;
};
