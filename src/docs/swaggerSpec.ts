import path from "path";
import fs from "fs";

const routeDir = path.join(__dirname, "./routes/api/v0/");
const routerFiles = fs.readdirSync(routeDir).filter((file) => {
  const filePath = path.join(routeDir, file);
  return fs.statSync(filePath).isFile() && file.endsWith(".ts");
});

export const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Zaiko - Api",
      version: "1.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
      {
        url: "https://api-zaiko.vercel.app",
      },
    ],
  },
  apis: routerFiles.map((file) => path.join(routeDir, file)),
};
