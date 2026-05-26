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
        title:'Rolling Stone India 10 best Indian Music Videos 2022',
        content:`Rolling Stone India has listed Deuka as one of the 10 best Indian Music Videos of 2022. 
        Panthoibi is a music video directed by Kulanandini Mahanta and produced by Kulanandini Mahanta and Arunachal Media and Entertainment. Deuka is a music video directed by Kulanandini Mahanta and produced by Kulanandini Mahanta and Arunachal Media and Entertainment.`,
        imageInfo: {
            src:'/panthoibiGirl.png',
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