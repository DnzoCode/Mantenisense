import { dbConnect } from "@/utils/db";
import Event from "@/Models/Event";


dbConnect();

export default async function handler(req, res) {
  const {method, body} = req;

  switch (req.method) {
    case "GET":
      try {
        const events = await Event.find();
        return res.status(200).json(events);
      } catch (error) {
        return res.status(500).json({error: error.message});
      }
    case "POST":
        try {
          const newEvent = new Event(body);
          const savedEvent = await newEvent.save();
          return res.status(201).json(savedEvent);
        } catch (error) {
          return res.status(500).json({error: error.message});
        }
    default:
        return res.status(400).json({msg: "This method is not supported"});
  }
}
