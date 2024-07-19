import axios from "axios";

export const indexTodos = async () => {
    const { data } = await axios.get("http://localhost:8080/todos");
    return data;
};
