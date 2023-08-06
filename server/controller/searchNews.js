

export const searchNews=async(req,res)=>{
    const search=req.body.search;;
    const page=req.body.page;
    console.log(page);
    console.log("First");
    try {    
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d114f7f8a8bd42fc9b85336ee25c7463&page=${page}&pageSize=20`;
        if(search!=''){
            url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d114f7f8a8bd42fc9b85336ee25c7463&q=${search}&page=${page}&sortBy=popularity&page=${1}&pageSize=20`;

        }
        console.log("Second");
        let data = await fetch(url);

        console.log("Third");
        let parsed_data = await data.json();
        console.log("Fourth");
        res.status(200).json({data:parsed_data});
        console.log("Fifth");


    } catch(e){
        res.status(405).json({msg:"Some error occured"})
    }

    





}

