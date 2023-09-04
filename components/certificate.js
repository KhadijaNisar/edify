import styles from "@/styles/certificate.module.css";

const certificate = () => {
  return (
    <>
        <div className="outerDiv">
            <div className={styles.certificateOuter}>
                <div className={styles.certificateContent}>
                    <span>About Educal</span>
                    <h2>Degrees In <br/>Various Academic <br/>Disciplines</h2>
                    <p>Some dodgy chav car boot blower starkers bonnet tickety-boo no biggie cheesed off, Oxford bloke fantastic the wireless bevvy cobblers chancer give us a bell,bleeder jolly good hanky panky do one gormless matie boy. <br/><br/>
                        Pear shaped my good sir I cobblers at public school quaint tickety-boo crikey bits and bobs, wellies bugger all mate golly gosh brolly matie boy fanny around chimney pot cracking goal my lady, bodge so I said spiffing posh the full monty dont get shirty with me no biggie.
                        <br/><br/>
Brolly grub blimey victoria sponge blag nancy boy dont get shirty with me skive off bobby burke in my flat bog-standard, easy peasy golly gosh</p>
                </div>
                <div className={styles.certificateImg}>
                    <img src="image/certificate/certificate.png"></img>
                </div>
            </div>
        </div>
    </>    
  )
}

export default certificate