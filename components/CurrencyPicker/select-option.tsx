import { forwardRef } from 'react';
import { Group, Avatar, Text } from '@mantine/core';
import { CryptoCurrencySelect } from './currencies-list';

type ItemProps = React.ComponentPropsWithoutRef<'div'> & Omit<CryptoCurrencySelect, 'chainId'>;

export default forwardRef<HTMLDivElement, ItemProps>(
  ({ logoURI, label, symbol, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={logoURI} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" opacity={0.65}>
            {symbol}
          </Text>
        </div>
      </Group>
    </div>
  )
);
