import whitelist from "./whitelist";

const optionCors = {
  origin: (origin: any, callback: any) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("No Permitido"));
    }
  },
};

export default optionCors;
