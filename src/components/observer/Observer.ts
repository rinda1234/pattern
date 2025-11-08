// src/patterns/observer/Observer.ts

// 1️⃣ Observer 인터페이스
export interface Observer {
    update(price: number): string
}

// 2️⃣ Subject 인터페이스
export interface Subject {
    register(observer: Observer): void
    unregister(observer: Observer): void
    notify(): void
}

// 3️⃣ Concrete Subject (주체)
export class Stock implements Subject {
    private observers: Observer[] = []
    private price: number = 0

    register(observer: Observer): void {
        this.observers.push(observer)
    }

    unregister(observer: Observer): void {
        this.observers = this.observers.filter(o => o !== observer)
    }

    setPrice(newPrice: number): string[] {
        this.price = newPrice
        return this.notify() // 상태 변화 시 자동 알림
    }

    notify(): string[] {
        const logs: string[] = []
        for (const observer of this.observers) {
            logs.push(observer.update(this.price))
        }
        return logs
    }
}

// 4️⃣ Concrete Observers (관찰자들)
export class PriceDisplay implements Observer {
    update(price: number): string {
        return `📺 화면에 표시: 현재 주가 = ${price}`
    }
}

export class PriceAlert implements Observer {
    update(price: number): string {
        return price > 100
            ? `🚨 알림: 주가 ${price} 초과!`
            : `✅ 정상: 주가 ${price}`
    }
}
