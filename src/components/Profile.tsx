import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';


export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileComtainer}>
            <img src="https://avatars.githubusercontent.com/u/6123805?s=460&amp;u=8d391ab4338827f3450c232370f2661350532cc6&amp;v=4" alt="Flávio"/>
            <div>
                <strong>Flávio Nascimento</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}