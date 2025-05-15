


export const searchLocation = async ({ url, value }: { url: string; value: string }) => {
    try {
        const response = await fetch(`${url}/${value}`);
        const data = await response.json();
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
