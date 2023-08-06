
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { API } from './components/service/api';
const Maincomp=()=>{



const [news, setNews] = useState({length:0});
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('')
  const [totalPages, setTotalPages] = useState(0);
  // const news=
  // [
  // {author: "LIVELAW NEWS NETWORK",
  // content: "Supreme Court to hear Rahul Gandhi's plea TODAY against Gujarat High Court's order refusing to stay his conviction in criminal ddefamation case over 'why all thieves share Modi surname' remark.\r\nRahul … [+1486 chars]",
  // description: "Supreme Court to hear Rahul Gandhi's plea TODAY against Gujarat High Court's order refusing to stay his conviction in criminal ddefamation case over 'why all thieves share Modi surname'...",
  // publishedAt: "2023-08-04T08:11:24Z",
  // source: {id: null, name: 'Livelaw.in'},
  // title: "Supreme Court -Rahul Gandhi's Plea To Stay Conviction In Defamation Case Over 'Modi Surname' Remark- LIVE UPDATES - Live Law - Indian Legal News",
  // url: "https://www.livelaw.in/top-stories/rahul-gandhi-supreme-court-defamation-modi-surname-stay-conviction-gujarat-high-court-234346",
  // urlToImage: "https://www.livelaw.in/h-upload/2023/07/21/482256-live-updates-rahul-gandhi-and-sc.jpg"},

  // {author: "LIVELAW NEWS NETWORK","content": "Supreme Court to hear Rahul Gandhi's plea TODAY against Gujarat High Court's order refusing to stay his conviction in criminal ddefamation case over 'why all thieves share Modi surname' remark.\r\nRahu… [+1486 chars]",description: "Supreme Court to hear Rahul Gandhi's plea TODAY against Gujarat High Court's order refusing to stay his conviction in criminal ddefamation case over 'why all thieves share Modi surname'...",publishedAt: "2023-08-04T08:11:24Z",source: {id: null, name: 'Livelaw.in'},title: "Supreme Court -Rahul Gandhi's Plea To Stay Conviction In Defamation Case Over 'Modi Surname' Remark- LIVE UPDATES - Live Law - Indian Legal News",url: "https://www.livelaw.in/top-stories/rahul-gandhi-supreme-court-defamation-modi-surname-stay-conviction-gujarat-high-court-234346",urlToImage: "https://www.livelaw.in/h-upload/2023/07/21/482256-live-updates-rahul-gandhi-and-sc.jpg"},
  // {author: "LIVELAW NEWS NETWORK","content": "Supreme Court to hear Rahul Gandhi's plea TODAY against Gujarat High Court's order refusing to stay his conviction in criminal ddefamation case over 'why all thieves share Modi surname' remark.\r\nRahu… [+1486 chars]",description: "Supreme Court to hear Rahul Gandhi's plea TODAY against Gujarat High Court's order refusing to stay his conviction in criminal ddefamation case over 'why all thieves share Modi surname'...",publishedAt: "2023-08-04T08:11:24Z",source: {id: null, name: 'Livelaw.in'},title: "Supreme Court -Rahul Gandhi's Plea To Stay Conviction In Defamation Case Over 'Modi Surname' Remark- LIVE UPDATES - Live Law - Indian Legal News",url: "https://www.livelaw.in/top-stories/rahul-gandhi-supreme-court-defamation-modi-surname-stay-conviction-gujarat-high-court-234346",urlToImage: "https://www.livelaw.in/h-upload/2023/07/21/482256-live-updates-rahul-gandhi-and-sc.jpg"},
  // {author: "LIVELAW NEWS NETWORK","content": "Supreme Court to hear Rahul Gandhi's plea TODAY against Gujarat High Court's order refusing to stay his conviction in criminal ddefamation case over 'why all thieves share Modi surname' remark.\r\nRahu… [+1486 chars]",description: "Supreme Court to hear Rahul Gandhi's plea TODAY against Gujarat High Court's order refusing to stay his conviction in criminal ddefamation case over 'why all thieves share Modi surname'...",publishedAt: "2023-08-04T08:11:24Z",source: {id: null, name: 'Livelaw.in'},title: "Supreme Court -Rahul Gandhi's Plea To Stay Conviction In Defamation Case Over 'Modi Surname' Remark- LIVE UPDATES - Live Law - Indian Legal News",url: "https://www.livelaw.in/top-stories/rahul-gandhi-supreme-court-defamation-modi-surname-stay-conviction-gujarat-high-court-234346",urlToImage: "https://www.livelaw.in/h-upload/2023/07/21/482256-live-updates-rahul-gandhi-and-sc.jpg"},
  // {author: "LIVELAW NEWS NETWORK","content": "Supreme Court to hear Rahul Gandhi's plea TODAY against Gujarat High Court's order refusing to stay his conviction in criminal ddefamation case over 'why all thieves share Modi surname' remark.\r\nRahu… [+1486 chars]",description: "Supreme Court to hear Rahul Gandhi's plea TODAY against Gujarat High Court's order refusing to stay his conviction in criminal ddefamation case over 'why all thieves share Modi surname'...",publishedAt: "2023-08-04T08:11:24Z",source: {id: null, name: 'Livelaw.in'},title: "Supreme Court -Rahul Gandhi's Plea To Stay Conviction In Defamation Case Over 'Modi Surname' Remark- LIVE UPDATES - Live Law - Indian Legal News",url: "https://www.livelaw.in/top-stories/rahul-gandhi-supreme-court-defamation-modi-surname-stay-conviction-gujarat-high-court-234346",urlToImage: "https://www.livelaw.in/h-upload/2023/07/21/482256-live-updates-rahul-gandhi-and-sc.jpg"},
  // {author: "LIVELAW NEWS NETWORK","content": "Supreme Court to hear Rahul Gandhi's plea TODAY against Gujarat High Court's order refusing to stay his conviction in criminal ddefamation case over 'why all thieves share Modi surname' remark.\r\nRahu… [+1486 chars]",description: "Supreme Court to hear Rahul Gandhi's plea TODAY against Gujarat High Court's order refusing to stay his conviction in criminal ddefamation case over 'why all thieves share Modi surname'...",publishedAt: "2023-08-04T08:11:24Z",source: {id: null, name: 'Livelaw.in'},title: "Supreme Court -Rahul Gandhi's Plea To Stay Conviction In Defamation Case Over 'Modi Surname' Remark- LIVE UPDATES - Live Law - Indian Legal News",url: "https://www.livelaw.in/top-stories/rahul-gandhi-supreme-court-defamation-modi-surname-stay-conviction-gujarat-high-court-234346",urlToImage: "https://www.livelaw.in/h-upload/2023/07/21/482256-live-updates-rahul-gandhi-and-sc.jpg"}]

  
  const searchHandler=async()=>{
    setPage(1);
    const res=await API.searchs({search,page});
    const parsed_data=res.data.data;
    setTotalPages(Math.ceil(parsed_data.totalResults/20));
    console.log(setTotalPages);
    console.log(parsed_data.articles);
    setNews(parsed_data.articles);
    setSearch('');
  }

  
  useEffect(()=>{
    const  foo=async()=>{


      const res=await API.searchs({search,page});
      const parsed_data=res.data.data;
      
      setTotalPages(Math.ceil(parsed_data.totalResults/20));
      console.log(parsed_data.articles);
      setNews(parsed_data.articles);

    }

    foo();
  },[page]);


  useEffect(()=>{
    const  foo=async()=>{


      const res=await API.searchs({search:search});
      const parsed_data=res.data.data;
      
      setTotalPages(Math.ceil(parsed_data.totalResults/20));
      console.log(parsed_data.articles);
      setNews(parsed_data.articles);
    }

    foo();
  },[]);

 return (
    <div id="top">
    <div className="h-[70px] w-screen bg-slate-300 flex items-center justify-between">
        <div className="flex items-center  gap-4 pl-4">
          <Link to="/" className='text-[20px]'>TheFourthPillar</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </div>

        <div className="flex flex-row items-center gap-4 pr-10 ">
          <input className="bg-slate-200 rounded-lg p-1" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
          <a href="#top" onClick={()=>searchHandler()} className="bg-blue-200 hover:bg-blue-400 cursor-pointer border-[2px] border-black p-[4px] rounded-[8px]"
                >
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
    </div>

    <p id="topa">&nbsp;</p>
    <div  className="flex flex-row flex-wrap justify-center gap-8 pt-4">

    
    {news.length>0?news.map((n,index)=>{
      let t=n.title;
      const t_size=t.length;
      if(t_size>50){
        t=t.slice(0,t.indexOf(" ",80))+"...";
      }
      let cont=n.content;
      let flag=false;
      if(cont==null){
        cont = n.description;
        flag=true;
      }
      if(cont!=null){
        if(cont.length>150){
          cont=cont.slice(0,cont.indexOf(" ",150))+"...";
        }
      }

      let link=n.url;
      let imageUrl=n.urlToImage;
      if(imageUrl===null){
        imageUrl="./BreakingNews.jpg";
      }
      return(
        <div key={index} className="relative w-[300px] h-[475px]  bg-blue-200 rounded-lg overflow-hidden ">
          <img src={imageUrl} className="w-[300px] h-[180px] object-cover"/>

          <div className="flex flex-col ">
            <div className="flex flex-col  px-2 p-3 ">
                <p className="cursor-default limit-lines leading-[22px] text-[18px] font-semibold pb-2">
                  {t}
                </p>
                <p className="limit-para">
                  {cont!==null?cont:"Click below to know more"}

                </p>


            </div>

            <a href={link} target="_blank" className="absolute bg-blue-400 opacity-75  hover:opacity-100 cursor-pointer shadow-xl bottom-[15px] right-[20px] flex justify-center items-center  rounded-lg w-[110px] h-[40px]">
              Read more
            </a>
        </div>
        </div>
      )
    }


) : <div className="flex items-center h-[calc(100vh_-_200px)] text-[20px] text-slate-600"> No content to display related to this topic</div>  }

</div>
  <div className="flex flex-row justify-between pl-[52px] pr-[48px] mt-[48px] w-screen mb-[50px]">
  <a href="#top" className={` bg-slate-700 text-white opacity-75  hover:opacity-100 cursor-pointer shadow-xl bottom-[15px]  ${news.length==0?"hidden":""} right-[20px] flex justify-center items-center  rounded-lg w-[110px] h-[40px] ${page===1?"invisible":""}`} onClick={()=>{setPage(page-1);}}>
              Prev
  </a>
  <a href="#top" className={` bg-slate-700 text-white opacity-75  hover:opacity-100 cursor-pointer shadow-xl ${news.length==0?"hidden":""} bottom-[15px] right-[20px] flex justify-center items-center  rounded-lg w-[110px] h-[40px] ${page===totalPages?"invisible":""}`} onClick={()=>{setPage(page+1);}}>
              Next
  </a>
      

    
    </div> 


    </div>
 )
}

export default Maincomp;