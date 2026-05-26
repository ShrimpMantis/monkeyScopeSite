import React from 'react';
import About from './about';

const teamInfo = {
 title:'The Team',
 teamList: [
    {
        imageInfo: {
            src: '/kuku.jpg',
            alt: 'teamMem1'
        },
        title: 'Kulanandini Mahanta Founder',
        description: 'She is a good girl likes to cook cook cook a puk...',
    },
    {
        imageInfo: {
            src: '/pugu.jpg',
            alt: 'teamMem2'
        },
        title: 'Poonam Gurung Co-Founder',
        description: 'She is a dynamic girl who can somersault...',
    },
 ],
};

const mission = {
    title: 'Mission',
    description: '',
}
const vision = {
    title: 'Vision',
    description: '',
};
const history = {
    title: 'History',
    description: '',
};
const specializations = [
    {
        imageInfo: {
            src:'/moreLove.png',
            alt:'placeholder'
        },
        content:`At Monkey Scope, music videos are more than just moving images; they are expansive canvases where raw human emotions come to life. 
Our diverse portfolio spans collaborations with groundbreaking artists and independent forces, including standout projects for Suzon, Taba Chake, Bottle Rocket's *Bhagoruwa*, and Snehdeep Singh Kalsi's *Pyar Ki Talash Mein*. 
We seamlessly bridge the worlds of independent music and theatrical cinema, having crafted the visceral *Deuka* music video for Metanormal's *Emuthi Puthi* OST, alongside cutting-edge, 
avant-garde visual narratives for avant-folk metal pioneers Serpents of Pakhangba.
Every frame we build is defined by a unique convergence of technical mastery and industry grit. 
We combine Kulanandini's elite USA-based training in cinematography with the striking, immersive world-building of our in-house art department. This visual sophistication is fueled by the electric energy and unique enthusiasm of Poonam Gurung, 
who infuses every production with years of high-level performance experience in Bollywood. The result is a signature aesthetic where deep emotional storytelling meets world-class, uncompromising execution.e`,
        title:'Music Video',
        link: '/productions'
    },
   /*  {
        imageInfo: {
            src:'/moreLove.png',
            alt:'placeholder'
        },
        content:`It is a long established fact that a reader will be distracted by 
        the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
        as opposed to using 'Content here, content here', making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
        text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
        Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like)`,
        title:'Educational Films',
        link: '/productions'
    }, */
    {
        imageInfo: {
            src:'/moreLove.png',
            alt:'placeholder'
        },
        content:`It is a long established fact that a reader will be distracted by 
        the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
        as opposed to using 'Content here, content here', making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
        text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
        Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like`,
        title:'Short Films',
        link: '/productions'
    },
    {
        imageInfo: {
            src:'/moreLove.png',
            alt:'placeholder'
        },
        content:`It is a long established fact that a reader will be distracted by 
        the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
        as opposed to using 'Content here, content here', making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
        text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
        Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like`,
        title:'Documentaries',
        link: '/productions'
    },
    {
        imageInfo: {
            src:'/moreLove.png',
            alt:'placeholder'
        },
        content:`It is a long established fact that a reader will be distracted by 
        the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
        as opposed to using 'Content here, content here', making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
        text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
        Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like`,
        title:'Fight Choreography',
        link: '/productions'
    },
];

const AboutWrapper = () => {
    return (
        <About
            history={history}
            vision={vision}
            mission={mission}
            teamInfo={teamInfo}
            specializations={specializations}
        />
    );
};

export default AboutWrapper;