import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="26"
      height="34"
      viewBox="0 0 40 50"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <text x="1" y="38" fontSize="44" fontWeight="700" fontFamily="Gotham, system-ui, sans-serif">
            S
          </text>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
