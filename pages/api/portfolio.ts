import type { NextApiRequest, NextApiResponse } from "next";

type Data = JSON;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return new Promise<void>((resolve) => {
    let ImageKit = require("imagekit");

    let imagekit = new ImageKit({
      publicKey: process.env.IK_PUBLIC_KEY,
      privateKey: process.env.IK_PRIVATE_KEY,
      urlEndpoint: "https://ik.imagekit.io/anthonyinglephoto/",
    });

    imagekit.listFiles(
      {
        path: "portfolio",
      },
      function (error: Error, result: JSON) {
        if (error) console.log(error);
        res.status(200).json(result);
        return resolve();
      }
    );
  });
}
