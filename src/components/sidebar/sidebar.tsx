import s from './sidebar.module.scss'
import {selectValue} from "../../constants/constants.ts";
import {useState} from "react";
import {SidebarButton} from "./sidebar-button/sidebar-button.tsx";

type Props = {
  selectBlock: (value: string) => void
}

export function Sidebar({selectBlock}: Props) {

  const [selectButton, setSelectButton] = useState(selectValue.all)

  const selectBlockHandler = (value: string) => {
    selectBlock(value)
    setSelectButton(value)
  }

  return (
    <div className={s.wrapper}>

      <SidebarButton selectButton={selectButton} name={selectValue.all} selectBlockHandler={selectBlockHandler}/>
      <SidebarButton selectButton={selectButton} name={selectValue.logic} selectBlockHandler={selectBlockHandler}/>
      <SidebarButton selectButton={selectButton} name={selectValue.riddle} selectBlockHandler={selectBlockHandler}/>
      <SidebarButton selectButton={selectButton} name={selectValue.puzzle} selectBlockHandler={selectBlockHandler}/>
      <SidebarButton selectButton={selectButton} name={selectValue.travel.value} selectBlockHandler={selectBlockHandler}/>

    </div>
  );
}

