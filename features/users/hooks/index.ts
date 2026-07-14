import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../action";
import { userKeys } from "@/features/query-keys";



export function useCreateUser() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: userKeys.all });
        },
        onError: (error) => {
            console.error(error);
        },
    });
}
