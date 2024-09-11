import { create } from "ipfs-http-client";

const ipfs = create({ url: "http://localhost:5001" }); // create a ipfs istance and communicate with ipfs node

export default ipfs;
