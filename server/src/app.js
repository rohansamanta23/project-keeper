import Express from "express";
import cors from "cors";

const app = Express();

app.use(cors());
app.use(Express.json());

app.get("/", (req, res) => {
  res.send({
    mssg: "Database connected with frontend",
  });
});

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  if (name && email && password) {
    res.json({
      data: {
        mssg: "user Created Successfully",
        token: "pauld",
      },
    });
  }
});

app.listen(5450, () => {
  console.log("server is hosted on http://localhost:5450");
});
