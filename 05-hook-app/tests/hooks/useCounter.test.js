
import {useCounter} from '../../src/hooks'
import {act, renderHook } from '@testing-library/react';

describe('Pruebas en el useCounter', () => { 
   
    test('should return default values', () => { 
        const {result} = renderHook( () => useCounter()); 
        const {} =  result.current;
        const {counter, decrement, increment, reset} = result.current;
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });    

    test('should return value in parameter', () => {
        const {result} = renderHook( () => useCounter(100)); 
        const {} =  result.current;
        const {counter} = result.current;
        expect(counter).toBe(100);
    });

    test('should increment value ', () => {
        const {result} = renderHook( () => useCounter(100)); 
        const {} =  result.current;
        const {counter, increment} = result.current;
        expect(counter).toBe(100);
        act(() => 
            increment()
        );
        expect(result.current.counter).toBe(101);
        act(() => {
            increment(3)
        });
        expect(result.current.counter).toBe(104);
    });

    test('should decrement value ', () => {
        const {result} = renderHook( () => useCounter(100)); 
        const {} =  result.current;
        const {counter, decrement} = result.current;
        expect(counter).toBe(100);
        act(() => 
            decrement()
        );
        expect(result.current.counter).toBe(99);
        act(() => {
            decrement(3)
        });
        expect(result.current.counter).toBe(96);
    });

    test('should reset value ', () => {
        const {result} = renderHook( () => useCounter(100)); 
        const {} =  result.current;
        const {counter, decrement, reset} = result.current;
        expect(counter).toBe(100);
        act(() => 
            decrement()
        );
        expect(result.current.counter).toBe(99);
        act(() => {
            reset()
        });
        expect(result.current.counter).toBe(100);
    });
    

})