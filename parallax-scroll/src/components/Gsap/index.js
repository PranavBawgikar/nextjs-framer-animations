'use client'
import styles from './page.module.scss'
import Picture1 from '../../../public/medias/1.jpg'
import Picture2 from '../../../public/medias/2.jpg'
import Picture3 from '../../../public/medias/3.jpg'
import Image from 'next/image'

const word = "with gsap"

export default function Index () {
    const images = [Picture1, Picture2, Picture3]
    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <h1>Parallax</h1>
                <h1>Scroll</h1>
                <div className={styles.word}>
                    <p>
                        {
                            word.split("").map((letter, i) => {
                                return <span key={`l_${i}`}>{letter}</span>
                            })
                        }
                    </p>
                </div>
            </div>
            <div className={styles.images}>
                {
                    images.map((image, i) => {
                        return <div key={`i_${i}`} className={styles.imageContainer}>
                            <Image 
                                src={image}
                                placeholder="blur"
                                alt="image"
                                fill
                            />
                        </div>
                    })
                }
            </div>
        </div>
    )
}