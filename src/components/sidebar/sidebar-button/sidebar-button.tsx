import s from "./sidebar-button.module.scss";

type Props = {
  name: string
  selectBlockHandler: (value: string)=> void
  selectButton: string
}

export function SidebarButton({name, selectBlockHandler, selectButton}: Props) {
  return (
    <div onClick={() => selectBlockHandler(name)}
         className={`${s.button} ${name === selectButton ? s.selected : ''}`}>
      <span>{name}</span>
    </div>);
}

