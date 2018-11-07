export interface MyGlobal {
}
export declare abstract class GlobalRef {
    abstract readonly nativeGlobal: MyGlobal;
}
export declare class BrowserGlobalRef extends GlobalRef {
    readonly nativeGlobal: MyGlobal;
}
