import SearchBar from '../components/SearchBar'
import CoinList from '../components/CoinList'
import styles from '../components/Coins/Coins.module.css'
import Layout from '../components/Layout'
import { useState } from 'react'

export default function Home({filteredCoins}) {
  const [search, setSearch] =  useState('')

  const allCoins = filteredCoins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleChange = (e) => {
    e.preventDefault()

    setSearch(e.target.value.toLowerCase())
  }

  return (
    <Layout className={styles.layout}>
      <div className={styles.coin_app}>
        <SearchBar type='text' placeholder='Search a Crypto here' onChange={handleChange} />
        <CoinList filteredCoins={allCoins} />
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
  )

  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins
    }
  }
}
