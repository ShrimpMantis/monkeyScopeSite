import { NextResponse } from "next/server";

export const GET = async (request) => {
    //get data from firebase
    const dataFromSource = "";
    //transform the data according to the schema of the site;
    const response = {
        about: {
            title: "",
            content: "",
            link:"",
        },
        productions: {
            title: "",
            content: "",
            productionList: [
                {
                    productionId:"",
                    title: "",
                    link:"",
                    image: {
                        url:"",
                        title:"",
                        imageId:""
                    },
                },
                {
                    productionId:"",
                    title: "",
                    link:"",
                    image: {
                        url:"",
                        title:"",
                        imageId:""
                    }, 
                }
            ]
        },
        latestNews: {
            title: "",
            content: "",
            news:[

            ],
        },
        awards: {
            title: "",
            content: "",
            link:"",
        }
    } ;

    return NextResponse.json(response);
};
