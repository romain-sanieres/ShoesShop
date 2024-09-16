/*
  Warnings:

  - You are about to drop the column `email` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `Vendor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Vendor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stripe_account]` on the table `Vendor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stripe_account` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Vendor_email_key";

-- AlterTable
ALTER TABLE "Vendor" DROP COLUMN "email",
DROP COLUMN "phoneNumber",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "stripe_account" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_name_key" ON "Vendor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_stripe_account_key" ON "Vendor"("stripe_account");
