import chai from 'chai';

export default class Test {
  public isEqual(actual: string, expected: string) {
    console.log(`isEqual(${actual}, ${expected})`);
    chai.expect(actual).equals(expected);
  }
}
