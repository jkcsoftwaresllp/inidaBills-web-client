import React from 'react'
import styles from './styles/Header.module.css'
import ButtonWithBG from '../buttons/ButtonWithBG'

function Header() {
    return (
        <div className={styles.container} >
            {/* <div className={styles.BGcircle1} ></div>
            <div className={styles.BGcircle2} ></div>
            <div className={styles.BGcircle3} ></div> */}
            <div className={styles.leftBox} >
                <h1 className={styles.heading}>
                    Simplify Your <span style={{ color: 'rgb(220 38 38)', textShadow: '1px 1px 2px rgb(220 38 38)' }}>Billing</span> Process
                </h1>
                <h4 className={styles.description}>
                    IndiaBills provides a comprehensive billing solution designed for Indian businesses. Streamline your invoicing, inventory, and reporting with our easy-to-use platform.
                </h4>
                <div className={styles.btn}>
                    <ButtonWithBG label="Book a Demo" background={1} rounded="full" />
                    <ButtonWithBG label="Try Free" background={0} rounded="full" />
                </div>
            </div>

            {/* Right Section with Image */}
            <div className={styles.rightBox}>
                <div className={styles.rightBoxContainer}>
                    <img
                        src="/banner1.png" // <-- Replace with your actual path
                        alt="CRM Dashboard"
                        className={styles.headerImage}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
