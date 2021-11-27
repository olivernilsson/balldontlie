const express = require("express")
const playerRoutes = require("./src/routes/playerRoutes")
const teamRoutes = require("./src/routes/teamRoutes")
const gameRoutes = require("./src/routes/gameRoutes")

const app = express()

app.use(express.json())

app.use(
  playerRoutes,
  teamRoutes,
  gameRoutes,
)

app.use((req, res) => {
  res.status(404).send("Could not find the resource you're looking for")
})

app.listen(5000, () => console.log(`Bookshelf Server is on port 5000`))