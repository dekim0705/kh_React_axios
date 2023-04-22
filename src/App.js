// import logo from './logo.svg';
import './App.css';
// import Axios from './Axios';
import { useState } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

function App() {
  const [category, setCategory] = useState("all");
  const onSelect = (category) => setCategory(category);
  // onSelect에 category가 들어오면 setCategory
  return (
    <>
      {/* <Axios /> */}
      {/* <NewsList /> */}
      <Categories category={category} onSelect={onSelect} />
      {/* 클릭된 카테고리의 정보가 onSelect으로 카테고리가 바뀌어서 들어옴. 
          하위 컴포넌트에서 눌렸던 정보가 바뀌어서 반영이 됨. 
        onSelect에 함수를 넣으면 현재 선택된 이름이 들어옴. 함수를 넣는 이유는 props는 부모-> 자식, 위에서 아래로 밖에 못가기 때문   */}
      <NewsList category={category} />
      {/* 클릭된 카테고리를 불러오는 것  */}
    </>
  );
}

export default App;
