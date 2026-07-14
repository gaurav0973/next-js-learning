"use client";

import { getUser } from "@/features/users/action";
import { useCreateUser } from "@/features/users/hooks";
import { useQuery } from "@tanstack/react-query";

export default function Home() {

    const {data,isLoading,error} = useQuery({
        queryKey: ["users"],
        queryFn: getUser,
    });

    const {
        mutate: createUser,
        isPending,
    } = useCreateUser();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">

            <button
                disabled={isPending}
                onClick={() =>
                    createUser({
                        name: "Gaurav",
                        email: "gaurav@gmail.com",
                    })
                }
            >
                {isPending ? "Creating..." : "Create User"}
            </button>

            {isLoading && <p>Loading...</p>}

            {error && <p>Something went wrong</p>}

            {data?.map((user: any) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}
