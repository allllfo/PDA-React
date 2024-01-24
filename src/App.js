import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloWorld from './components/HelloWorld'
import CaptionImage from './components/captionImage'
import BlinkComponent from './components/BlinkComponent';
import CountComponent from './components/CountComponent';
import FocusInputButton from './components/FocusInputButton';
import TodoInput from './components/TodoInput';
import PrimeCalculator from './components/UseMemo';
import { ThemeProvider } from './components/ThemeProvider';
import ThemeButton from './components/ThemeButton';
import Mypage from './components/MyPage';

function App() {
  const [visible, setVisible] =React.useState(true)
  return (
    <div className="App">
      {/* <button onClick={()=>{setVisible(!visible)}}>클릭</button>// 클릭하면, visible이 사라졌다가 다시 나타나므로, useEffect에 리소스 해제해주는 함수가 나타난다. */}
      {/* {visible? <CountComponent/> :null} //1증가할때는 상태를 유지하면서 감 */}
      {/* <HelloWorld/> */}
      {/* <CaptionImage imgUrl="https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004" caption="구름그림"/> */}
       {/* <BlinkComponent text={"hello"}/>  */}

       {/* <FocusInputButton/> */}
       <TodoInput/>
       {/* <PrimeCalculator/> */}

       {/* <ThemeProvider> */}
        {/* <ThemeButton/> */}
        {/* <Mypage/> */}
       {/* </ThemeProvider> */}

    </div>
  );
}

export default App;
