// Visitor 인터페이스
export interface Visitor {
    visitFile(file: FileElement): void
    visitFolder(folder: FolderElement): void
}

// Element 인터페이스
export interface Element {
    accept(visitor: Visitor): void
}

// 구체적인 Element들 (안전한 방식: 필드 명시 + ctor에서 대입)
export class FileElement implements Element {
    name: string
    size: number

    constructor(name: string, size: number) {
        this.name = name
        this.size = size
    }

    accept(visitor: Visitor): void {
        visitor.visitFile(this)
    }
}

export class FolderElement implements Element {
    name: string
    children: Element[]

    constructor(name: string, children: Element[] = []) {
        this.name = name
        this.children = children
    }

    accept(visitor: Visitor): void {
        visitor.visitFolder(this)
    }
}

// 파일 크기를 계산하는 Visitor
export class SizeCalculator implements Visitor {
    private totalSize = 0
    private logs: string[] = []

    visitFile(file: FileElement): void {
        this.totalSize += file.size
        this.logs.push(`📄 ${file.name} (${file.size}) 추가됨`)
    }

    visitFolder(folder: FolderElement): void {
        this.logs.push(`폴더 진입: ${folder.name}`)
        folder.children.forEach(child => child.accept(this))
    }

    getTotalSize(): number {
        return this.totalSize
    }

    getLogs(): string[] {
        return this.logs
    }
}

// 이름을 출력하는 Visitor
export class NamePrinter implements Visitor {
    private logs: string[] = []

    visitFile(file: FileElement): void {
        this.logs.push(`파일: ${file.name}`)
    }

    visitFolder(folder: FolderElement): void {
        this.logs.push(`폴더: ${folder.name}`)
        folder.children.forEach(child => child.accept(this))
    }

    getLogs(): string[] {
        return this.logs
    }
}