import { Comment, PriceDetail, TypesI } from "@/interfaces/interfaces"




export const getPriceDetails = async (): Promise<PriceDetail[]> => {
    try {
        const response = await fetch("http://127.0.0.1:8000/get/price/", {
            method: "GET",
            next: { revalidate: 60 },
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to load the data from API. Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching price details:", error);
        return [];
    }
};


export const getTypesDetails = async (): Promise<TypesI[]> => {
    try {
        const response = await fetch("http://127.0.0.1:8000/get/types/", {
            method: "GET",
            next: { revalidate: 60 },
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching types details:", error);
        return [];
    }
};

export const setComments = async (...details: Comment[]): Promise<any> => {
    try {
        const response = await fetch("http://127.0.0.1:8000/post/comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: details[0].name,
                email: details[0].email,
                rating: details[0].rating,
                comment: details[0].comment,
            })
        });

        if (!response.ok) {
            throw new Error("Failed to upload records");
        }

        return await response.json();
    } catch (error) {
        console.error("Error uploading comments:", error);
        return ["Failed to upload records"];
    }
};