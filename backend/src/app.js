import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect("mongodb+srv://mjfung1:mongoDB123@recipe.eebkm9e.mongodb.net/recipesApp?retryWrites=true&w=majority")

app.listen(3001, () => {
    console.log("Listening on port 3001");
}); 