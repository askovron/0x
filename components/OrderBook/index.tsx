import { Group, Title, Text, Flex, Divider } from '@mantine/core';
import styles from './styles.module.css';
import { HistoryBookType } from '../../hooks/useHistoryBook';
import HistorySection from './historySection';

export default function OrderBook({ bids, asks }: HistoryBookType) {
  return (
    <>
      <Divider size="xl" mt="xl" mb="md" />
      <Group className={styles.box} align="center" grow spacing="xl">
        <Flex direction="column" wrap="nowrap">
          <Title align="center">
            <Text>Asks</Text>
          </Title>
          <HistorySection records={bids?.records} side="taker" />
        </Flex>
        <Flex direction="column" wrap="nowrap">
          <Title align="center">
            <Text>Bids</Text>
          </Title>
          <HistorySection records={asks?.records} side="maker" />
        </Flex>
      </Group>
    </>
  );
}
