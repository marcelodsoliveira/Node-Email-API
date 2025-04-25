import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contato = (req: Request, res: Response) => {
  
  let transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7bb84ffd4b7416",
      pass: "****a25e"
    }
  });
  
  
  res.json({pong: true});
}