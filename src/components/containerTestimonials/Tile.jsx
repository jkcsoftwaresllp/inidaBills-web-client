import React from 'react'
import styles from './styles/Tile.module.css'
import PasteSVG from '../home/svg/pasteSVG'



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
 * @param {string} props.icon - Icon of Tile
 * @param {string} props.width - Width of Tile only 28vw and 45vw
 *
 * @returns {JSX.Element} The rendered Tile component.
 */
function Tile({ tittle, para, icon, width, iconDirection }) { // only---  width="28vw" , width="45vw" & iconDirection="inline" for inline , Null for Block
  return (
    <div className={`${styles.box} ${iconDirection === "inline" ? styles.iconInlineBox : styles.iconBlockBox}`} style={{ width }} >
      <div className={`${styles.icon} ${iconDirection === "inline" ? styles.iconInline : styles.iconBlock}`} >
        {icon}
      </div>
      <div className={`${iconDirection === "inline" ? styles.whenTextInline : ""}`} >
        <h1 className={styles.tittle} >{tittle}</h1>
        <h4 className={styles.para} >{para}</h4>
      </div>
    </div>
  )
}

export default Tile