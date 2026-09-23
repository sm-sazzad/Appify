import { IData } from "@/DataType/DataType";

export const getData = async (): Promise<IData[]> => {
    const res = await fetch("https://raw.githubusercontent.com/sm-sazzad/Appify/refs/heads/main/public/data.json");
    // const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    return data;
}