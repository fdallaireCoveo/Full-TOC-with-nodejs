interface JsMockito {
  mockFunc: (any) => any;
  mockObj: any;
  verify: (mockFunc, verifier?: JsMockitoVerifiers) => any;
  when: (mockObj: any) => any;
  thenReturn: (any) => any;
  spy: (mockFunc) => any;
  Verifiers: JsMockitoVerifiers;
  mock: (mockObj) => any;
  Integration: any;
}

interface JsMockitoVerifiers {
  once: () => JsMockitoVerifiers;
  times: (times: number) => JsMockitoVerifiers;
  never: () => JsMockitoVerifiers;
}

declare var JsMockito: JsMockito;
