import { setInputValue,
         addExpense,
         setSearchFilterValue,
         deleteExpense,
         sortExpensesBy } from '../../src/actions/actionCreators';

describe('should import all the action creators', () => {
  describe('#setInputValue', () => {
    test('should return action object with "ON_INPUT_CHANGE" for type and input argument for payload', () => {
      const result = setInputValue('caribbean queen');

      const expectedResult = {
        type: 'ON_INPUT_CHANGE',
        payload: 'caribbean queen'
      };

      expect(result).toEqual(expectedResult);
    });
  });

  describe('#addExpense', () => {
    test('should return action object with "ON_ADD_EXPENSE" for type and input argument for payload', () => {
      const result = addExpense('what a fool believe');

      const expectedResult = {
        type: 'ON_ADD_EXPENSE',
        payload: 'what a fool believe'
      };

      expect(result).toEqual(expectedResult);
    });
  });

  describe('#setSearchFilterValue', () => {
    test('should return action object with "ON_SEARCH_FILTER_CHANGE" for type and input argument for payload', () => {
      const result = setSearchFilterValue('just the two of us');

      const expectedResult = {
        type: 'ON_SEARCH_FILTER_CHANGE',
        payload: 'just the two of us'
      };

      expect(result).toEqual(expectedResult);
    });
  });

  describe('#deleteExpense', () => {
    test('should return action object with "ON_DELETE_EXPENSE" for type and input argument for payload', () => {
      const result = deleteExpense('turn your love around');

      const expectedResult = {
        type: 'ON_DELETE_EXPENSE',
        payload: 'turn your love around'
      };

      expect(result).toEqual(expectedResult);
    });
  });

  describe('#sortExpensesBy', () => {
    test('should return action object with "ON_SORT_CHANGE" for type and input argument for payload', () => {
      const result = sortExpensesBy('you really got a hold on me');

      
      const expectedResult = {
        type: 'ON_SORT_CHANGE',
        payload: 'you really got a hold on me'
      };

      expect(result).toEqual(expectedResult);
    });
  });
});
