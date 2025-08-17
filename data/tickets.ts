import { prisma } from "@/lib/prisma";

export const getAllTickets = async () => {
  try {
    const tickets = await prisma.ticket.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return tickets.map((ticket) => ({
      id: ticket.id.toString(),
      ticketId: ticket.ticket_id,
      code: ticket.code,
      authorId: ticket.author_id,
      targetId: ticket.target_id,
      assigneeId: ticket.assignee_id,
      status: ticket.status,
      category: ticket.category,
      subject: ticket.subject,
      description: ticket.description,
      channelId: ticket.channel_id,
      guildId: ticket.guild_id,
      isClosed: ticket.is_closed,
      createdAt: ticket.created_at.toISOString(),
      updatedAt: ticket.updated_at ? ticket.updated_at.toISOString() : null,
      closedAt: ticket.closed_at ? ticket.closed_at.toISOString() : null,
      deletedAt: ticket.deleted_at ? ticket.deleted_at.toISOString() : null,
    }));
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return [];
  }
};
