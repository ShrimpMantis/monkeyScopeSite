import ProductionComponent from "./productions";
const productionList = [
    {
        id: 0,
        name:'Monot Pore',
        category: 'MUSIC_VIDEO',
        language: 'Assamese',
        releaseDate:'2023',
        tags:["Assam", "Arunachal"],
        synopsis:'',
        link:'',
        credit: {
            actors: [
                {fullName:'Chiki', id:0},
                {fullName:'Miki'}
            ],
            director:'',
            producer:'',
            lighting:'',
            cinematography:'',
            editor:[{fullName:''}],
            casting:'',
            makeUp: [{fullName:''}],
            costume: [{fullName: ''}],
            spotboys: [{fullName: ''}]
        },
        image: {
                src: '/kinaare.png',
                alt:'kinaare',
                isMain: true,
        },
    },

    {
        id: 1,
        name:'Monot Pore',
        category: 'MUSIC_VIDEO',
        language: 'Assamese',
        releaseDate:'2023',
        tags:["Assam", "Arunachal"],
        synopsis:'',
        link:'',
        credit: {
            actors: [
                {fullName:'Chiki', id:0},
                {fullName:'Miki'}
            ],
            director:'',
            producer:'',
            lighting:'',
            cinematography:'',
            editor:[{fullName:''}],
            casting:'',
            makeUp: [{fullName:''}],
            costume: [{fullName: ''}],
            spotboys: [{fullName: ''}]
        },
        image: {
                src: '/kinaare.png',
                alt:'kinaare',
                isMain: true,
        },
    },
    {
        id: 1,
        name:'Monot Pore',
        category: 'MUSIC_VIDEO',
        language: 'Assamese',
        releaseDate:'2023',
        tags:["Assam", "Arunachal"],
        synopsis:'',
        link:'',
        credit: {
            actors: [
                {fullName:'Chiki', id:0},
                {fullName:'Miki'}
            ],
            director:'',
            producer:'',
            lighting:'',
            cinematography:'',
            editor:[{fullName:''}],
            casting:'',
            makeUp: [{fullName:''}],
            costume: [{fullName: ''}],
            spotboys: [{fullName: ''}]
        },
        image: {
                src: '/kinaare.png',
                alt:'kinaare',
                isMain: true,
        },
    },
    {
        id: 1,
        name:'Monot Pore',
        category: 'MUSIC_VIDEO',
        language: 'Assamese',
        releaseDate:'2023',
        tags:["Assam", "Arunachal"],
        synopsis:'',
        link:'',
        credit: {
            actors: [
                {fullName:'Chiki', id:0},
                {fullName:'Miki'}
            ],
            director:'',
            producer:'',
            lighting:'',
            cinematography:'',
            editor:[{fullName:''}],
            casting:'',
            makeUp: [{fullName:''}],
            costume: [{fullName: ''}],
            spotboys: [{fullName: ''}]
        },
        image: {
                src: '/kinaare.png',
                alt:'kinaare',
                isMain: true,
        },
    },
    {
        id: 1,
        name:'Monot Pore',
        category: 'MUSIC_VIDEO',
        language: 'Assamese',
        releaseDate:'2023',
        tags:["Assam", "Arunachal"],
        synopsis:'',
        link:'',
        credit: {
            actors: [
                {fullName:'Chiki', id:0},
                {fullName:'Miki'}
            ],
            director:'',
            producer:'',
            lighting:'',
            cinematography:'',
            editor:[{fullName:''}],
            casting:'',
            makeUp: [{fullName:''}],
            costume: [{fullName: ''}],
            spotboys: [{fullName: ''}]
        },
        image: {
                src: '/kinaare.png',
                alt:'kinaare',
                isMain: true,
        },
    },
    {
        id: 1,
        name:'Monot Pore',
        category: 'MUSIC_VIDEO',
        language: 'Assamese',
        releaseDate:'2023',
        tags:["Assam", "Arunachal"],
        synopsis:'',
        link:'',
        credit: {
            actors: [
                {fullName:'Chiki', id:0},
                {fullName:'Miki'}
            ],
            director:'',
            producer:'',
            lighting:'',
            cinematography:'',
            editor:[{fullName:''}],
            casting:'',
            makeUp: [{fullName:''}],
            costume: [{fullName: ''}],
            spotboys: [{fullName: ''}]
        },
        image: {
                src: '/kinaare.png',
                alt:'kinaare',
                isMain: true,
        },
    }
];
const ProductionWrapper = () => {
    return (
        <ProductionComponent productions={productionList}/>
    );
}

export default ProductionWrapper;