import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

import { api } from "@/utils/api";

const ListingApiSchema = z.array(
  z.object({
    userId: z.number(),
    name: z.string(),
    status: z.number(),
  }),
);

type Listings = z.infer<typeof ListingApiSchema>;

const fetchTodos = async (userId: string): Promise<Listings> => {
  const response = await api.get(`Listings?userId=${userId}`).json();

  const validatedResponse = ListingApiSchema.safeParse(response);

  if (!validatedResponse.success) {
    throw new Error(
      `Failed to fetch todos. ${validatedResponse.error.message}`,
    );
  }

  return validatedResponse.data;
};

export const useListingsQuery = (userId = "1") =>
  useQuery({
    queryKey: ["listings", userId],
    queryFn: () => fetchTodos(userId),
  });
