import Head from 'next/head'
import ProductSelector from 'moo-react-components/lib/ProductSelector/ProductSelector'
import { ThemeProvider } from 'moo-react-components/lib/theme/ThemeProvider'
import styled from 'styled-components'

import Logo from '../components/Logo'
import { mockProducts } from '../mockProducts'

const Wrapper = styled.div`
  width: 768px;
  margin: 0 auto;
`

const ProductConfiguratorDemo = () => {
  return (
    <div>
      <Head>
        <title>Moo Product Configurator example</title>
        <meta name="description" content="Moo Product Configurator example app" />
      </Head>
      <Logo />
      <Wrapper>
        <ThemeProvider>
          <ProductSelector products={mockProducts} productName="Hardcover Notebook" />
        </ThemeProvider>
      </Wrapper>
    </div>
  )
}

export default ProductConfiguratorDemo
