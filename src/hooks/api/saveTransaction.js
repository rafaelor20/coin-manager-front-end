import useAsync from '../useAsync';
import useToken from '../useToken';
import * as transactionApi from '../../services/transactionApi';

export default function saveTransactions() {
  const token = useToken();

  const {
    loading: saveTransactionsLoading,
    error: saveTransactionsError,
    act: saveTransactions
  } = useAsync((data) => transactionApi.getTransactions(data, token), false);

  return {
    saveTransactionsLoading,
    saveTransactionsError,
    saveTransactions
  };
}
