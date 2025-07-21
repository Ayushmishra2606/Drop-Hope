import express from "express";


const app = express();

dotenv.config();

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});