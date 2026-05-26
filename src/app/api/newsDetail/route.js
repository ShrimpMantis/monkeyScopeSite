import { NextResponse } from "next/server";

export const GET = async (request) => {

    const detail = {
        content:`Rolling Stone India has listed Serpents of Pakhangba's music video Panthoibi as one of the 10 best Indian Music Videos of 2022. 
        Panthoibi is a music video directed by Kulanandini Mahanta and produced by MonkeyScope films`,
        title:'News Detail',
        url:'https://rollingstoneindia.com/the-10-best-indian-music-videos-of-2022/',
        imageInfo: {
            src:'/panthoibiGirl.png',
            alt: 'Serpents of Pakhangba, Panthoibi'
        },
        link:'https://rollingstoneindia.com/the-10-best-indian-music-videos-of-2022/'
    };

    return NextResponse.json(detail);
};