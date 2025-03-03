'use client'

import { useEffect } from 'react'
import { useCryptoStore } from '@/store/useCryptoStore'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Loader from '@/components/Loader'
import { Input } from '@/components/ui/input'

export default function Home() {
  const {
    filteredCryptos,
    fetchCryptos,
    loading,
    searchQuery,
    setSearchQuery,
  } = useCryptoStore()

  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <div className='container mx-auto p-4'>
      {/* Header */}
      <h1 className='text-3xl font-bold text-center mb-6'>Crypto Tracker</h1>

      {/* Search & Refresh Bar */}
      <div className='flex justify-between items-center gap-4 mb-6'>
        <Input
          type='text'
          placeholder='Search Cryptocurrency...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='flex-1'
        />
        <Button onClick={fetchCryptos} disabled={loading}>
          {loading ? 'Loading...' : 'Refresh'}
        </Button>
      </div>

      {/* Loading State */}
      {loading ? (
        <Loader />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {filteredCryptos.length > 0 ? (
            filteredCryptos.map((crypto) => (
              <Card key={crypto.id} className='p-4'>
                <CardContent>
                  <h2 className='text-xl font-bold'>{crypto.name}</h2>
                  <p className='text-lg'>${crypto.price}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className='text-center col-span-3'>No cryptocurrencies found.</p>
          )}
        </div>
      )}
    </div>
  )
}
