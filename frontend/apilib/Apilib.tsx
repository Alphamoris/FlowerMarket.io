import { Comment, Id , PriceDetail, TypesI, SignUp, UserCrd, Token } from "@/interfaces/interfaces"



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

export const setComments = async (details: Comment): Promise<any> => {
    try {
        const response = await fetch("http://127.0.0.1:8000/post/comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: details.name,
                email: details.email,
                rating: details.rating,
                comment: details.comment,
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



export const signUp = async (details: SignUp): Promise<any> => {
    try {

        const data = await fetch("http://127.0.0.1:8000/signup",
            {
                method: "POST",
                next: {
                    revalidate: 60
                },
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname: details.fname,
                    emailid: details.emailid,
                    password: details.password,
                    lname: details.lname,
                    age: details.age,
                    contactno: details.contactno,
                    zipcode: details.zipcode,
                    city: details.city,
                    state: details.state,
                    dob: details.dob

                })
            }

        )
        if (!data.ok) {
            throw new Error("Failed To Upload Your Credentials")
        }

        return await data.json()
    }

    catch (error) {
        console.log("Error from signup apilib :", error)
        return []
    }
}


export const login = async (credentials: UserCrd): Promise<Token> => {
    const formData = new FormData()
    formData.append("username", credentials.username)
    formData.append("password", credentials.password)
    try {

        const data = await fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            next: { revalidate: 60 },
            body: formData
        })


        if (!data.ok) {
            console.log("The Error is from login :", data.status)
            throw new Error("An Error Ocuured in Login")
        }
        return await data.json()
    }

    catch (error) {
        console.error("Error uploading comments:", error);
        return {
            tokentype: "",
            accesstoken: ""
        };
    }


}


export const getalluserid = async () : Promise<Id[]> => {

    try{

        const response = await fetch("http://127.0.0.1:8000/price/id" , {
            method : "GET" ,
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

}


export const detailsById = async ( id : number ) : Promise<PriceDetail | any> => {

    try{

        const response = await fetch("http://127.0.0.1:8000/details/by/id?id=" + `${id}` , {
            method : "GET" ,
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

}