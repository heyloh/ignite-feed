import styles from "./Avatar.module.css";

interface IAvatarProps {
  hasBorder?: boolean;
  source: string;
  alt?: string;
}

export function Avatar({ source, hasBorder = true, alt = '' }: IAvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={source}
      alt={alt}
    />
  );
}
