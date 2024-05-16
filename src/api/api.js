import store from "@/store/store";
import axios from "axios";
import {UnauthorizedApiError} from "@/api/exceptions";

class Api {
    constructor() {
        this.baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    }

    s() {
        return this.baseUrl;
    }

    headers() {
        return {
            "Authorization": store.getters.authHeader,
        }
    }

    async getTeams() {
        const url = `${this.baseUrl}/v1/teams`;

        const response = await axios.get(url, {
            headers: this.headers()
        })

        // TODO: Move it to a separate function
        if (response.status === 200) {
            return response.data;
        } else if (response.status === 401) {
            throw new UnauthorizedApiError();
        } else { // 5xx or other type of issues like network error
            // TODO: convert it to an exception
            console.log(response)
        }
    }
}

export default new Api();
