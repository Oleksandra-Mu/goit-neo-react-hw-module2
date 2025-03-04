import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <li className={css.friendlistitem}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendname}>{name}</p>
      <p
        className={clsx(css.status, {
          [css.online]: status,
          [css.offline]: !status,
        })}
      >
        {status ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
