import s from "./study-block.module.scss"
import {CourseItemType} from "../../../service/study-block/study.type.ts";

export function CourseItem({bgColor, name, image}: CourseItemType) {

  return (

    <div className={s.wrapper}>
      <div className={s.imageBlock} style={{backgroundColor: bgColor, width: '100%', height:'100%'}}>
        <div className={s.imageWrapper}>
          <img src={image} alt="just img"/>
        </div>
      </div>
      <div className={s.titleBlock}>
        <div className={s.title}>{name}</div>
      </div>
    </div>
  );
}


