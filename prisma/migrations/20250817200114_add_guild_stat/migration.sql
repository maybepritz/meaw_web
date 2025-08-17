-- CreateTable
CREATE TABLE "GuildStat" (
    "id" SERIAL NOT NULL,
    "date_hour" TIMESTAMP(3) NOT NULL,
    "members" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GuildStat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GuildStat_date_hour_key" ON "GuildStat"("date_hour");
