import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma; // i need to export this to use it in other files (as i did in other cases)

// local prisma client to use Prisma ORM 
