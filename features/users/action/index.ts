export const getUser = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}


export const  createUser = async (user: { name: string; email: string }) => {
    console.log("user", user)
}
