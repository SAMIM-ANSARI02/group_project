// import styles from './Who.module.css'
import styles from './Who.module.css'

const Who_to_follow=()=>{
    return (
        <div className={styles.who}>
            <h2>Who To Follow </h2>
            <div className={ styles.whoparent}>
                <img style={{width:"60px",height:"60px" ,borderRadius:"50%"}} src="https://i.insider.com/645cbfa565275b0018b7f5fb?width=1000&format=jpeg&auto=webp" alt="" />

                <div className={styles.child1}>
                <strong>MrBeast </strong>
                <p style={{color:"gray"}}>@MrBeast</p>

                </div>
                <div className={styles.whobutton}>
                <button>Follow</button>
                </div>
            </div>
            <div className={ styles.whoparent}>
                <img style={{width:"60px",height:"60px",borderRadius:"50%"}} src="https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM=w240-h480-rw" alt="" />
                <div className={styles.child1}>
                <strong>Sportify</strong>
                <p style={{color:"gray"}}>@Sportify</p>
                </div>
                <div className={styles.whobutton}>
                <button>Follow</button>
                </div>

            </div>
            <div className={ styles.whoparent}>
                <img style={{width:"60px",height:"60px",borderRadius:"50%"}} src="data:image/png;base64,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" alt="" />
                <div className={styles.child1}>
                <strong>Netflix</strong>
                <p style={{color:"gray"}}>@Netflix</p>
                </div>
                <div className={styles.whobutton}>
                <button>Follow</button>
                </div>

            </div>
       
        
            <button className={styles.whobutton}>Show More</button>
           
        </div>
    )
}
export default Who_to_follow;