import React from 'react'
import styles from './styles/Testimonials.module.css'

/**
 * Testimonials component displays a user review with stars, username, bio, and an optional icon.
 *
 * @component
 * @param {Object} props
 * @param {string} props.username - The name of the user providing the testimonial.
 * @param {string} props.review - The content of the testimonial or review.
 * @param {string} props.bio - A short bio or title of the user.
 * @param {JSX.Element} [props.iconText] - Optional icon or avatar JSX element displayed beside the user info.
 *
 * @example
 * <Testimonials
 *   username="John Doe"
 *   review="This platform is amazing!"
 *   bio="Founder, Startup Inc."
 *   iconText={<UserIcon />}
 * />
 */
function Testimonials({ username, review, bio, iconText }) {
    return (
        <div className={styles.box} >
            <div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            </div>
            <h3 className={styles.review} >{review}</h3>
            <div className={styles.bottom} >
                <div>
                    <div className={styles.icon} >
                        {iconText}
                    </div>
                </div>
                <div>
                    <h1 className={styles.username} >{username}</h1>
                    <h4 className={styles.bio} >{bio}</h4>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
