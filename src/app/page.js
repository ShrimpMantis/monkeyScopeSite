import Home from "./home/page";
import  '../app/globals.css';

const mediaItems = [
    {
        title: 'Media item 1',
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
        alt: 'media item 1'
    },
    {
        src: '/hero.png',
        alt: 'media item 1'
    },
    {
        src: '/bhagoruwa.png',
        alt: 'media item 1'
    },
    {
        src: '/kinaare.png',
        alt: 'media item 1'
    },
    {
        src: '/moreLove.png',
        alt: 'media item 1'
    },
    {
        src: '/moreLove.png',
        alt: 'media item 1'
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