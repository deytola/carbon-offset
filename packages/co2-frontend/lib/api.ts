import axios, { AxiosHeaders } from "axios";
import Cookies from "js-cookie";
import {CreateUserInput, SignInInput} from '@/src/__generated__/graphql';
import { useMutation, gql } from "@apollo/client";




/** SIGNINUSER gql mutation to sign in a user */
const SIGNINUSER = gql`
    mutation SignInMutation($signInInput: SignInInput!) {
        signIn(signInInput: $signInInput){
            token
            user{
                id
                firstName
                lastName
                email
                userRole
            }
        }
    }
`;

const API = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

API.interceptors.request.use((req) => {
    if (Cookies.get("user")) {
        (req.headers as AxiosHeaders).set(
            "Authorization",
            `Bearer ${JSON.parse(Cookies.get("user") || "").token}`
        );
    }

    return req;
});

//AUTH
export const login = (payload: SignInInput) => API.post("/auth/login", payload);
export const signup = (payload: CreateUserInput) => API.post("/users/signup", payload);

//BLOG
export const getBlogs = ({ page, query }: { page: number; query?: string }) => {
    let url = `/blogs?page=${page}`;
    if (query) {
        url += `&search=${query}`;
    }
    return API.get(url);
};
export const getBlogSuggestions = (query: string) => API.get(`/blogs?search=${query}`);
export const createBlog = (payload: CreateBlogType) => API.post("/blogs", payload);
export const getBlog = (slug: string) => API.get(`/blogs/${slug}`);
export const deleteBlog = (slug: string) => API.delete(`/blogs/${slug}`);
