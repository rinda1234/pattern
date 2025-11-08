// 1. Component 인터페이스
export interface Notifier {
    send(message: string): string[];
}

// 2. Concrete Component (기본 기능)
export class BaseNotifier implements Notifier {
    send(message: string): string[] {
        return [`기본 알림: ${message}`];
    }
}

// 3. Decorator 추상 클래스
export abstract class NotifierDecorator implements Notifier {
    protected wrappee: Notifier

    constructor(notifier: Notifier) {
        this.wrappee = notifier;
    }

    send(message: string): string[]{
        return this.wrappee.send(message); // 기존 기능 위임
    }
}

// 4. 구체적인 데코레이터들
export class EmailNotifier extends NotifierDecorator {
    send(message: string): string[] {
        const base = super.send(message);
        base.push(`이메일 발송: ${message}`)
        return base;
    }
}

export class SMSNotifier extends NotifierDecorator {
    send(message: string): string[] {
        const base = super.send(message);
        base.push(`SMS 발송: ${message}`);
        return base;
    }
}

export class SlackNotifier extends NotifierDecorator {
    send(message: string): string[] {
        const base = super.send(message);
        base.push(`Slack 발송: ${message}`);
        return base;
    }
}
