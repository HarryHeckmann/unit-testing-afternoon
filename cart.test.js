const cart = require('./cart')
const cars = require('./data/cars')

describe('Cart Properties', () => {
    afterEach(function() {
        cart.cart = [];
        cart.total = 0;
    })
    test('cart should default to an empty array', () => {
        expect(Array.isArray(cart.cart)).toBe(true)
        expect(cart.cart.length).toBe(0)
    })
    test('total should be 0', () => {
        expect(typeof cart.total).toBe('number')
        expect(cart.total).toBe(0)
    })
})


describe('Cart Methods', () => {
    afterEach(function() {
        cart.cart = [];
        cart.total = 0;
    })

    test('car object should be added to the cart array on addToCart()', () => {
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])

        expect(cart.cart.length).toEqual(2)
        expect(cart.cart[0]).toEqual(cars[0])
        expect(cart.cart[1]).toEqual(cars[1])
    })

    test('total property should increase by car objects price on each addToCart()', () => {
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])
        cart.addToCart(cars[3])

        expect(cart.total).toEqual(cars[0].price+cars[1].price+cars[3].price)
    })

    test('the cart length should decrease on each call of removeFromCart()', () => {
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])
        cart.addToCart(cars[2])

        cart.removeFromCart(1, cars[1].price)

        expect(cart.cart.length).toEqual(2)
        expect(cart.cart[1]).toEqual(cars[2])
    })

    test('the cart total should decrease by the vaule of the car price passed in removeFromCart()', () => {
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])
        cart.addToCart(cars[2])

        cart.removeFromCart(1, cars[1].price)
        cart.removeFromCart(1, cars[2].price)

        expect(cart.total).toEqual(cars[0].price)
    })

    test('checkout() should reset the cart length and the total property to 0', () => {
        cart.checkout()

        expect(cart.cart.length).toEqual(0)
        expect(cart.total).toEqual(0)
    })
})