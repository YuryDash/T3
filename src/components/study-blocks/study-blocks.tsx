import {CourseItem} from "./course-item/course-item.tsx";
import {CourseItemType} from "../../service/study-block/study.type.ts";
import s from "./study-blocks.module.scss"

type Props = {
  courseItems: CourseItemType[]
}

export function StudyBlocks({courseItems}: Props) {
  const mappedCourseItems = courseItems?.map((el: CourseItemType) => {
    return (
      <div>
        <div className={s.gridItem}>
          <CourseItem
            key={el.id}
            image={el.image}
            name={el.name}
            id={el.id}
            bgColor={el.bgColor}
            tags={el.tags}
          />
        </div>
      </div>
    )
  })
  return (
      <div className={s.gridContainer}>{mappedCourseItems}</div>
  );
}

