import './App.css'
import {StudyBlocks} from "./components/study-blocks/study-blocks.tsx";
import {useGetStudyItemsQuery} from "./service/study-block/study.service.ts";

function App() {
  const {data: courseItems, isLoading} = useGetStudyItemsQuery()


  if (isLoading) {
    return <div style={{fontSize:'30px', textAlign:'center'}}>Loading....</div>
  }
  if (courseItems) {
    return (
      <StudyBlocks courseItems={courseItems}/>
    )
  } else {
    return (
      <div>SOMESING WRONG</div>
    )
  }


}

export default App
