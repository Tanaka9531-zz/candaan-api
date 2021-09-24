import express from "express";
import cors from "cors";
import chalk from "chalk";

const app = express();
const PORT = process.env.PORT || 3000 || 5000 || 8080;

/**============================================
 *               SETUP MIDDLEWARE
 *=============================================**/
app.use(cors());
app.set("json spaces", 2);

/**============================================
 *               SETUP ROUTES
 *=============================================**/
app.get("/", (_, res) => {
  res.status(200).json({
    app_name: "Candaan API",
    author: "ardhptr21",
    description: "Rest API untuk mengumpulkan joke joke (candaan-candaan) dari Indonesia",
    version: "v1.0.0",
    message: "Punya jokes mu sendiri? yok ikut berkontribusi 🤩",
    repository: "https://github.com/ardhptr21/candaan-api",
    email: "ardhiputrapradana21@gmail.com",
    social: {
      github: "https://github.com/ardhptr21",
      instagram: "https://instagram.com/ardhptr21",
      twitter: "https://twitter.com/ardhptr21",
    },
  });
});

/**============================================
 *               LISTENING APP
 *=============================================**/
app.listen(PORT, () => console.log(chalk.blue.bold(`App now running on port ${chalk.yellow(PORT)}, yeayy😉`)));