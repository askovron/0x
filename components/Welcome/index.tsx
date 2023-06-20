import { Flex, Title, Text } from '@mantine/core';
import CurrencyPicker from '../CurrencyPicker';
import { ColorSchemeToggle } from '../ColorSchemeToggle';
import useStyles from './Welcome.styles';

export function Welcome({
  from,
  fromChange,
  to,
  toChange,
}: {
  from: string;
  fromChange: Function;
  to: string;
  toChange: Function;
}) {
  const { classes } = useStyles();

  return (
    <Flex justify="space-between" align="center">
      <Flex direction={{ base: 'row', md: 'column' }}>
        <Title className={classes.title} mt="md">
          <Text component={Flex} inherit variant="gradient">
            Crypt<ColorSchemeToggle /> exchange
          </Text>
        </Title>
      </Flex>
      <CurrencyPicker to={to} toChange={toChange} from={from} fromChange={fromChange} />
    </Flex>
  );
}
