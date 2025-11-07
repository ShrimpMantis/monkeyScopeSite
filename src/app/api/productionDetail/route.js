import { NextResponse } from 'next/server';

export const GET = async (request) => {
    const detail = {
        title: "Monot Pore",
        content:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 It has survived not only five centuries, but also the leap into electronic typesetting, 
                 remaining essentially unchanged. 
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                 and more recently with desktop publishing software like Aldus PageMaker 
                including versions of Lorem Ipsum`,
    
        credits:{
            cast:['Plabita Borthakur', 'Paalin Kabaak', 'Harpal Saikia'],
            director:"Kulanandini Mahanta",
            firstAssistantDirector:"",
            secondAssistantDirector:"",
            cinemtaography:"",
            producer:"",
            coProducer:"",
            concept:"",
            lighting:[],
            editor:"Upamanyu",
            productionDesigner:"",
            hairAndMakeUp:"",
            costumeDesigner:"",
            soundDesigner:"",
            soundRecordist:"",
            reRecordingMixer:"",
            stillsPhotography:"",
        },
        mainImage: {
            src:'/kinaare.png',
            alt:'Monot Pore'
        },
        images: [
            {
                alt:'kinaare',
                src:'/kinaare.png'
            },
            {
                alt:'kinaare',
                src:'/kukili.png'
            },
            {
                alt:'kinaare',
                src:'/kinaare.png'
            },
            {
                alt:'kinaare',
                src:'/kukili.png'
            },
            {
                alt:'kinaare',
                src:'/kinaare.png'
            },
            {
                alt:'kinaare',
                src:'/kukili.png'
            }
        ],
        link:'https://youtube.com'
    };
    
    return NextResponse.json(detail);
};