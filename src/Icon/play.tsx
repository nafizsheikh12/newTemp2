import Icon from "./icons";
import { IconPropsT } from "./types";

function Play(props: IconPropsT) {
  const { title = "Upload", size, ...otherProps } = props;
  return (
    <Icon viewBox="0 0 42 27" size={size} title={title} {...otherProps}>
      <path d="M34.3219 11.3625C34.3219 11.25 34.3406 11.1375 34.3406 11.025C34.3406 4.93125 29.4844 0 23.4938 0C19.1719 0 15.4594 2.56875 13.7156 6.28125C12.9563 5.89687 12.1031 5.67188 11.2031 5.67188C8.4375 5.67188 6.13125 7.725 5.69062 10.4062C2.37187 11.55 0 14.7281 0 18.4688C0 23.175 3.75937 27 8.39062 27H18V19.5H13.4813L21 11.6531L28.5188 19.4906H24V26.9906H34.3406C38.5781 26.9906 42 23.475 42 19.1719C42 14.8687 38.5594 11.3719 34.3219 11.3625Z" />
    </Icon>
  );
}

export default Play;
