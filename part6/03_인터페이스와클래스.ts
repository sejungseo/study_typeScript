/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string,
  moveSpeed: number,
  move(): void,
}

  // 클래스에서 implements 키워드와 함께 사용하면
  // 이 클래스가 생성하는 객체는 모두 이 인터페이스 타입을 만족 해야함
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string,
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}