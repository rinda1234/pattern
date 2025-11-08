//  Burger 클래스 (Product)
export class Burger {
    bread = ''
    patty = ''
    cheese = false
    drink = ''
    side = ''

    describe(): string {
        return (
            ` 버거 구성: ${this.bread || '빵 없음'} + ${this.patty || '패티 없음'}` +
            (this.cheese ? ' + 치즈' : '') +
            (this.drink ? ` / ${this.drink}` : '') +
            (this.side ? ` / ${this.side}` : '')
        )
    }
}

//  Builder 인터페이스
export interface IBurgerBuilder {
    setBread(type: string): this
    setPatty(type: string): this
    addCheese(): this
    addDrink(drink: string): this
    addSide(side: string): this
    build(): Burger
}

//  Concrete Builder
export class BurgerBuilder implements IBurgerBuilder {
    private burger: Burger

    constructor() {
        this.burger = new Burger()
    }

    setBread(type: string): this {
        this.burger.bread = type
        return this
    }

    setPatty(type: string): this {
        this.burger.patty = type
        return this
    }

    addCheese(): this {
        this.burger.cheese = true
        return this
    }

    addDrink(drink: string): this {
        this.burger.drink = drink
        return this
    }

    addSide(side: string): this {
        this.burger.side = side
        return this
    }

    build(): Burger {
        return this.burger
    }
}
