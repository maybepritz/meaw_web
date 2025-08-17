import { NextResponse } from "next/server";

export async function GET() {
  const guildId = process.env.DISCORD_GUILD_ID;
  const token = process.env.DISCORD_BOT_TOKEN;

  const res = await fetch(`https://discord.com/api/v10/guilds/${guildId}?with_counts=true`, {
    headers: {
      Authorization: `Bot ${token}`,
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
