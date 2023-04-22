import styled, {css} from "styled-components";

// nav 바에서 하위 내용을 렌더링(업데이트)

const categories = [ // nav 배열
    {
        name: 'all',     
        // axios get 할 때 필요한 값
        text: '전체보기'
        // 화면에 보여줄 값
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'sport',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    },
]
// Categoryblock = 네비박스
// Category = 각각의 카테고리
const CategoriesBlock = styled.div `
    display: flex;
    padding: 1rem;
    width: 768px;
        // NewsList 768px 이라서 nav도 똑같은 너비
    margin: 0 auto;
    // 화면 너비가 768px이하 적용
    @media screen and (max-width: 768px) {
        width: 100%;
        // 내용이 수평으로 넘칠 때 만 해당 요소에 수평 스크롤바가 표시
        overflow-x: auto;
    }
`;

const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre; // 공백이나 줄바꿈이 있는 경우 그대로 표시
    text-decoration: none;
    color: inherit; // 부모의 컬러값을 그대로 가져옴
    padding-bottom: .25rem;

    &:hover {
        color: #495057;
    }
    ${props => 
        props.active && css` // css를 넣으면 스타일 재정의
        font-weight: 600;
        border-bottom: 2px solid #22bbcf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
        `}
        & + & {
            margin-left: 1rem; // 오른쪽에 주면 배치가 흐트러 질 수도 있음
        }
`;

const Categories = ({onSelect, category}) => {

    return (
        <CategoriesBlock>
            {categories.map(c=>(
                <Category key={c.name} active={category === c.name} onClick={() => onSelect(c.name)}>
                    {c.text}
                </Category>
            ) )}
        </CategoriesBlock>
    )
}
export default Categories;
// Categories clicked -> NewsList -> NewsItem 순서대로 정보(?) 넘김

