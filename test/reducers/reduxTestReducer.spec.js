import reduxTestReducer from '../../src/reducers/reduxTestReducer';

describe('#reduxTestReducer', () => {
  test('should initialize default reduxTestReducer state to empty string', () => {
    const reduxTestReducerAction = {
      type: '@@INIT'
    };

    const result = reduxTestReducer(undefined, reduxTestReducerAction);

    expect(result).toBe('');
  });

  describe('#ON_INPUT_CHANGE', () => {
    test('#should change state to payload string', () => {
      const reduxTestReducerAction = {
        type: 'ON_INPUT_CHANGE',
        payload: 'aint no mountain high'
      };

      const result = reduxTestReducer(undefined, reduxTestReducerAction);

      expect(result).toBe('aint no mountain high');
    });
  });
});
