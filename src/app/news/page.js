import NewsComponent from "./news";
const news= [
    {
        title:'Fake title',
        content:'fake content',
        imageInfo: {
            src:'/kukili.png',
            alt:'kuki'
        }
    },
    {
        title:'Fake title',
        content:'fake content',
        imageInfo: {
            src:'/kukili.png',
            alt:'kuki'
        }
    },
    {
        title:'Fake title',
        content:'fake content',
        imageInfo: {
            src:'/kukili.png',
            alt:'kuki'
        }
    },
    {
        title:'Fake title',
        content:'fake content',
        imageInfo: {
            src:'/kukili.png',
            alt:'kuki'
        }
    },
    {
        title:'Fake title',
        content:'fake content',
        imageInfo: {
            src:'/kukili.png',
            alt:'kuki'
        }
    },
    {
        title:'Fake title',
        content:'fake content',
        imageInfo: {
            src:'/kukili.png',
            alt:'kuki'
        }
    }
];
const Awards = () => {
    return (
        <>
            <NewsComponent 
                newsList={news}
                key={"newsComponent"}
            />
        </>
    );
};

export default Awards;