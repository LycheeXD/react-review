import { ON_INPUT_CHANGE,
         ON_ADD_EXPENSE,
         ON_SEARCH_FILTER_CHANGE,
         ON_DELETE_EXPENSE,
         ON_SORT_CHANGE } from '../../src/actions/actions';

describe('should import all action types', () => {
  test('should import ON_INPUT_CHANGE', () => {
    expect(ON_INPUT_CHANGE).toBe('ON_INPUT_CHANGE');
  });

  test('should import ON_ADD_EXPENSE', () => {
    expect(ON_ADD_EXPENSE).toBe('ON_ADD_EXPENSE');
  });

  test('should import ON_SEARCH_FILTER_CHANGE', () => {
    expect(ON_SEARCH_FILTER_CHANGE).toBe('ON_SEARCH_FILTER_CHANGE');
  });

  test('should import ON_DELETE_EXPENSE', () => {
    expect(ON_DELETE_EXPENSE).toBe('ON_DELETE_EXPENSE');
  });

  test('ON_SORT_CHANGE', () => {
    expect(ON_SORT_CHANGE).toBe('ON_SORT_CHANGE');
  });
});