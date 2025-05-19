import React from 'react'
import styles from './styles/UserDetails.module.css'
import ButtonWithBG from '../buttons/ButtonWithBG'

function UserDetails() {
    return (
        <div >
            <div className={styles.container} >
                <h1 className={styles.tittle} >Stay Updated</h1>
                <h3 className={styles.para} >Subscribe to our newsletter for the latest updates, tips, and special offers.</h3>
                <form className={styles.form} action="">
                <input className={styles.email} type="email" name='email' placeholder='Your email address'/>
                <ButtonWithBG label={"Subscribe"} background={1} rounded={"lg"} />
                </form>
            </div>
        </div>
    )
}

export default UserDetails
