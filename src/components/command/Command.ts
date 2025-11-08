// Command.ts
// 🎮 Command Pattern — 요청(명령)을 객체로 캡슐화

// Command 인터페이스
export interface Command {
    execute(): string;
    undo(): string;
}

// Receiver (수신자): 실제 작업을 수행하는 클래스
export class Light {
    on(): string {
        return "💡 불을 켭니다";
    }

    off(): string {
        return "💤 불을 끕니다";
    }
}

// Concrete Commands
export class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): string {
        return this.light.on();
    }

    undo(): string {
        return this.light.off();
    }
}

export class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): string {
        return this.light.off();
    }

    undo(): string {
        return this.light.on();
    }
}

// Invoker (호출자): 명령을 실행하고 취소하는 역할
export class RemoteControl {
    private command: Command | null = null;

    setCommand(command: Command) {
        this.command = command;
    }

    pressButton(): string {
        return this.command ? this.command.execute() : "⚠️ 명령이 설정되지 않았습니다";
    }

    pressUndo(): string {
        return this.command ? this.command.undo() : "⚠️ 실행 취소할 명령이 없습니다";
    }
}
