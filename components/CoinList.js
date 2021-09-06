import Coins from "./Coins";

export default function CoinList ({filteredCoins}) {
    return (
        <>
            {filteredCoins.map(coin => {
                return <Coins 
                key={coin.id}
                name={coin.name}
                symbol={coin.symbol}
                img={coin.image}
                price={coin.current_price}
                price_change_24h={coin.price_change_24h}
                market_cap={coin.market_cap}
                ath={coin.ath}  
                />
            })}
        </>
    )
}