import ky from 'ky-universal';
import { useQuery } from 'react-query';

type HistoryBookRecordOrderType = {
  takerToken: string;
  makerToken: string;
  takerAmount: string;
  makerAmount: string;
  taker: string;
  maker: string;
};

type HistoryBookRecordMetaDataType = { orderHash: string };

export type HistoryBookRecordType = {
  order: HistoryBookRecordOrderType;
  metaData: HistoryBookRecordMetaDataType;
};

export type HistoryBookType = {
  bids?: { records: HistoryBookRecordType[] };
  asks?: { records: HistoryBookRecordType[] };
};

const fetchHistoryBook = async (to: string, from: string): Promise<HistoryBookType> =>
  ky(`https://api.0x.org/orderbook/v1?quoteToken=${to}&baseToken=${from}`).json();

const useHistoryBook = (to: string, from: string) =>
  useQuery(['hb', to + from], () => fetchHistoryBook(to, from));

export { useHistoryBook, fetchHistoryBook };
