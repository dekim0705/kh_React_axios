import { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3em;
    width: 768px;
    margin: 0 auto; // 중앙배치
    margin-top: 2rem;
    @media screen and (max-width: 768px){ 
        width: 100%;
        padding-left: 1em;
        padding-right: 1em;
    }
`;

// const sampleArticle = {
//     title: "제목",
//     description: "내용",
//     url: "http://google.com",
//     urlToImage: "http://via.placeholder.com/160"
// }


const NewsList = (props) => {
    const [articles, setArticles] = useState(null); // article정보가 바뀌면 렌더링
    const [loading, setLoading] = useState(false);

    // 마운트되고 난 다음(화면을 그려준 다음) 서버에 갔다 와야 함 
    useEffect (() => {
        const fetchData = async () => { // 함수표현식은 hoisting이 안돼서 위에서 만들고 밑에서불러줘야 함
            setLoading(true); // 로딩 중 (로딩바 도는중~)
            try {
                const query = props.category === "all" ? "all" : `category=${props.category}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=e433daf85210474b874cd936d2259155`,
                    );
                    setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false); // 응답 성공/실패에 관계 없이 try 구간을 돌아오면 로딩바는 false 됨
        }
        fetchData(); // 함수 부르기 !!! 중요 !!!!
    }, [props.category]); 

    if(loading) {
        return <NewsListBlock> 💌 로딩 중 ..... </NewsListBlock>
    }
    // if(!articles) return null; // 화면이 안그려지면 튕겨나감. null = false
    // return문에서 && 사용해서 article이 있으면 렌더링 걸기로 했기 때문에 없어도 됨 

    return(
        <NewsListBlock>
            {articles && articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
}
export default NewsList;



