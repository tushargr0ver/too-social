import dbConnect from '../../../lib/dbConnect'
import User from '../../models/User'

export async function POST(req, res) {
      try {
        await dbConnect();
        const { uid, name, links } = req.body;  
        const newUser = new User({ uid, name, links });
        await newUser.save();
  
        res.status(201).json({ message: 'User created successfully', user: newUser });
      } catch (error) {
        res.status(500).json({ message: 'Failed to create user', error });
      }
    }