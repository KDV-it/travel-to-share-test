import { hash } from "bcryptjs";
import connectMongo from "../../../database/conn"
import Users from "../../../model/Schema";

export default async function handler(req, res) {
  connectMongo().catch(error => res.json({ error: "Connection Failed!" }))

  //only post method is accepted
  if (req.method === "POST") {
    if (!req.body) {
      return res.status(404).json({
        status: 404,
        error: "Don't have form Data....",
      })
    }
    const { username, email, password } = req.body;
    const checkexisting = await Users.findOne({ email });
    if (checkexisting) return res.status(422).json({
      message: "Email Already Existed!"
    })

    Users.create({
      username,
      email,
      password: await hash(password, 12)
    }, function (err, data) {
      if (err) return res.status(404).json({ err });
      res.status(201).json(
        {
          status: true,
          user: data
        })
    })


  } else {
    res.status(500).json({
      status: 500,
      message: "HTTP method Invalid, only HTTP method POST is Accepted"
    })
  }
}