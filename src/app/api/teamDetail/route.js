import { NextResponse } from "next/server";

export const GET = async (request) => {
    const teamDetail = {
        title:'kuku',
        content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        imageInfo: {
            alt:"hello",
            src:'/kuku.jpg'
        },
        link:'https://www.imdb.com/name/nm7429067/',
        mainImage: {
            src:'/kuku.jpg',
            alt:'hello'
        }
    }
    return NextResponse.json(teamDetail);
};