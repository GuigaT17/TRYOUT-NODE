import ClientWithDiscountStrategy from '../src/modules/transaction/strategy/ClientWithDiscountStrategy';
import {expect} from 'chai';

describe('calculation client with discount strategy', () => {
    it('should initialize a client with discount strategy', () => {
        const clientWithDiscountStrategy = new ClientWithDiscountStrategy();
        expect(clientWithDiscountStrategy instanceof ClientWithDiscountStrategy);
    });

    it('should return a amount of 0.05 for client with discount', () => {
        const clientWithDiscountStrategy = new ClientWithDiscountStrategy();
        const amount = clientWithDiscountStrategy.calculateCommision(42, 10000, new Date());
        expect(amount).to.equal(0.05);
    });

    it('should return a undefined for client without discount', () => {
        const clientWithDiscountStrategy = new ClientWithDiscountStrategy();
        const amount = clientWithDiscountStrategy.calculateCommision(3, 10000, new Date());
        expect(amount).to.equal(undefined);
    });
    
});