import React from 'react'
import styles from './styles/Tile.module.css'

/**
 * Tile Component
 *
 * A reusable content tile that displays a heading and a short paragraph.
 * Typically used as a child inside a TilesContainer.
 *
 * @component
 *
 * @param {Object} props - Props passed to the component.
 * @param {string} props.tittle - The title or heading displayed at the top of the tile.
 * @param {string} props.para - The paragraph or description content of the tile.
 *
 * @returns {JSX.Element} The rendered Tile component.
 */
function Tile({ tittle , para }) {
    return (
        <div className={styles.box} >
          <h1 className={styles.tittle} >{tittle}</h1>
          <h4 className={styles.para} >{para}</h4>
        </div>
    )
}

export default Tile