-- CreateEnum
CREATE TYPE "Committee" AS ENUM ('UNHRC', 'UNSC', 'CCC', 'IPC', 'LS', 'UNODC');

-- CreateTable
CREATE TABLE "Allocation" (
    "id" SERIAL NOT NULL,
    "alloc" TEXT NOT NULL,
    "committee" "Committee" NOT NULL,
    "filled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Allocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Allocation_alloc_committee_idx" ON "Allocation"("alloc", "committee");
