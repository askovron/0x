import {
  Transition,
  List,
  Flex,
  RingProgress,
  Text,
  Box,
  Alert,
  Title,
  Table,
} from '@mantine/core';
import { HistoryBookRecordType } from '../../hooks/useHistoryBook';
import { list, CryptoCurrency } from '../CurrencyPicker/currencies-list';

type OrderSide = 'taker' | 'maker';

function getBaseColor(side: OrderSide) {
  if (side === 'taker') return 'red';

  return 'green';
}

function stringToCustomFloat(str: string, decimals: number): number {
  const integer = parseInt(str.slice(0, str.length - decimals), 10);
  const fraction = parseInt(str.slice(-1 * decimals), 10) * 10 ** (-1 * decimals);

  return (Number.isNaN(integer) ? 0 : integer) + fraction;
}

function shortenHash(hash: string) {
  return ''.concat(hash.slice(0, 10), '...', hash.slice(-10));
}

export default function HistorySection({
  records,
  ckey,
}: {
  records?: HistoryBookRecordType[] | undefined;
  ckey: OrderSide;
}) {
  if (!records?.length) return <Alert color="gray">No records.</Alert>;

  const c: CryptoCurrency | { decimals: number } = list.find(
    (currency) => currency.address === records?.[0].order[`${ckey}Token`]
  ) ?? { decimals: 0 };
  const { decimals } = c;

  const maxAmount: number = records.reduce(
    (sum, { order: { [`${ckey}Amount` as 'takerAmount' | 'makerAmount']: amount } }) =>
      sum + stringToCustomFloat(amount, decimals),
    0
  );
  const color = getBaseColor(ckey);

  return (
    <Transition mounted transition="slide-down" duration={400} timingFunction="ease">
      {(styles) => (
        <Table style={{ ...styles }} striped verticalSpacing="md">
          <tbody>
            {records.map((element) => {
              const floatAmount = stringToCustomFloat(
                element.order[`${ckey}Amount` as const],
                decimals
              );
              const percentege = (floatAmount / maxAmount) * 100;

              return (
                <tr key={element.metaData.orderHash}>
                  <td>
                    <Flex align="center">
                      <RingProgress
                        sections={[
                          {
                            value: percentege,
                            color,
                          },
                        ]}
                        label={
                          <Text color={color} align="center" size="xs">
                            {`${percentege.toFixed(2)}%`}
                          </Text>
                        }
                        size={100}
                      />
                      <Flex direction="column" wrap="wrap">
                        <Text>{floatAmount} coins</Text>
                        <Text size="xs">{shortenHash(element.metaData.orderHash)}</Text>
                      </Flex>
                    </Flex>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Transition>
  );
}
