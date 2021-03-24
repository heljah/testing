// import default from modules
// import HelloWorld from '../src/HelloWorld';

class CoinChanger {
    change(param) {
        return [param];
    }
}

// Write ES6 mocha tests with Chai assertions
describe('CoinChanger', () => {

    it('should return 1 EUR', () => {
        const coinChanger = new CoinChanger();
        const actual = coinChanger.change(100);
        expect(actual).to.eql([100])
    })
    it('should return 50 c', () => {
        const coinChanger = new CoinChanger();
        const actual = coinChanger.change(50);
        expect(actual).to.eql([50])
    })
    it('should return 20 c', () => {
        const coinChanger = new CoinChanger();
        const actual = coinChanger.change(20);
        expect(actual).to.eql([20]);
    })
    
})