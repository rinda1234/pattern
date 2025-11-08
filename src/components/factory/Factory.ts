// src/patterns/factory/Factory.ts

// 1. Product 인터페이스 (버튼의 공통 인터페이스)
export interface Button {
    render(): string
    onClick(): string
}

// 2. 구체적인 Product 클래스들
export class WindowsButton implements Button {
    render(): string {
        return "윈도우 스타일 버튼 렌더링"
    }
    onClick(): string {
        return "윈도우 버튼 클릭 이벤트 처리"
    }
}

export class MacButton implements Button {
    render(): string {
        return "맥 스타일 버튼 렌더링"
    }
    onClick(): string {
        return "맥 버튼 클릭 이벤트 처리"
    }
}

// 3. Creator 추상 클래스 (팩토리 메서드 정의)
export abstract class Dialog {
    abstract createButton(): Button

    renderDialog(): string[] {
        const button = this.createButton()
        return [button.render(), button.onClick()]
    }
}

// 4. 구체적인 Creator 클래스들
export class WindowsDialog extends Dialog {
    createButton(): Button {
        return new WindowsButton()
    }
}

export class MacDialog extends Dialog {
    createButton(): Button {
        return new MacButton()
    }
}
