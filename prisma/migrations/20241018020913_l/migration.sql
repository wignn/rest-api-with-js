/*
  Warnings:

  - You are about to drop the column `tokenVal` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "tokenVal",
ADD COLUMN     "tokenCreatedAt" TIMESTAMP(3),
ADD COLUMN     "verifyToken" TEXT;
