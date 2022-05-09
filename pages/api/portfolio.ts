import type { NextApiRequest, NextApiResponse } from "next";

export type Data = {
  type: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  fileId: string;
  tags: any[];
  AITags: any[];
  embeddedMetadata: any[];
  customCoordinates: any[];
  customMetadata: JSON;
  isPrivateFile: boolean;
  url: string;
  thumbnail: string;
  fileType: string;
  filePath: string;
  height: number;
  width: number;
  size: number;
  hasAlpha: boolean;
  mime: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
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
      function (error: Error, result: Data[]) {
        if (error) console.log(error);
        console.log(result);
        res.status(200).json(result.reverse());
        return resolve();
      }
    );
  });
}
