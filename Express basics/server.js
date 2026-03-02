import express from "express";

const app = express();

const PORT = 3000;

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "jack" },
];

app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  const selectedUser = users.find((val) => val.id === Number(userId));

  if (!selectedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({
    message: "Successfully fetched data",
    data: selectedUser,
  });
});

app.listen(PORT, () => {
  console.log("The app is working!!");
});
