import axios from "axios";
import {urls} from "../configs";

export const axiosService = axios.create(
    {
        urls,
        headers:{
            'Authorization': `Bearer ${process.env.REACT_APP_KEY}`
        }
    });

