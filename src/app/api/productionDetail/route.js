import { NextResponse } from 'next/server';

export const GET = async (request) => {
    const detail = {
        title: "Monot Pore",
        content:`Monot Pore is Taba Chake's first Assamese song, released in 2022. The song is about love, loss and longing.
        The music video was directed by Kulanandini Mahanta and produced by MonkeyScope films. It was shot in the bustling city of
        Guwahati, Assam. The concept of the music video draws from Assamese Vaishnavism and its concept of 7 heavens. It draws 
        heavily from hindu mythology of Chitragupt, and the concept of divine helper of Yama the god of death. Assamese Vaishnavism
        has the concept of 7 heavens which a dead soul must pass through before reaching vaikuntha. In this music video the lost soul
        roams in the purgatory after his passing away longing for one last glimpse of his beloved.
        The esclators and elevators in the music video are metaphors for the purgatory journey. The divine helpers of Yama
        attired in the clothes of the normal people let go of the soul to bid a final farewell going against their divine duty.
        The court in which the soul sits, is the court of Chitragupta the divine judge who dispenses justice based on the deeds of the soul.`,
    
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
            src:'/monotPore/court.jpg',
            alt:'Monot Pore'
        },
        images: [
            {
                alt:'Court room of Chitragupta',
                src:'/monotPore/court.jpg'
            },
            {
                alt:'plabita',
                src:'/monotPore/plabita.png'
            },
            {
                alt:'tussle between yama helpers and the soul',
                src:'/monotPore/tussle.jpg'
            },
           /*  {
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
            } */
        ],
        link:'https://youtube.com'
    };
    
    return NextResponse.json(detail);
};