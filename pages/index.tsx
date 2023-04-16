import { Container, Title, Loader, Flex, Text } from '@mantine/core';
import { useState } from 'react';
import { Welcome } from '../components/Welcome';
import OrderBook from '../components/OrderBook';
import { useHistoryBook } from '../hooks/useHistoryBook';

export default function HomePage() {
  const [from, setFrom] = useState('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48');
  const [to, setTo] = useState('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2');
  const { data, isLoading } = useHistoryBook(to, from);

  return (
    <>
      <Container>
        <Welcome to={to} toChange={setTo} from={from} fromChange={setFrom} />
        {isLoading ? (
          <Title mt="md" align="center">
            <Flex direction="row" justify="center">
              <Loader variant="dots" />
              &nbsp;
              <Text>Loading order book</Text>
            </Flex>
          </Title>
        ) : (
          <OrderBook bids={data?.bids} asks={data?.asks} />
        )}
      </Container>
    </>
  );
}
