import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// to get the dir path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// uploads directory
const uploadsDir = path.resolve(__dirname, "../../uploads");

// thanks to multer, we can storage files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export default upload;
