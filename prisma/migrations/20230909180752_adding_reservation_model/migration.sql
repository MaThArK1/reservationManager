/*
  Warnings:

  - You are about to drop the column `cpf` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpfCnpj]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cep` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpfCnpj` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_cpf_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "cpf",
ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "cpfCnpj" TEXT NOT NULL,
ADD COLUMN     "rg" TEXT;

-- CreateTable
CREATE TABLE "Reservation" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "user" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_cpfCnpj_key" ON "User"("cpfCnpj");

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
