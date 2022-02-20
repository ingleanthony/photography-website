import type { NextApiRequest, NextApiResponse } from "next";

type Data = JSON;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return new Promise<void>((resolve) => {
    let ImageKit = require("imagekit");

    let imagekit = new ImageKit({
      publicKey: process.env.PUBLIC_KEY,
      privateKey: process.env.PRIVATE_KEY,
      urlEndpoint: "https://ik.imagekit.io/anthonyinglephoto/",
    });

    imagekit.listFiles(
      {
        path: "portrait",
      },
      function (error: Error, result: JSON) {
        if (error) console.log(error);
        res.status(200).json(result);
        return resolve();
      }
    );
  });
}
