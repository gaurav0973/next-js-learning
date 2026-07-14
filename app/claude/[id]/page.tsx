type Params = {
    params: Promise<{
        id: string;
    }>;
};

async function DynamicClaudePage({ params }: Params) {
    const { id } = await params;
    return <div>DynamicClaudePage: {id}</div>;
}
export default DynamicClaudePage;
