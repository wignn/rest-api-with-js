/*
  Warnings:

  - You are about to drop the `_BookToChapter` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bookId` to the `Chapter` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_BookToChapter" DROP CONSTRAINT "_BookToChapter_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToChapter" DROP CONSTRAINT "_BookToChapter_B_fkey";

-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "bookId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_BookToChapter";

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
