import { useState } from "react";
import axios from "axios";


const Axios = () => {
    const [data, setData] = useState(null);
    const onClick = async() => { // 이렇게 async를 넣으면 비동기 함수가 됨. 이 블럭은 비동기구역
        try {
            const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=ffbbc82f694941a7b0e2d4f4515abcc7");
            console.log(response);
            // response가 오면 setData
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    }
    return(
        <>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
            {/* JSON파일로 들어오지 않을 때 에는 stringfy걸어줄 필요 없음 */}
        </>
    );
}
export default Axios;