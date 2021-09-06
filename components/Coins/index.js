import styles from './Coins.module.css'
import Link from 'next/link'

const Coins = ({
  name,
  symbol,
  img,
  price,
  price_change_24h,
  market_cap,
  ath,
  id,
}) => {
  return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
      <a>
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <img src={img} alt={name} className={styles.coin_img} />
              <h1>{name}</h1>
              <h3>{symbol}</h3>
            </div>
            <div className={styles.coin_data}>
              <h3 className={styles.coin_price}>${price.toLocaleString()}</h3>
              {price_change_24h < 0 ? (
                <h3 className={styles.coin_red}>
                  -${price_change_24h.toFixed(2) * -1}
                </h3>
              ) : (
                <h3 className={styles.coin_green}>
                  ${price_change_24h.toFixed(2)}
                </h3>
              )}
              <h3 className={styles.coin_ath}>${ath.toLocaleString()}</h3>
              <h3 className={styles.coin_mcap}>
                ${market_cap.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Coins
