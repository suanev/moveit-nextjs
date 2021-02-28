import styles from '../styles/components/Profile.module.css'

export function Profile () {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/suanev.png" alt="Suane Vallim"/>

            <div>
                <strong>Suane Vallim</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1</p>
            </div>
        </div>
    )
}