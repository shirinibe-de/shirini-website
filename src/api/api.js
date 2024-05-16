import store from "@/store/store";
import axios from "axios";
import {UnauthorizedApiError} from "@/api/exceptions";

class Api {
    constructor() {
        this.baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    }

    headers() {
        return {
            "Authorization": store.getters.authHeader,
        }
    }

    async getTeams() {
        const url = `${this.baseUrl}/v1/teams`;

        const res = await axios.get(url, {
            headers: this.headers()
        })

        // TODO: Move it to a separate function
        if (res.status === 200) {
            return res.data;
        } else if (res.status === 401) {
            throw new UnauthorizedApiError();
        } else { // 5xx or other type of issues like network error
            // TODO: convert it to an exception
            console.log(res)
        }
    }

    async createTeam(name) {
        const url = `${this.baseUrl}/v1/teams`;
        const res = await axios.post(url, {
            name: name,
        },{
            headers: this.headers()
        })

        // TODO: Move it to a separate function
        if (res.status === 200) {
            return res.data;
        } else if (res.status === 401) {
            throw new UnauthorizedApiError();
        } else { // 5xx or other type of issues like network error
            // TODO: convert it to an exception
            console.log(res)
        }
    }
}

export default new Api();
