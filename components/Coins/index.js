import styles from './Coins.module.css'

const Coins = ({key, name, symbol, img, price, price_change_24h, market_cap}) => {
    return (
      <div className={styles.coin_container}>
        <div className='coin_row'>
          <div className='coin'>
            <img src={img} alt={name} className='coin_img' />
            <h1>{name}</h1>
            <h3>{symbol}</h3>
          </div>
          <div className='coin_data'>
            <h3>${price.toLocaleString()}</h3>
            {price_change_24h < 0 ? (
                <h3 className="coin_red">{price_change_24h.toFixed(2)}</h3>) :
                <h3 className="coin_green">{price_change_24h.toFixed(2)}</h3>
            }
            <h3>${market_cap.toLocaleString()}</h3>
          </div>
        </div>
      </div>
    )
}

export default Coins
