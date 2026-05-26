import Home from "./home/page";
import  '../app/globals.css';

const mediaItems = [
    {
        title: 'Rolling Stone India 10 best Indian Music Videos 2022',
        content: `Rolling Stone India has listed Serpents of Pakhangba's music video Panthoibi as one of the 10 best Indian Music 
        Videos of 2022. 
        Panthoibi is a music video directed by Kulanandini Mahanta and produced by MonkeyScope films`,
        imageInfo: {
            src: '/panthoibiGirl.png',
            alt: 'Serpents of Pakhangba, Panthoibi'
        },
    },
    {
        title: 'Media Item 2',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  type specimen book... 
                  `,
        imageInfo: {
            src: '/moreLove.png',
            alt: 'media item 1'
        },
    },
    {
        title: 'Media Item 3',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        type specimen book... 
        `,
        imageInfo: {
            src: '/moreLove.png',
            alt: 'media item 1'
        },
    },
    {
        title: 'Media Item 4',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  type specimen book... 
                  `,
        imageInfo: {
            src: '/moreLove.png',
            alt: 'media item 1'
        },
    },
    {
        title: 'Media Item 5',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  type specimen book... 
                  `,
        imageInfo: {
            src: '/moreLove.png',
            alt: 'media item 1'
        },
    }
];

const productionItems = [
    {
        src: '/moreLove.png',
        alt: 'More love'
    },
    {
        src: '/hero.png',
        alt: 'Monot pore'
    },
    {
        src: '/bhagoruwa.png',
        alt: 'Bottle Rockets Bhagoruwa'
    },
    {
        src: '/panthoibi.png',
        alt: 'Beats of Merapani Paanthoibi'
    },
    {
        src: '/kinaare.png',
        alt: 'Suzon Kinaare'
    },
    {
        src: '/suzonDilQaabu.png',
        alt: 'Dil Qaabu'
    },
    {
        src: '/deuka.png',
        alt: 'Deuka, Emuthi Puthi OST'
    },
];


const Index = () => {
    return (
        <>
            <Home 
                mediaItems={mediaItems}
                productions={productionItems}
            />
        </>
    );
};
export default Index;