// Bridge.ts
// 🎨 Bridge Pattern — 추상화(Shape)와 구현부(Color) 분리

// Implementor (색상 인터페이스)
export interface Color {
    applyColor(): string;
}

// Concrete Implementors (구체 색상)
export class Red implements Color {
    applyColor(): string {
        return "🔴 빨간색";
    }
}

export class Blue implements Color {
    applyColor(): string {
        return "🔵 파란색";
    }
}

export class Green implements Color {
    applyColor(): string {
        return "🟢 초록색";
    }
}

// Abstraction (도형 추상 클래스)
export abstract class Shape {
    protected color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    abstract draw(): string;
}

// Refined Abstractions (구체 도형)
export class Circle extends Shape {
    draw(): string {
        return `${this.color.applyColor()} 원`;
    }
}

export class Square extends Shape {
    draw(): string {
        return `${this.color.applyColor()} 사각형`;
    }
}

export class Triangle extends Shape {
    draw(): string {
        return `${this.color.applyColor()} 삼각형`;
    }
}
