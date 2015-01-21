interface JsHamcrestStatic {
  Integration: any;

  Matchers: {
    anything(): any;
    equivalentMap(map: any);
    empty(): any;
    everyItem(matcher: number): any;
    everyItem(matcher: string): any;
    nil(): any;
    hasMember(key: string, value?: any): void;
    equalTo(value:any);
  };
}

declare var JsHamcrest: JsHamcrestStatic;