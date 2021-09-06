import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import CoinList from '../components/CoinList'
import styles from '../components/Coins/Coins.module.css'
import Layout from '../components/Layout'

function Header () {
  return (
    <div className={styles.header}>
      <h1 className={styles.header_coin}>Coin</h1>
      <h1 className={styles.header_price}>Price</h1>
      <h1 className={styles.header_change}>Change(24h)</h1>
    </div>
  )
}

export default function Home({filteredCoins}) {
  return (
    <Layout className="layout">
      <div className="coin_app">
        <SearchBar type='text' placeholder='Search a Crypto here' />
        {/* <Header /> */}
        <CoinList filteredCoins={filteredCoins} />
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false'
  )

  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins
    }
  }
}
