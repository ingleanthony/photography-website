import type { NextApiRequest, NextApiResponse } from "next";
import { ContactFormValues } from "../contact";

type Data = JSON;
interface EmailApiRequest extends NextApiRequest {
  body: ContactFormValues;
}

export default function handler(
  req: EmailApiRequest,
  res: NextApiResponse<Data>
) {
  return new Promise<void>((resolve, reject) => {
    var SibApiV3Sdk = require("sib-api-v3-sdk");
    SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
      process.env.SIB_KEY;

    new SibApiV3Sdk.TransactionalEmailsApi()
      .sendTransacEmail({
        subject: `${req.body.name} has contacted you through anthonyingle.photo!`,
        sender: { email: req.body.email, name: req.body.name },
        to: [{ name: "Anthony Ingle", email: "contact@anthonyingle.photo" }],
        htmlContent:
          "<html><body><h1>{{params.name}} has contacted you</h1><p>{{params.message}}</p></body></html>",
        params: {
          name: req.body.name,
          email: req.body.email,
          message: req.body.message,
        },
      })
      .then((data: Data) => {
        console.log(data);
        res.status(200).json(JSON);
        resolve();
      })
      .catch((error: Error) => {
        console.error(error);
        res.status(401);
        reject();
      });
  });
}
