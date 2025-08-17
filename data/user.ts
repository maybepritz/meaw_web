import { prisma } from "@/lib/prisma";

export const getUserByToken = async (token: string) => {
  try {
    const moderator = await prisma.moderator.findUnique({
      where: {
        token,
      },
      include: {
        user: {
          select: {
            discord_id: true,
            username: true,
            avatar_url: true,
            locale: true,
          },
        },
      },
    });

    if (!moderator || !moderator.user) return null;

    return {
      id: moderator.user.discord_id.toString(),
      name: moderator.user.username,
      email: `${moderator.user.username}@meaw.local`,
      image: moderator.user.avatar_url,
      locale: moderator.user.locale,
    };
  } catch (error) {
    return null;
  }
};

export const getUserByDiscordId = async (discord_id: string) => {
  try {
    const moderator = await prisma.moderator.findUnique({
      where: {
        discord_id,
      },
      include: {
        user: {
          select: {
            discord_id: true,
            username: true,
            avatar_url: true,
            locale: true,
          },
        },
      },
    });

    if (!moderator || !moderator.user) return null;

    return {
      id: moderator.user.discord_id.toString(),
      name: moderator.user.username,
      email: `${moderator.user.username}@meaw.local`,
      image: moderator.user.avatar_url,
      locale: moderator.user.locale || "ru",
    };
  } catch (error) {
    return null;
  }
};

export const getUserCount = async (): Promise<number> => {
  try {
    const count = await prisma.user.count();
    return count;
  } catch (error) {
    return 0;
  }
};
