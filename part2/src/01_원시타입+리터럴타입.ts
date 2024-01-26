// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// Error
// num1 = 'hello';
// num1.toUpperCase();

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${str1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// null 값을 다른 타입의 변수에 할당하기
let numA: number = null; // ts에서는 불가능하지만 tsconfig.json의 strcitNullChecks(엄격한 null 검사) 옵션을 false로 설정하면 가능

// 리터럴 타입
// 변수의 타입을 값으로 설정
let numB: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
let boolB: false = false;