import Layout from "../../components/Layout"
import styles from './Coin.module.css'

const Coin = ({coin}) => {
    return (
      <Layout>
        <div className={styles.coin_page}>
          <div className={styles.coin_container}>
            <img
              src={coin.image.large}
              alt={coin.name}
              className={styles.coin_image}
            ></img>
            <br />
            <h1 className={styles.coin_name}>
              {coin.name} ({coin.symbol.toUpperCase()})
            </h1>
            <br />
            <h3 className={styles.coin_margin}>
              Current Price: $
              {coin.market_data.current_price.usd.toLocaleString()}
            </h3>
            <h3 className={styles.coin_margin}>
              Block time: {coin.block_time_in_minutes} minutes
            </h3>
            <h3 className={styles.coin_margin}>
              Genesis date: {coin.genesis_date}
            </h3>
            <h3 className={styles.coin_margin}>
              Circulating supply: {coin.market_data.circulating_supply.toLocaleString()}
            </h3>
            <h3 className={styles.coin_margin}>
              Total supply: {coin.market_data.total_supply.toLocaleString()}
            </h3>
          </div>
        </div>
      </Layout>
    )
}

export default Coin

export async function getServerSideProps(context) {
    const {id} = context.query
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    const data = await res.json()

    return {
        props: {
            coin: data
        }
    }
}
