import React from 'react';
import About from './about';

const teamInfo = {
 title:'The Team',
 teamList: [
    {
        imageInfo: {
            src: '/moreLove.png',
            alt: 'teamMem1'
        },
        title: 'Kulanandini Mahanta Founder',
        description: 'She is a good girl likes to cook cook cook a puk...',
    },
    {
        imageInfo: {
            src: '/moreLove.png',
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
        content:`It is a long established fact that a reader will be distracted by 
        the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
        as opposed to using 'Content here, content here', making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
        text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
        Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like`,
        title:'Music Video'
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
        sometimes by accident, sometimes on purpose (injected humour and the like)`,
        title:'Educational Films'
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
        title:'Short Films'
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
        title:'Documentaries'
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
        title:'Fight Choreography'
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