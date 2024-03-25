import './App.css'
import {StudyBlocks} from "./components/study-blocks/study-blocks.tsx";
import {useGetStudyItemsQuery} from "./service/study-block/study.service.ts";
import {Loading} from "./components/loading/loading.tsx";
import {Sidebar} from "./components/sidebar/sidebar.tsx";
import {useState} from "react";
import {selectValue} from "./constants/constants.ts";

function App() {
  const {data: courseItems, isLoading} = useGetStudyItemsQuery()
  const [filteredValues, setFilteredValues] = useState(courseItems)
  const selectBlock = (value: string) => {
    if(value === selectValue.all) {
      return setFilteredValues(courseItems)
    } else {
      setFilteredValues(courseItems?.filter(el => {
        return el.tags.find(tag => tag === value)
      }))
    }
  }

  if (isLoading) {
    return <Loading/>
  }
  if (courseItems) {
    return (
      <div className='wrapper'>
        <Sidebar selectBlock={selectBlock}/>
        <StudyBlocks courseItems={filteredValues || courseItems }/>
      </div>
    )
  } else {
    return (
      <div>SOMETHING WRONG</div>
    )
  }

}

export default App
