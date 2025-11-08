// 싱글톤 클래스 정의
export class Singleton {
    private static readonly instance: Singleton = new Singleton();

    private constructor() {}

    public static getInstance(): Singleton {
        return Singleton.instance;
    }

    // 테스트용 메서드
    public sayHello(): string {
        return "안녕하세요! 저는 싱글톤 인스턴스입니다 👋";
    }
}
