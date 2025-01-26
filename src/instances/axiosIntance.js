import axios from "axios";
import { useState } from "react";

const axiosInstance = axios.create({
    baseURL: "https://newsapi.org/v2/",
});


export default axiosInstance;