import { Flex, Select } from '@mantine/core';
import { CryptoCurrencySelect, list } from './currencies-list';
import SelectOption from './select-option';

export default function CurrencyPicker({
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
  return (
    <Flex direction="column" justify="space-around" gap={20} py={20}>
      <Select
        size="xl"
        label="Source currency"
        placeholder="Pick source currency"
        itemComponent={SelectOption}
        data={list.filter((currency) => to !== currency.address) as CryptoCurrencySelect[]}
        value={from}
        onChange={(value) => fromChange(value)}
        searchable
        maxDropdownHeight={400}
        nothingFound="Nobody here"
        filter={(value, item) =>
          item.name.toLowerCase().includes(value.toLowerCase().trim()) ||
          item.symbol.toLowerCase().includes(value.toLowerCase().trim())
        }
      />
      <Select
        size="xl"
        label="Target currency"
        placeholder="Pick target currency"
        itemComponent={SelectOption}
        data={list.filter((currency) => from !== currency.address) as CryptoCurrencySelect[]}
        value={to}
        onChange={(value) => toChange(value)}
        searchable
        maxDropdownHeight={400}
        nothingFound="Nobody here"
        filter={(value, item) =>
          item.name.toLowerCase().includes(value.toLowerCase().trim()) ||
          item.symbol.toLowerCase().includes(value.toLowerCase().trim())
        }
      />
    </Flex>
  );
}
