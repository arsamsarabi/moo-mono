import Head from 'next/head'
import ProductSelector from 'moo-react-components/lib/ProductSelector/ProductSelector'
import { ThemeProvider } from 'moo-react-components/lib/theme/ThemeProvider'

import { mockProducts } from '../mockProducts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Moo Product Configurator example</title>
        <meta name="description" content="Moo Product Configurator example app" />
      </Head>
      <ThemeProvider>
        <ProductSelector products={mockProducts} productTypeLabel="Hardcover Notebooks" />
      </ThemeProvider>
    </div>
  )
}
