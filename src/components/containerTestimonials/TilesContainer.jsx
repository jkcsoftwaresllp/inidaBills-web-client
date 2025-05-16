import React from 'react'
import styles from './styles/Tiles.module.css';

/**
 * TilesContainer Component
 *
 * A layout wrapper that displays a section with a title, description, and child components inside.
 * It allows switching background styles based on the `background` prop.
 *
 * @component
 *
 * @param {Object} props - Props passed to the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the container.
 * @param {number} props.background - Background theme (0 for white, 1 for pink).
 * @param {string} props.tittle - The main heading of the tile section.
 * @param {string} props.description - A short description displayed below the title.
 *
 * @returns {JSX.Element} The rendered TilesContainer component.
 */
function TilesContainer({ children , background , tittle , description }) { // pass 0 and 1 for background in background
    return (
        <div className={` ${styles.container} ${background === 1 ? styles.containerBGpink : styles.containerBGwhite} `} >
            <h1 className={styles.tittle} > {tittle} </h1>
            <h4 className={styles.description} > {description} </h4>
            <div>
               {children}
            </div>
        </div>
    )
}

export default TilesContainer
