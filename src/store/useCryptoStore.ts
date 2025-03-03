import { create } from 'zustand'
import axios from 'axios'

interface Crypto {
  id: string
  name: string
  symbol: string
  price: number
}

interface CryptoStore {
  cryptos: Crypto[]
  filteredCryptos: Crypto[]
  searchQuery: string
  loading: boolean
  error: string | null
  setSearchQuery: (query: string) => void
  fetchCryptos: () => Promise<void>
}

export const useCryptoStore = create<CryptoStore>((set, get) => ({
  cryptos: [],
  filteredCryptos: [],
  searchQuery: '',
  loading: false,
  error: null,

  setSearchQuery: (query) => {
    set({ searchQuery: query })

    // Automatically filter cryptos when search query updates
    const { cryptos } = get()
    const filtered = cryptos.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(query.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(query.toLowerCase())
    )

    set({ filteredCryptos: filtered })
  },

  fetchCryptos: async () => {
    set({ loading: true, error: null })

    try {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,cardano,solana&vs_currencies=usd'
      )

      const cryptos = Object.keys(data).map((key) => ({
        id: key,
        name: key.toUpperCase(),
        symbol: key,
        price: data[key].usd,
      }))

      set({ cryptos, filteredCryptos: cryptos, loading: false })
    } catch (error) {
      set({ error: 'Failed to fetch crypto prices', loading: false })
      console.error('Error fetching crypto prices:', error)
    }
  },
}))
