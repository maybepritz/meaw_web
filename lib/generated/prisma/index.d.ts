
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model chat
 * 
 */
export type chat = $Result.DefaultSelection<Prisma.$chatPayload>
/**
 * Model chat_history
 * 
 */
export type chat_history = $Result.DefaultSelection<Prisma.$chat_historyPayload>
/**
 * Model moderators
 * 
 */
export type moderators = $Result.DefaultSelection<Prisma.$moderatorsPayload>
/**
 * Model tickets
 * 
 */
export type tickets = $Result.DefaultSelection<Prisma.$ticketsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ticket_category: {
  support: 'support',
  report: 'report',
  appeal: 'appeal'
};

export type ticket_category = (typeof ticket_category)[keyof typeof ticket_category]


export const ticket_status: {
  open: 'open',
  pending: 'pending',
  closed: 'closed'
};

export type ticket_status = (typeof ticket_status)[keyof typeof ticket_status]

}

export type ticket_category = $Enums.ticket_category

export const ticket_category: typeof $Enums.ticket_category

export type ticket_status = $Enums.ticket_status

export const ticket_status: typeof $Enums.ticket_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chats
 * const chats = await prisma.chat.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Chats
   * const chats = await prisma.chat.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.chat`: Exposes CRUD operations for the **chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.chatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat_history`: Exposes CRUD operations for the **chat_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chat_histories
    * const chat_histories = await prisma.chat_history.findMany()
    * ```
    */
  get chat_history(): Prisma.chat_historyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moderators`: Exposes CRUD operations for the **moderators** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moderators
    * const moderators = await prisma.moderators.findMany()
    * ```
    */
  get moderators(): Prisma.moderatorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tickets`: Exposes CRUD operations for the **tickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.tickets.findMany()
    * ```
    */
  get tickets(): Prisma.ticketsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    chat: 'chat',
    chat_history: 'chat_history',
    moderators: 'moderators',
    tickets: 'tickets'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "chat" | "chat_history" | "moderators" | "tickets"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      chat: {
        payload: Prisma.$chatPayload<ExtArgs>
        fields: Prisma.chatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          findFirst: {
            args: Prisma.chatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          findMany: {
            args: Prisma.chatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>[]
          }
          create: {
            args: Prisma.chatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          createMany: {
            args: Prisma.chatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>[]
          }
          delete: {
            args: Prisma.chatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          update: {
            args: Prisma.chatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          deleteMany: {
            args: Prisma.chatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>[]
          }
          upsert: {
            args: Prisma.chatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.chatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      chat_history: {
        payload: Prisma.$chat_historyPayload<ExtArgs>
        fields: Prisma.chat_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chat_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chat_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_historyPayload>
          }
          findFirst: {
            args: Prisma.chat_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chat_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_historyPayload>
          }
          findMany: {
            args: Prisma.chat_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_historyPayload>[]
          }
          create: {
            args: Prisma.chat_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_historyPayload>
          }
          createMany: {
            args: Prisma.chat_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chat_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_historyPayload>[]
          }
          delete: {
            args: Prisma.chat_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_historyPayload>
          }
          update: {
            args: Prisma.chat_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_historyPayload>
          }
          deleteMany: {
            args: Prisma.chat_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chat_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chat_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_historyPayload>[]
          }
          upsert: {
            args: Prisma.chat_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_historyPayload>
          }
          aggregate: {
            args: Prisma.Chat_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat_history>
          }
          groupBy: {
            args: Prisma.chat_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chat_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.chat_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Chat_historyCountAggregateOutputType> | number
          }
        }
      }
      moderators: {
        payload: Prisma.$moderatorsPayload<ExtArgs>
        fields: Prisma.moderatorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.moderatorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moderatorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.moderatorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moderatorsPayload>
          }
          findFirst: {
            args: Prisma.moderatorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moderatorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.moderatorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moderatorsPayload>
          }
          findMany: {
            args: Prisma.moderatorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moderatorsPayload>[]
          }
          create: {
            args: Prisma.moderatorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moderatorsPayload>
          }
          createMany: {
            args: Prisma.moderatorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.moderatorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moderatorsPayload>[]
          }
          delete: {
            args: Prisma.moderatorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moderatorsPayload>
          }
          update: {
            args: Prisma.moderatorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moderatorsPayload>
          }
          deleteMany: {
            args: Prisma.moderatorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.moderatorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.moderatorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moderatorsPayload>[]
          }
          upsert: {
            args: Prisma.moderatorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moderatorsPayload>
          }
          aggregate: {
            args: Prisma.ModeratorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModerators>
          }
          groupBy: {
            args: Prisma.moderatorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModeratorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.moderatorsCountArgs<ExtArgs>
            result: $Utils.Optional<ModeratorsCountAggregateOutputType> | number
          }
        }
      }
      tickets: {
        payload: Prisma.$ticketsPayload<ExtArgs>
        fields: Prisma.ticketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          findFirst: {
            args: Prisma.ticketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          findMany: {
            args: Prisma.ticketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>[]
          }
          create: {
            args: Prisma.ticketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          createMany: {
            args: Prisma.ticketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ticketsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>[]
          }
          delete: {
            args: Prisma.ticketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          update: {
            args: Prisma.ticketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          deleteMany: {
            args: Prisma.ticketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ticketsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>[]
          }
          upsert: {
            args: Prisma.ticketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          aggregate: {
            args: Prisma.TicketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTickets>
          }
          groupBy: {
            args: Prisma.ticketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticketsCountArgs<ExtArgs>
            result: $Utils.Optional<TicketsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    chat?: chatOmit
    chat_history?: chat_historyOmit
    moderators?: moderatorsOmit
    tickets?: ticketsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    id: number | null
  }

  export type ChatSumAggregateOutputType = {
    id: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: number | null
    message_id: string | null
    discord_id: string | null
    username: string | null
    content: string | null
    content_type: string | null
    channel_id: string | null
    guild_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: number | null
    message_id: string | null
    discord_id: string | null
    username: string | null
    content: string | null
    content_type: string | null
    channel_id: string | null
    guild_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    message_id: number
    discord_id: number
    username: number
    content: number
    content_type: number
    attachments: number
    channel_id: number
    guild_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    id?: true
  }

  export type ChatSumAggregateInputType = {
    id?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    message_id?: true
    discord_id?: true
    username?: true
    content?: true
    content_type?: true
    channel_id?: true
    guild_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    message_id?: true
    discord_id?: true
    username?: true
    content?: true
    content_type?: true
    channel_id?: true
    guild_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    message_id?: true
    discord_id?: true
    username?: true
    content?: true
    content_type?: true
    attachments?: true
    channel_id?: true
    guild_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat to aggregate.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type chatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatWhereInput
    orderBy?: chatOrderByWithAggregationInput | chatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: chatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: number
    message_id: string
    discord_id: string
    username: string | null
    content: string | null
    content_type: string | null
    attachments: string[]
    channel_id: string | null
    guild_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends chatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type chatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_id?: boolean
    discord_id?: boolean
    username?: boolean
    content?: boolean
    content_type?: boolean
    attachments?: boolean
    channel_id?: boolean
    guild_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    chat_history?: boolean | chat$chat_historyArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type chatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_id?: boolean
    discord_id?: boolean
    username?: boolean
    content?: boolean
    content_type?: boolean
    attachments?: boolean
    channel_id?: boolean
    guild_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["chat"]>

  export type chatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_id?: boolean
    discord_id?: boolean
    username?: boolean
    content?: boolean
    content_type?: boolean
    attachments?: boolean
    channel_id?: boolean
    guild_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["chat"]>

  export type chatSelectScalar = {
    id?: boolean
    message_id?: boolean
    discord_id?: boolean
    username?: boolean
    content?: boolean
    content_type?: boolean
    attachments?: boolean
    channel_id?: boolean
    guild_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type chatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message_id" | "discord_id" | "username" | "content" | "content_type" | "attachments" | "channel_id" | "guild_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["chat"]>
  export type chatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_history?: boolean | chat$chat_historyArgs<ExtArgs>
  }
  export type chatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type chatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $chatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chat"
    objects: {
      chat_history: Prisma.$chat_historyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message_id: string
      discord_id: string
      username: string | null
      content: string | null
      content_type: string | null
      attachments: string[]
      channel_id: string | null
      guild_id: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type chatGetPayload<S extends boolean | null | undefined | chatDefaultArgs> = $Result.GetResult<Prisma.$chatPayload, S>

  type chatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface chatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat'], meta: { name: 'chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {chatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatFindUniqueArgs>(args: SelectSubset<T, chatFindUniqueArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatFindUniqueOrThrowArgs>(args: SelectSubset<T, chatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatFindFirstArgs>(args?: SelectSubset<T, chatFindFirstArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatFindFirstOrThrowArgs>(args?: SelectSubset<T, chatFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatFindManyArgs>(args?: SelectSubset<T, chatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {chatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends chatCreateArgs>(args: SelectSubset<T, chatCreateArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {chatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatCreateManyArgs>(args?: SelectSubset<T, chatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {chatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatCreateManyAndReturnArgs>(args?: SelectSubset<T, chatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {chatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends chatDeleteArgs>(args: SelectSubset<T, chatDeleteArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {chatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatUpdateArgs>(args: SelectSubset<T, chatUpdateArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {chatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatDeleteManyArgs>(args?: SelectSubset<T, chatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatUpdateManyArgs>(args: SelectSubset<T, chatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {chatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chatUpdateManyAndReturnArgs>(args: SelectSubset<T, chatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {chatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends chatUpsertArgs>(args: SelectSubset<T, chatUpsertArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends chatCountArgs>(
      args?: Subset<T, chatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatGroupByArgs['orderBy'] }
        : { orderBy?: chatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chat model
   */
  readonly fields: chatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat_history<T extends chat$chat_historyArgs<ExtArgs> = {}>(args?: Subset<T, chat$chat_historyArgs<ExtArgs>>): Prisma__chat_historyClient<$Result.GetResult<Prisma.$chat_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chat model
   */
  interface chatFieldRefs {
    readonly id: FieldRef<"chat", 'Int'>
    readonly message_id: FieldRef<"chat", 'String'>
    readonly discord_id: FieldRef<"chat", 'String'>
    readonly username: FieldRef<"chat", 'String'>
    readonly content: FieldRef<"chat", 'String'>
    readonly content_type: FieldRef<"chat", 'String'>
    readonly attachments: FieldRef<"chat", 'String[]'>
    readonly channel_id: FieldRef<"chat", 'String'>
    readonly guild_id: FieldRef<"chat", 'String'>
    readonly created_at: FieldRef<"chat", 'DateTime'>
    readonly updated_at: FieldRef<"chat", 'DateTime'>
    readonly deleted_at: FieldRef<"chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chat findUnique
   */
  export type chatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat findUniqueOrThrow
   */
  export type chatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat findFirst
   */
  export type chatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat findFirstOrThrow
   */
  export type chatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat findMany
   */
  export type chatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat create
   */
  export type chatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * The data needed to create a chat.
     */
    data: XOR<chatCreateInput, chatUncheckedCreateInput>
  }

  /**
   * chat createMany
   */
  export type chatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chats.
     */
    data: chatCreateManyInput | chatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat createManyAndReturn
   */
  export type chatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * The data used to create many chats.
     */
    data: chatCreateManyInput | chatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat update
   */
  export type chatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * The data needed to update a chat.
     */
    data: XOR<chatUpdateInput, chatUncheckedUpdateInput>
    /**
     * Choose, which chat to update.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat updateMany
   */
  export type chatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chats.
     */
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyInput>
    /**
     * Filter which chats to update
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to update.
     */
    limit?: number
  }

  /**
   * chat updateManyAndReturn
   */
  export type chatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * The data used to update chats.
     */
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyInput>
    /**
     * Filter which chats to update
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to update.
     */
    limit?: number
  }

  /**
   * chat upsert
   */
  export type chatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * The filter to search for the chat to update in case it exists.
     */
    where: chatWhereUniqueInput
    /**
     * In case the chat found by the `where` argument doesn't exist, create a new chat with this data.
     */
    create: XOR<chatCreateInput, chatUncheckedCreateInput>
    /**
     * In case the chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatUpdateInput, chatUncheckedUpdateInput>
  }

  /**
   * chat delete
   */
  export type chatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter which chat to delete.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat deleteMany
   */
  export type chatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chats to delete
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to delete.
     */
    limit?: number
  }

  /**
   * chat.chat_history
   */
  export type chat$chat_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_history
     */
    select?: chat_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_history
     */
    omit?: chat_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_historyInclude<ExtArgs> | null
    where?: chat_historyWhereInput
  }

  /**
   * chat without action
   */
  export type chatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
  }


  /**
   * Model chat_history
   */

  export type AggregateChat_history = {
    _count: Chat_historyCountAggregateOutputType | null
    _avg: Chat_historyAvgAggregateOutputType | null
    _sum: Chat_historySumAggregateOutputType | null
    _min: Chat_historyMinAggregateOutputType | null
    _max: Chat_historyMaxAggregateOutputType | null
  }

  export type Chat_historyAvgAggregateOutputType = {
    id: number | null
  }

  export type Chat_historySumAggregateOutputType = {
    id: number | null
  }

  export type Chat_historyMinAggregateOutputType = {
    id: number | null
    messageid: string | null
    old_content: string | null
    new_content: string | null
    edited_at: Date | null
  }

  export type Chat_historyMaxAggregateOutputType = {
    id: number | null
    messageid: string | null
    old_content: string | null
    new_content: string | null
    edited_at: Date | null
  }

  export type Chat_historyCountAggregateOutputType = {
    id: number
    messageid: number
    old_content: number
    new_content: number
    old_attachments: number
    new_attachments: number
    edited_at: number
    _all: number
  }


  export type Chat_historyAvgAggregateInputType = {
    id?: true
  }

  export type Chat_historySumAggregateInputType = {
    id?: true
  }

  export type Chat_historyMinAggregateInputType = {
    id?: true
    messageid?: true
    old_content?: true
    new_content?: true
    edited_at?: true
  }

  export type Chat_historyMaxAggregateInputType = {
    id?: true
    messageid?: true
    old_content?: true
    new_content?: true
    edited_at?: true
  }

  export type Chat_historyCountAggregateInputType = {
    id?: true
    messageid?: true
    old_content?: true
    new_content?: true
    old_attachments?: true
    new_attachments?: true
    edited_at?: true
    _all?: true
  }

  export type Chat_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_history to aggregate.
     */
    where?: chat_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_histories to fetch.
     */
    orderBy?: chat_historyOrderByWithRelationInput | chat_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chat_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chat_histories
    **/
    _count?: true | Chat_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Chat_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Chat_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chat_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chat_historyMaxAggregateInputType
  }

  export type GetChat_historyAggregateType<T extends Chat_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateChat_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat_history[P]>
      : GetScalarType<T[P], AggregateChat_history[P]>
  }




  export type chat_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_historyWhereInput
    orderBy?: chat_historyOrderByWithAggregationInput | chat_historyOrderByWithAggregationInput[]
    by: Chat_historyScalarFieldEnum[] | Chat_historyScalarFieldEnum
    having?: chat_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chat_historyCountAggregateInputType | true
    _avg?: Chat_historyAvgAggregateInputType
    _sum?: Chat_historySumAggregateInputType
    _min?: Chat_historyMinAggregateInputType
    _max?: Chat_historyMaxAggregateInputType
  }

  export type Chat_historyGroupByOutputType = {
    id: number
    messageid: string
    old_content: string | null
    new_content: string | null
    old_attachments: string[]
    new_attachments: string[]
    edited_at: Date | null
    _count: Chat_historyCountAggregateOutputType | null
    _avg: Chat_historyAvgAggregateOutputType | null
    _sum: Chat_historySumAggregateOutputType | null
    _min: Chat_historyMinAggregateOutputType | null
    _max: Chat_historyMaxAggregateOutputType | null
  }

  type GetChat_historyGroupByPayload<T extends chat_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chat_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chat_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chat_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Chat_historyGroupByOutputType[P]>
        }
      >
    >


  export type chat_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageid?: boolean
    old_content?: boolean
    new_content?: boolean
    old_attachments?: boolean
    new_attachments?: boolean
    edited_at?: boolean
    chat?: boolean | chatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_history"]>

  export type chat_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageid?: boolean
    old_content?: boolean
    new_content?: boolean
    old_attachments?: boolean
    new_attachments?: boolean
    edited_at?: boolean
    chat?: boolean | chatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_history"]>

  export type chat_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageid?: boolean
    old_content?: boolean
    new_content?: boolean
    old_attachments?: boolean
    new_attachments?: boolean
    edited_at?: boolean
    chat?: boolean | chatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_history"]>

  export type chat_historySelectScalar = {
    id?: boolean
    messageid?: boolean
    old_content?: boolean
    new_content?: boolean
    old_attachments?: boolean
    new_attachments?: boolean
    edited_at?: boolean
  }

  export type chat_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "messageid" | "old_content" | "new_content" | "old_attachments" | "new_attachments" | "edited_at", ExtArgs["result"]["chat_history"]>
  export type chat_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | chatDefaultArgs<ExtArgs>
  }
  export type chat_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | chatDefaultArgs<ExtArgs>
  }
  export type chat_historyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | chatDefaultArgs<ExtArgs>
  }

  export type $chat_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chat_history"
    objects: {
      chat: Prisma.$chatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      messageid: string
      old_content: string | null
      new_content: string | null
      old_attachments: string[]
      new_attachments: string[]
      edited_at: Date | null
    }, ExtArgs["result"]["chat_history"]>
    composites: {}
  }

  type chat_historyGetPayload<S extends boolean | null | undefined | chat_historyDefaultArgs> = $Result.GetResult<Prisma.$chat_historyPayload, S>

  type chat_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chat_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chat_historyCountAggregateInputType | true
    }

  export interface chat_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat_history'], meta: { name: 'chat_history' } }
    /**
     * Find zero or one Chat_history that matches the filter.
     * @param {chat_historyFindUniqueArgs} args - Arguments to find a Chat_history
     * @example
     * // Get one Chat_history
     * const chat_history = await prisma.chat_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chat_historyFindUniqueArgs>(args: SelectSubset<T, chat_historyFindUniqueArgs<ExtArgs>>): Prisma__chat_historyClient<$Result.GetResult<Prisma.$chat_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chat_historyFindUniqueOrThrowArgs} args - Arguments to find a Chat_history
     * @example
     * // Get one Chat_history
     * const chat_history = await prisma.chat_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chat_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, chat_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chat_historyClient<$Result.GetResult<Prisma.$chat_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_historyFindFirstArgs} args - Arguments to find a Chat_history
     * @example
     * // Get one Chat_history
     * const chat_history = await prisma.chat_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chat_historyFindFirstArgs>(args?: SelectSubset<T, chat_historyFindFirstArgs<ExtArgs>>): Prisma__chat_historyClient<$Result.GetResult<Prisma.$chat_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_historyFindFirstOrThrowArgs} args - Arguments to find a Chat_history
     * @example
     * // Get one Chat_history
     * const chat_history = await prisma.chat_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chat_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, chat_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__chat_historyClient<$Result.GetResult<Prisma.$chat_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chat_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chat_histories
     * const chat_histories = await prisma.chat_history.findMany()
     * 
     * // Get first 10 Chat_histories
     * const chat_histories = await prisma.chat_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chat_historyWithIdOnly = await prisma.chat_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chat_historyFindManyArgs>(args?: SelectSubset<T, chat_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat_history.
     * @param {chat_historyCreateArgs} args - Arguments to create a Chat_history.
     * @example
     * // Create one Chat_history
     * const Chat_history = await prisma.chat_history.create({
     *   data: {
     *     // ... data to create a Chat_history
     *   }
     * })
     * 
     */
    create<T extends chat_historyCreateArgs>(args: SelectSubset<T, chat_historyCreateArgs<ExtArgs>>): Prisma__chat_historyClient<$Result.GetResult<Prisma.$chat_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chat_histories.
     * @param {chat_historyCreateManyArgs} args - Arguments to create many Chat_histories.
     * @example
     * // Create many Chat_histories
     * const chat_history = await prisma.chat_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chat_historyCreateManyArgs>(args?: SelectSubset<T, chat_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chat_histories and returns the data saved in the database.
     * @param {chat_historyCreateManyAndReturnArgs} args - Arguments to create many Chat_histories.
     * @example
     * // Create many Chat_histories
     * const chat_history = await prisma.chat_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chat_histories and only return the `id`
     * const chat_historyWithIdOnly = await prisma.chat_history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chat_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, chat_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat_history.
     * @param {chat_historyDeleteArgs} args - Arguments to delete one Chat_history.
     * @example
     * // Delete one Chat_history
     * const Chat_history = await prisma.chat_history.delete({
     *   where: {
     *     // ... filter to delete one Chat_history
     *   }
     * })
     * 
     */
    delete<T extends chat_historyDeleteArgs>(args: SelectSubset<T, chat_historyDeleteArgs<ExtArgs>>): Prisma__chat_historyClient<$Result.GetResult<Prisma.$chat_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat_history.
     * @param {chat_historyUpdateArgs} args - Arguments to update one Chat_history.
     * @example
     * // Update one Chat_history
     * const chat_history = await prisma.chat_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chat_historyUpdateArgs>(args: SelectSubset<T, chat_historyUpdateArgs<ExtArgs>>): Prisma__chat_historyClient<$Result.GetResult<Prisma.$chat_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chat_histories.
     * @param {chat_historyDeleteManyArgs} args - Arguments to filter Chat_histories to delete.
     * @example
     * // Delete a few Chat_histories
     * const { count } = await prisma.chat_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chat_historyDeleteManyArgs>(args?: SelectSubset<T, chat_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chat_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chat_histories
     * const chat_history = await prisma.chat_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chat_historyUpdateManyArgs>(args: SelectSubset<T, chat_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chat_histories and returns the data updated in the database.
     * @param {chat_historyUpdateManyAndReturnArgs} args - Arguments to update many Chat_histories.
     * @example
     * // Update many Chat_histories
     * const chat_history = await prisma.chat_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chat_histories and only return the `id`
     * const chat_historyWithIdOnly = await prisma.chat_history.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chat_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, chat_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat_history.
     * @param {chat_historyUpsertArgs} args - Arguments to update or create a Chat_history.
     * @example
     * // Update or create a Chat_history
     * const chat_history = await prisma.chat_history.upsert({
     *   create: {
     *     // ... data to create a Chat_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat_history we want to update
     *   }
     * })
     */
    upsert<T extends chat_historyUpsertArgs>(args: SelectSubset<T, chat_historyUpsertArgs<ExtArgs>>): Prisma__chat_historyClient<$Result.GetResult<Prisma.$chat_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chat_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_historyCountArgs} args - Arguments to filter Chat_histories to count.
     * @example
     * // Count the number of Chat_histories
     * const count = await prisma.chat_history.count({
     *   where: {
     *     // ... the filter for the Chat_histories we want to count
     *   }
     * })
    **/
    count<T extends chat_historyCountArgs>(
      args?: Subset<T, chat_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chat_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chat_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Chat_historyAggregateArgs>(args: Subset<T, Chat_historyAggregateArgs>): Prisma.PrismaPromise<GetChat_historyAggregateType<T>>

    /**
     * Group by Chat_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chat_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chat_historyGroupByArgs['orderBy'] }
        : { orderBy?: chat_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chat_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChat_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chat_history model
   */
  readonly fields: chat_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chat_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends chatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, chatDefaultArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chat_history model
   */
  interface chat_historyFieldRefs {
    readonly id: FieldRef<"chat_history", 'Int'>
    readonly messageid: FieldRef<"chat_history", 'String'>
    readonly old_content: FieldRef<"chat_history", 'String'>
    readonly new_content: FieldRef<"chat_history", 'String'>
    readonly old_attachments: FieldRef<"chat_history", 'String[]'>
    readonly new_attachments: FieldRef<"chat_history", 'String[]'>
    readonly edited_at: FieldRef<"chat_history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chat_history findUnique
   */
  export type chat_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_history
     */
    select?: chat_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_history
     */
    omit?: chat_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_historyInclude<ExtArgs> | null
    /**
     * Filter, which chat_history to fetch.
     */
    where: chat_historyWhereUniqueInput
  }

  /**
   * chat_history findUniqueOrThrow
   */
  export type chat_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_history
     */
    select?: chat_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_history
     */
    omit?: chat_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_historyInclude<ExtArgs> | null
    /**
     * Filter, which chat_history to fetch.
     */
    where: chat_historyWhereUniqueInput
  }

  /**
   * chat_history findFirst
   */
  export type chat_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_history
     */
    select?: chat_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_history
     */
    omit?: chat_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_historyInclude<ExtArgs> | null
    /**
     * Filter, which chat_history to fetch.
     */
    where?: chat_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_histories to fetch.
     */
    orderBy?: chat_historyOrderByWithRelationInput | chat_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_histories.
     */
    cursor?: chat_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_histories.
     */
    distinct?: Chat_historyScalarFieldEnum | Chat_historyScalarFieldEnum[]
  }

  /**
   * chat_history findFirstOrThrow
   */
  export type chat_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_history
     */
    select?: chat_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_history
     */
    omit?: chat_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_historyInclude<ExtArgs> | null
    /**
     * Filter, which chat_history to fetch.
     */
    where?: chat_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_histories to fetch.
     */
    orderBy?: chat_historyOrderByWithRelationInput | chat_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_histories.
     */
    cursor?: chat_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_histories.
     */
    distinct?: Chat_historyScalarFieldEnum | Chat_historyScalarFieldEnum[]
  }

  /**
   * chat_history findMany
   */
  export type chat_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_history
     */
    select?: chat_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_history
     */
    omit?: chat_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_historyInclude<ExtArgs> | null
    /**
     * Filter, which chat_histories to fetch.
     */
    where?: chat_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_histories to fetch.
     */
    orderBy?: chat_historyOrderByWithRelationInput | chat_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chat_histories.
     */
    cursor?: chat_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_histories.
     */
    skip?: number
    distinct?: Chat_historyScalarFieldEnum | Chat_historyScalarFieldEnum[]
  }

  /**
   * chat_history create
   */
  export type chat_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_history
     */
    select?: chat_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_history
     */
    omit?: chat_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a chat_history.
     */
    data: XOR<chat_historyCreateInput, chat_historyUncheckedCreateInput>
  }

  /**
   * chat_history createMany
   */
  export type chat_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chat_histories.
     */
    data: chat_historyCreateManyInput | chat_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat_history createManyAndReturn
   */
  export type chat_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_history
     */
    select?: chat_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat_history
     */
    omit?: chat_historyOmit<ExtArgs> | null
    /**
     * The data used to create many chat_histories.
     */
    data: chat_historyCreateManyInput | chat_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat_history update
   */
  export type chat_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_history
     */
    select?: chat_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_history
     */
    omit?: chat_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a chat_history.
     */
    data: XOR<chat_historyUpdateInput, chat_historyUncheckedUpdateInput>
    /**
     * Choose, which chat_history to update.
     */
    where: chat_historyWhereUniqueInput
  }

  /**
   * chat_history updateMany
   */
  export type chat_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chat_histories.
     */
    data: XOR<chat_historyUpdateManyMutationInput, chat_historyUncheckedUpdateManyInput>
    /**
     * Filter which chat_histories to update
     */
    where?: chat_historyWhereInput
    /**
     * Limit how many chat_histories to update.
     */
    limit?: number
  }

  /**
   * chat_history updateManyAndReturn
   */
  export type chat_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_history
     */
    select?: chat_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat_history
     */
    omit?: chat_historyOmit<ExtArgs> | null
    /**
     * The data used to update chat_histories.
     */
    data: XOR<chat_historyUpdateManyMutationInput, chat_historyUncheckedUpdateManyInput>
    /**
     * Filter which chat_histories to update
     */
    where?: chat_historyWhereInput
    /**
     * Limit how many chat_histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_historyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat_history upsert
   */
  export type chat_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_history
     */
    select?: chat_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_history
     */
    omit?: chat_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the chat_history to update in case it exists.
     */
    where: chat_historyWhereUniqueInput
    /**
     * In case the chat_history found by the `where` argument doesn't exist, create a new chat_history with this data.
     */
    create: XOR<chat_historyCreateInput, chat_historyUncheckedCreateInput>
    /**
     * In case the chat_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chat_historyUpdateInput, chat_historyUncheckedUpdateInput>
  }

  /**
   * chat_history delete
   */
  export type chat_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_history
     */
    select?: chat_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_history
     */
    omit?: chat_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_historyInclude<ExtArgs> | null
    /**
     * Filter which chat_history to delete.
     */
    where: chat_historyWhereUniqueInput
  }

  /**
   * chat_history deleteMany
   */
  export type chat_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_histories to delete
     */
    where?: chat_historyWhereInput
    /**
     * Limit how many chat_histories to delete.
     */
    limit?: number
  }

  /**
   * chat_history without action
   */
  export type chat_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_history
     */
    select?: chat_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_history
     */
    omit?: chat_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_historyInclude<ExtArgs> | null
  }


  /**
   * Model moderators
   */

  export type AggregateModerators = {
    _count: ModeratorsCountAggregateOutputType | null
    _avg: ModeratorsAvgAggregateOutputType | null
    _sum: ModeratorsSumAggregateOutputType | null
    _min: ModeratorsMinAggregateOutputType | null
    _max: ModeratorsMaxAggregateOutputType | null
  }

  export type ModeratorsAvgAggregateOutputType = {
    id: number | null
  }

  export type ModeratorsSumAggregateOutputType = {
    id: number | null
  }

  export type ModeratorsMinAggregateOutputType = {
    id: number | null
    discord_id: string | null
    username: string | null
    locale: string | null
    email: string | null
    registration_token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ModeratorsMaxAggregateOutputType = {
    id: number | null
    discord_id: string | null
    username: string | null
    locale: string | null
    email: string | null
    registration_token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ModeratorsCountAggregateOutputType = {
    id: number
    discord_id: number
    username: number
    locale: number
    email: number
    registration_token: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ModeratorsAvgAggregateInputType = {
    id?: true
  }

  export type ModeratorsSumAggregateInputType = {
    id?: true
  }

  export type ModeratorsMinAggregateInputType = {
    id?: true
    discord_id?: true
    username?: true
    locale?: true
    email?: true
    registration_token?: true
    created_at?: true
    updated_at?: true
  }

  export type ModeratorsMaxAggregateInputType = {
    id?: true
    discord_id?: true
    username?: true
    locale?: true
    email?: true
    registration_token?: true
    created_at?: true
    updated_at?: true
  }

  export type ModeratorsCountAggregateInputType = {
    id?: true
    discord_id?: true
    username?: true
    locale?: true
    email?: true
    registration_token?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ModeratorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which moderators to aggregate.
     */
    where?: moderatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of moderators to fetch.
     */
    orderBy?: moderatorsOrderByWithRelationInput | moderatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: moderatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` moderators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` moderators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned moderators
    **/
    _count?: true | ModeratorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModeratorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModeratorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModeratorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModeratorsMaxAggregateInputType
  }

  export type GetModeratorsAggregateType<T extends ModeratorsAggregateArgs> = {
        [P in keyof T & keyof AggregateModerators]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModerators[P]>
      : GetScalarType<T[P], AggregateModerators[P]>
  }




  export type moderatorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moderatorsWhereInput
    orderBy?: moderatorsOrderByWithAggregationInput | moderatorsOrderByWithAggregationInput[]
    by: ModeratorsScalarFieldEnum[] | ModeratorsScalarFieldEnum
    having?: moderatorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModeratorsCountAggregateInputType | true
    _avg?: ModeratorsAvgAggregateInputType
    _sum?: ModeratorsSumAggregateInputType
    _min?: ModeratorsMinAggregateInputType
    _max?: ModeratorsMaxAggregateInputType
  }

  export type ModeratorsGroupByOutputType = {
    id: number
    discord_id: string
    username: string
    locale: string | null
    email: string | null
    registration_token: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ModeratorsCountAggregateOutputType | null
    _avg: ModeratorsAvgAggregateOutputType | null
    _sum: ModeratorsSumAggregateOutputType | null
    _min: ModeratorsMinAggregateOutputType | null
    _max: ModeratorsMaxAggregateOutputType | null
  }

  type GetModeratorsGroupByPayload<T extends moderatorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModeratorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModeratorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModeratorsGroupByOutputType[P]>
            : GetScalarType<T[P], ModeratorsGroupByOutputType[P]>
        }
      >
    >


  export type moderatorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discord_id?: boolean
    username?: boolean
    locale?: boolean
    email?: boolean
    registration_token?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["moderators"]>

  export type moderatorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discord_id?: boolean
    username?: boolean
    locale?: boolean
    email?: boolean
    registration_token?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["moderators"]>

  export type moderatorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discord_id?: boolean
    username?: boolean
    locale?: boolean
    email?: boolean
    registration_token?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["moderators"]>

  export type moderatorsSelectScalar = {
    id?: boolean
    discord_id?: boolean
    username?: boolean
    locale?: boolean
    email?: boolean
    registration_token?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type moderatorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "discord_id" | "username" | "locale" | "email" | "registration_token" | "created_at" | "updated_at", ExtArgs["result"]["moderators"]>

  export type $moderatorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "moderators"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      discord_id: string
      username: string
      locale: string | null
      email: string | null
      registration_token: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["moderators"]>
    composites: {}
  }

  type moderatorsGetPayload<S extends boolean | null | undefined | moderatorsDefaultArgs> = $Result.GetResult<Prisma.$moderatorsPayload, S>

  type moderatorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<moderatorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModeratorsCountAggregateInputType | true
    }

  export interface moderatorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['moderators'], meta: { name: 'moderators' } }
    /**
     * Find zero or one Moderators that matches the filter.
     * @param {moderatorsFindUniqueArgs} args - Arguments to find a Moderators
     * @example
     * // Get one Moderators
     * const moderators = await prisma.moderators.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends moderatorsFindUniqueArgs>(args: SelectSubset<T, moderatorsFindUniqueArgs<ExtArgs>>): Prisma__moderatorsClient<$Result.GetResult<Prisma.$moderatorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Moderators that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {moderatorsFindUniqueOrThrowArgs} args - Arguments to find a Moderators
     * @example
     * // Get one Moderators
     * const moderators = await prisma.moderators.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends moderatorsFindUniqueOrThrowArgs>(args: SelectSubset<T, moderatorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__moderatorsClient<$Result.GetResult<Prisma.$moderatorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Moderators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moderatorsFindFirstArgs} args - Arguments to find a Moderators
     * @example
     * // Get one Moderators
     * const moderators = await prisma.moderators.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends moderatorsFindFirstArgs>(args?: SelectSubset<T, moderatorsFindFirstArgs<ExtArgs>>): Prisma__moderatorsClient<$Result.GetResult<Prisma.$moderatorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Moderators that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moderatorsFindFirstOrThrowArgs} args - Arguments to find a Moderators
     * @example
     * // Get one Moderators
     * const moderators = await prisma.moderators.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends moderatorsFindFirstOrThrowArgs>(args?: SelectSubset<T, moderatorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__moderatorsClient<$Result.GetResult<Prisma.$moderatorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Moderators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moderatorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moderators
     * const moderators = await prisma.moderators.findMany()
     * 
     * // Get first 10 Moderators
     * const moderators = await prisma.moderators.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moderatorsWithIdOnly = await prisma.moderators.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends moderatorsFindManyArgs>(args?: SelectSubset<T, moderatorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moderatorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Moderators.
     * @param {moderatorsCreateArgs} args - Arguments to create a Moderators.
     * @example
     * // Create one Moderators
     * const Moderators = await prisma.moderators.create({
     *   data: {
     *     // ... data to create a Moderators
     *   }
     * })
     * 
     */
    create<T extends moderatorsCreateArgs>(args: SelectSubset<T, moderatorsCreateArgs<ExtArgs>>): Prisma__moderatorsClient<$Result.GetResult<Prisma.$moderatorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Moderators.
     * @param {moderatorsCreateManyArgs} args - Arguments to create many Moderators.
     * @example
     * // Create many Moderators
     * const moderators = await prisma.moderators.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends moderatorsCreateManyArgs>(args?: SelectSubset<T, moderatorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Moderators and returns the data saved in the database.
     * @param {moderatorsCreateManyAndReturnArgs} args - Arguments to create many Moderators.
     * @example
     * // Create many Moderators
     * const moderators = await prisma.moderators.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Moderators and only return the `id`
     * const moderatorsWithIdOnly = await prisma.moderators.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends moderatorsCreateManyAndReturnArgs>(args?: SelectSubset<T, moderatorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moderatorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Moderators.
     * @param {moderatorsDeleteArgs} args - Arguments to delete one Moderators.
     * @example
     * // Delete one Moderators
     * const Moderators = await prisma.moderators.delete({
     *   where: {
     *     // ... filter to delete one Moderators
     *   }
     * })
     * 
     */
    delete<T extends moderatorsDeleteArgs>(args: SelectSubset<T, moderatorsDeleteArgs<ExtArgs>>): Prisma__moderatorsClient<$Result.GetResult<Prisma.$moderatorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Moderators.
     * @param {moderatorsUpdateArgs} args - Arguments to update one Moderators.
     * @example
     * // Update one Moderators
     * const moderators = await prisma.moderators.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends moderatorsUpdateArgs>(args: SelectSubset<T, moderatorsUpdateArgs<ExtArgs>>): Prisma__moderatorsClient<$Result.GetResult<Prisma.$moderatorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Moderators.
     * @param {moderatorsDeleteManyArgs} args - Arguments to filter Moderators to delete.
     * @example
     * // Delete a few Moderators
     * const { count } = await prisma.moderators.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends moderatorsDeleteManyArgs>(args?: SelectSubset<T, moderatorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moderators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moderatorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moderators
     * const moderators = await prisma.moderators.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends moderatorsUpdateManyArgs>(args: SelectSubset<T, moderatorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moderators and returns the data updated in the database.
     * @param {moderatorsUpdateManyAndReturnArgs} args - Arguments to update many Moderators.
     * @example
     * // Update many Moderators
     * const moderators = await prisma.moderators.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Moderators and only return the `id`
     * const moderatorsWithIdOnly = await prisma.moderators.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends moderatorsUpdateManyAndReturnArgs>(args: SelectSubset<T, moderatorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moderatorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Moderators.
     * @param {moderatorsUpsertArgs} args - Arguments to update or create a Moderators.
     * @example
     * // Update or create a Moderators
     * const moderators = await prisma.moderators.upsert({
     *   create: {
     *     // ... data to create a Moderators
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Moderators we want to update
     *   }
     * })
     */
    upsert<T extends moderatorsUpsertArgs>(args: SelectSubset<T, moderatorsUpsertArgs<ExtArgs>>): Prisma__moderatorsClient<$Result.GetResult<Prisma.$moderatorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Moderators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moderatorsCountArgs} args - Arguments to filter Moderators to count.
     * @example
     * // Count the number of Moderators
     * const count = await prisma.moderators.count({
     *   where: {
     *     // ... the filter for the Moderators we want to count
     *   }
     * })
    **/
    count<T extends moderatorsCountArgs>(
      args?: Subset<T, moderatorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModeratorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Moderators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModeratorsAggregateArgs>(args: Subset<T, ModeratorsAggregateArgs>): Prisma.PrismaPromise<GetModeratorsAggregateType<T>>

    /**
     * Group by Moderators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moderatorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends moderatorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: moderatorsGroupByArgs['orderBy'] }
        : { orderBy?: moderatorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, moderatorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModeratorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the moderators model
   */
  readonly fields: moderatorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for moderators.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__moderatorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the moderators model
   */
  interface moderatorsFieldRefs {
    readonly id: FieldRef<"moderators", 'Int'>
    readonly discord_id: FieldRef<"moderators", 'String'>
    readonly username: FieldRef<"moderators", 'String'>
    readonly locale: FieldRef<"moderators", 'String'>
    readonly email: FieldRef<"moderators", 'String'>
    readonly registration_token: FieldRef<"moderators", 'String'>
    readonly created_at: FieldRef<"moderators", 'DateTime'>
    readonly updated_at: FieldRef<"moderators", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * moderators findUnique
   */
  export type moderatorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moderators
     */
    select?: moderatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moderators
     */
    omit?: moderatorsOmit<ExtArgs> | null
    /**
     * Filter, which moderators to fetch.
     */
    where: moderatorsWhereUniqueInput
  }

  /**
   * moderators findUniqueOrThrow
   */
  export type moderatorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moderators
     */
    select?: moderatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moderators
     */
    omit?: moderatorsOmit<ExtArgs> | null
    /**
     * Filter, which moderators to fetch.
     */
    where: moderatorsWhereUniqueInput
  }

  /**
   * moderators findFirst
   */
  export type moderatorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moderators
     */
    select?: moderatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moderators
     */
    omit?: moderatorsOmit<ExtArgs> | null
    /**
     * Filter, which moderators to fetch.
     */
    where?: moderatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of moderators to fetch.
     */
    orderBy?: moderatorsOrderByWithRelationInput | moderatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for moderators.
     */
    cursor?: moderatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` moderators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` moderators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of moderators.
     */
    distinct?: ModeratorsScalarFieldEnum | ModeratorsScalarFieldEnum[]
  }

  /**
   * moderators findFirstOrThrow
   */
  export type moderatorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moderators
     */
    select?: moderatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moderators
     */
    omit?: moderatorsOmit<ExtArgs> | null
    /**
     * Filter, which moderators to fetch.
     */
    where?: moderatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of moderators to fetch.
     */
    orderBy?: moderatorsOrderByWithRelationInput | moderatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for moderators.
     */
    cursor?: moderatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` moderators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` moderators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of moderators.
     */
    distinct?: ModeratorsScalarFieldEnum | ModeratorsScalarFieldEnum[]
  }

  /**
   * moderators findMany
   */
  export type moderatorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moderators
     */
    select?: moderatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moderators
     */
    omit?: moderatorsOmit<ExtArgs> | null
    /**
     * Filter, which moderators to fetch.
     */
    where?: moderatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of moderators to fetch.
     */
    orderBy?: moderatorsOrderByWithRelationInput | moderatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing moderators.
     */
    cursor?: moderatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` moderators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` moderators.
     */
    skip?: number
    distinct?: ModeratorsScalarFieldEnum | ModeratorsScalarFieldEnum[]
  }

  /**
   * moderators create
   */
  export type moderatorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moderators
     */
    select?: moderatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moderators
     */
    omit?: moderatorsOmit<ExtArgs> | null
    /**
     * The data needed to create a moderators.
     */
    data: XOR<moderatorsCreateInput, moderatorsUncheckedCreateInput>
  }

  /**
   * moderators createMany
   */
  export type moderatorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many moderators.
     */
    data: moderatorsCreateManyInput | moderatorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * moderators createManyAndReturn
   */
  export type moderatorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moderators
     */
    select?: moderatorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the moderators
     */
    omit?: moderatorsOmit<ExtArgs> | null
    /**
     * The data used to create many moderators.
     */
    data: moderatorsCreateManyInput | moderatorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * moderators update
   */
  export type moderatorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moderators
     */
    select?: moderatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moderators
     */
    omit?: moderatorsOmit<ExtArgs> | null
    /**
     * The data needed to update a moderators.
     */
    data: XOR<moderatorsUpdateInput, moderatorsUncheckedUpdateInput>
    /**
     * Choose, which moderators to update.
     */
    where: moderatorsWhereUniqueInput
  }

  /**
   * moderators updateMany
   */
  export type moderatorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update moderators.
     */
    data: XOR<moderatorsUpdateManyMutationInput, moderatorsUncheckedUpdateManyInput>
    /**
     * Filter which moderators to update
     */
    where?: moderatorsWhereInput
    /**
     * Limit how many moderators to update.
     */
    limit?: number
  }

  /**
   * moderators updateManyAndReturn
   */
  export type moderatorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moderators
     */
    select?: moderatorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the moderators
     */
    omit?: moderatorsOmit<ExtArgs> | null
    /**
     * The data used to update moderators.
     */
    data: XOR<moderatorsUpdateManyMutationInput, moderatorsUncheckedUpdateManyInput>
    /**
     * Filter which moderators to update
     */
    where?: moderatorsWhereInput
    /**
     * Limit how many moderators to update.
     */
    limit?: number
  }

  /**
   * moderators upsert
   */
  export type moderatorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moderators
     */
    select?: moderatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moderators
     */
    omit?: moderatorsOmit<ExtArgs> | null
    /**
     * The filter to search for the moderators to update in case it exists.
     */
    where: moderatorsWhereUniqueInput
    /**
     * In case the moderators found by the `where` argument doesn't exist, create a new moderators with this data.
     */
    create: XOR<moderatorsCreateInput, moderatorsUncheckedCreateInput>
    /**
     * In case the moderators was found with the provided `where` argument, update it with this data.
     */
    update: XOR<moderatorsUpdateInput, moderatorsUncheckedUpdateInput>
  }

  /**
   * moderators delete
   */
  export type moderatorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moderators
     */
    select?: moderatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moderators
     */
    omit?: moderatorsOmit<ExtArgs> | null
    /**
     * Filter which moderators to delete.
     */
    where: moderatorsWhereUniqueInput
  }

  /**
   * moderators deleteMany
   */
  export type moderatorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which moderators to delete
     */
    where?: moderatorsWhereInput
    /**
     * Limit how many moderators to delete.
     */
    limit?: number
  }

  /**
   * moderators without action
   */
  export type moderatorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moderators
     */
    select?: moderatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moderators
     */
    omit?: moderatorsOmit<ExtArgs> | null
  }


  /**
   * Model tickets
   */

  export type AggregateTickets = {
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  export type TicketsAvgAggregateOutputType = {
    id: number | null
  }

  export type TicketsSumAggregateOutputType = {
    id: number | null
  }

  export type TicketsMinAggregateOutputType = {
    id: number | null
    ticket_id: string | null
    author_id: string | null
    target_id: string | null
    assignee_id: string | null
    status: $Enums.ticket_status | null
    category: $Enums.ticket_category | null
    subject: string | null
    description: string | null
    channel_id: string | null
    guild_id: string | null
    is_closed: boolean | null
    created_at: Date | null
    updated_at: Date | null
    closed_at: Date | null
    deleted_at: Date | null
  }

  export type TicketsMaxAggregateOutputType = {
    id: number | null
    ticket_id: string | null
    author_id: string | null
    target_id: string | null
    assignee_id: string | null
    status: $Enums.ticket_status | null
    category: $Enums.ticket_category | null
    subject: string | null
    description: string | null
    channel_id: string | null
    guild_id: string | null
    is_closed: boolean | null
    created_at: Date | null
    updated_at: Date | null
    closed_at: Date | null
    deleted_at: Date | null
  }

  export type TicketsCountAggregateOutputType = {
    id: number
    ticket_id: number
    author_id: number
    target_id: number
    assignee_id: number
    status: number
    category: number
    subject: number
    description: number
    channel_id: number
    guild_id: number
    is_closed: number
    created_at: number
    updated_at: number
    closed_at: number
    deleted_at: number
    _all: number
  }


  export type TicketsAvgAggregateInputType = {
    id?: true
  }

  export type TicketsSumAggregateInputType = {
    id?: true
  }

  export type TicketsMinAggregateInputType = {
    id?: true
    ticket_id?: true
    author_id?: true
    target_id?: true
    assignee_id?: true
    status?: true
    category?: true
    subject?: true
    description?: true
    channel_id?: true
    guild_id?: true
    is_closed?: true
    created_at?: true
    updated_at?: true
    closed_at?: true
    deleted_at?: true
  }

  export type TicketsMaxAggregateInputType = {
    id?: true
    ticket_id?: true
    author_id?: true
    target_id?: true
    assignee_id?: true
    status?: true
    category?: true
    subject?: true
    description?: true
    channel_id?: true
    guild_id?: true
    is_closed?: true
    created_at?: true
    updated_at?: true
    closed_at?: true
    deleted_at?: true
  }

  export type TicketsCountAggregateInputType = {
    id?: true
    ticket_id?: true
    author_id?: true
    target_id?: true
    assignee_id?: true
    status?: true
    category?: true
    subject?: true
    description?: true
    channel_id?: true
    guild_id?: true
    is_closed?: true
    created_at?: true
    updated_at?: true
    closed_at?: true
    deleted_at?: true
    _all?: true
  }

  export type TicketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to aggregate.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tickets
    **/
    _count?: true | TicketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketsMaxAggregateInputType
  }

  export type GetTicketsAggregateType<T extends TicketsAggregateArgs> = {
        [P in keyof T & keyof AggregateTickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickets[P]>
      : GetScalarType<T[P], AggregateTickets[P]>
  }




  export type ticketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithAggregationInput | ticketsOrderByWithAggregationInput[]
    by: TicketsScalarFieldEnum[] | TicketsScalarFieldEnum
    having?: ticketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketsCountAggregateInputType | true
    _avg?: TicketsAvgAggregateInputType
    _sum?: TicketsSumAggregateInputType
    _min?: TicketsMinAggregateInputType
    _max?: TicketsMaxAggregateInputType
  }

  export type TicketsGroupByOutputType = {
    id: number
    ticket_id: string
    author_id: string
    target_id: string | null
    assignee_id: string | null
    status: $Enums.ticket_status | null
    category: $Enums.ticket_category | null
    subject: string | null
    description: string | null
    channel_id: string | null
    guild_id: string | null
    is_closed: boolean | null
    created_at: Date | null
    updated_at: Date | null
    closed_at: Date | null
    deleted_at: Date | null
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  type GetTicketsGroupByPayload<T extends ticketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketsGroupByOutputType[P]>
            : GetScalarType<T[P], TicketsGroupByOutputType[P]>
        }
      >
    >


  export type ticketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticket_id?: boolean
    author_id?: boolean
    target_id?: boolean
    assignee_id?: boolean
    status?: boolean
    category?: boolean
    subject?: boolean
    description?: boolean
    channel_id?: boolean
    guild_id?: boolean
    is_closed?: boolean
    created_at?: boolean
    updated_at?: boolean
    closed_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["tickets"]>

  export type ticketsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticket_id?: boolean
    author_id?: boolean
    target_id?: boolean
    assignee_id?: boolean
    status?: boolean
    category?: boolean
    subject?: boolean
    description?: boolean
    channel_id?: boolean
    guild_id?: boolean
    is_closed?: boolean
    created_at?: boolean
    updated_at?: boolean
    closed_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["tickets"]>

  export type ticketsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticket_id?: boolean
    author_id?: boolean
    target_id?: boolean
    assignee_id?: boolean
    status?: boolean
    category?: boolean
    subject?: boolean
    description?: boolean
    channel_id?: boolean
    guild_id?: boolean
    is_closed?: boolean
    created_at?: boolean
    updated_at?: boolean
    closed_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["tickets"]>

  export type ticketsSelectScalar = {
    id?: boolean
    ticket_id?: boolean
    author_id?: boolean
    target_id?: boolean
    assignee_id?: boolean
    status?: boolean
    category?: boolean
    subject?: boolean
    description?: boolean
    channel_id?: boolean
    guild_id?: boolean
    is_closed?: boolean
    created_at?: boolean
    updated_at?: boolean
    closed_at?: boolean
    deleted_at?: boolean
  }

  export type ticketsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticket_id" | "author_id" | "target_id" | "assignee_id" | "status" | "category" | "subject" | "description" | "channel_id" | "guild_id" | "is_closed" | "created_at" | "updated_at" | "closed_at" | "deleted_at", ExtArgs["result"]["tickets"]>

  export type $ticketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tickets"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticket_id: string
      author_id: string
      target_id: string | null
      assignee_id: string | null
      status: $Enums.ticket_status | null
      category: $Enums.ticket_category | null
      subject: string | null
      description: string | null
      channel_id: string | null
      guild_id: string | null
      is_closed: boolean | null
      created_at: Date | null
      updated_at: Date | null
      closed_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["tickets"]>
    composites: {}
  }

  type ticketsGetPayload<S extends boolean | null | undefined | ticketsDefaultArgs> = $Result.GetResult<Prisma.$ticketsPayload, S>

  type ticketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ticketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketsCountAggregateInputType | true
    }

  export interface ticketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tickets'], meta: { name: 'tickets' } }
    /**
     * Find zero or one Tickets that matches the filter.
     * @param {ticketsFindUniqueArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticketsFindUniqueArgs>(args: SelectSubset<T, ticketsFindUniqueArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tickets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ticketsFindUniqueOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticketsFindUniqueOrThrowArgs>(args: SelectSubset<T, ticketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindFirstArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticketsFindFirstArgs>(args?: SelectSubset<T, ticketsFindFirstArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindFirstOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticketsFindFirstOrThrowArgs>(args?: SelectSubset<T, ticketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.tickets.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.tickets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketsWithIdOnly = await prisma.tickets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ticketsFindManyArgs>(args?: SelectSubset<T, ticketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tickets.
     * @param {ticketsCreateArgs} args - Arguments to create a Tickets.
     * @example
     * // Create one Tickets
     * const Tickets = await prisma.tickets.create({
     *   data: {
     *     // ... data to create a Tickets
     *   }
     * })
     * 
     */
    create<T extends ticketsCreateArgs>(args: SelectSubset<T, ticketsCreateArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {ticketsCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticketsCreateManyArgs>(args?: SelectSubset<T, ticketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {ticketsCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketsWithIdOnly = await prisma.tickets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ticketsCreateManyAndReturnArgs>(args?: SelectSubset<T, ticketsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tickets.
     * @param {ticketsDeleteArgs} args - Arguments to delete one Tickets.
     * @example
     * // Delete one Tickets
     * const Tickets = await prisma.tickets.delete({
     *   where: {
     *     // ... filter to delete one Tickets
     *   }
     * })
     * 
     */
    delete<T extends ticketsDeleteArgs>(args: SelectSubset<T, ticketsDeleteArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tickets.
     * @param {ticketsUpdateArgs} args - Arguments to update one Tickets.
     * @example
     * // Update one Tickets
     * const tickets = await prisma.tickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticketsUpdateArgs>(args: SelectSubset<T, ticketsUpdateArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {ticketsDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.tickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticketsDeleteManyArgs>(args?: SelectSubset<T, ticketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticketsUpdateManyArgs>(args: SelectSubset<T, ticketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {ticketsUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketsWithIdOnly = await prisma.tickets.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ticketsUpdateManyAndReturnArgs>(args: SelectSubset<T, ticketsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tickets.
     * @param {ticketsUpsertArgs} args - Arguments to update or create a Tickets.
     * @example
     * // Update or create a Tickets
     * const tickets = await prisma.tickets.upsert({
     *   create: {
     *     // ... data to create a Tickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tickets we want to update
     *   }
     * })
     */
    upsert<T extends ticketsUpsertArgs>(args: SelectSubset<T, ticketsUpsertArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.tickets.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends ticketsCountArgs>(
      args?: Subset<T, ticketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketsAggregateArgs>(args: Subset<T, TicketsAggregateArgs>): Prisma.PrismaPromise<GetTicketsAggregateType<T>>

    /**
     * Group by Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketsGroupByArgs['orderBy'] }
        : { orderBy?: ticketsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tickets model
   */
  readonly fields: ticketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tickets model
   */
  interface ticketsFieldRefs {
    readonly id: FieldRef<"tickets", 'Int'>
    readonly ticket_id: FieldRef<"tickets", 'String'>
    readonly author_id: FieldRef<"tickets", 'String'>
    readonly target_id: FieldRef<"tickets", 'String'>
    readonly assignee_id: FieldRef<"tickets", 'String'>
    readonly status: FieldRef<"tickets", 'ticket_status'>
    readonly category: FieldRef<"tickets", 'ticket_category'>
    readonly subject: FieldRef<"tickets", 'String'>
    readonly description: FieldRef<"tickets", 'String'>
    readonly channel_id: FieldRef<"tickets", 'String'>
    readonly guild_id: FieldRef<"tickets", 'String'>
    readonly is_closed: FieldRef<"tickets", 'Boolean'>
    readonly created_at: FieldRef<"tickets", 'DateTime'>
    readonly updated_at: FieldRef<"tickets", 'DateTime'>
    readonly closed_at: FieldRef<"tickets", 'DateTime'>
    readonly deleted_at: FieldRef<"tickets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tickets findUnique
   */
  export type ticketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets findUniqueOrThrow
   */
  export type ticketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets findFirst
   */
  export type ticketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets findFirstOrThrow
   */
  export type ticketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets findMany
   */
  export type ticketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets create
   */
  export type ticketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * The data needed to create a tickets.
     */
    data: XOR<ticketsCreateInput, ticketsUncheckedCreateInput>
  }

  /**
   * tickets createMany
   */
  export type ticketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketsCreateManyInput | ticketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tickets createManyAndReturn
   */
  export type ticketsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * The data used to create many tickets.
     */
    data: ticketsCreateManyInput | ticketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tickets update
   */
  export type ticketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * The data needed to update a tickets.
     */
    data: XOR<ticketsUpdateInput, ticketsUncheckedUpdateInput>
    /**
     * Choose, which tickets to update.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets updateMany
   */
  export type ticketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
  }

  /**
   * tickets updateManyAndReturn
   */
  export type ticketsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
  }

  /**
   * tickets upsert
   */
  export type ticketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * The filter to search for the tickets to update in case it exists.
     */
    where: ticketsWhereUniqueInput
    /**
     * In case the tickets found by the `where` argument doesn't exist, create a new tickets with this data.
     */
    create: XOR<ticketsCreateInput, ticketsUncheckedCreateInput>
    /**
     * In case the tickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketsUpdateInput, ticketsUncheckedUpdateInput>
  }

  /**
   * tickets delete
   */
  export type ticketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Filter which tickets to delete.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets deleteMany
   */
  export type ticketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to delete.
     */
    limit?: number
  }

  /**
   * tickets without action
   */
  export type ticketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChatScalarFieldEnum: {
    id: 'id',
    message_id: 'message_id',
    discord_id: 'discord_id',
    username: 'username',
    content: 'content',
    content_type: 'content_type',
    attachments: 'attachments',
    channel_id: 'channel_id',
    guild_id: 'guild_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const Chat_historyScalarFieldEnum: {
    id: 'id',
    messageid: 'messageid',
    old_content: 'old_content',
    new_content: 'new_content',
    old_attachments: 'old_attachments',
    new_attachments: 'new_attachments',
    edited_at: 'edited_at'
  };

  export type Chat_historyScalarFieldEnum = (typeof Chat_historyScalarFieldEnum)[keyof typeof Chat_historyScalarFieldEnum]


  export const ModeratorsScalarFieldEnum: {
    id: 'id',
    discord_id: 'discord_id',
    username: 'username',
    locale: 'locale',
    email: 'email',
    registration_token: 'registration_token',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ModeratorsScalarFieldEnum = (typeof ModeratorsScalarFieldEnum)[keyof typeof ModeratorsScalarFieldEnum]


  export const TicketsScalarFieldEnum: {
    id: 'id',
    ticket_id: 'ticket_id',
    author_id: 'author_id',
    target_id: 'target_id',
    assignee_id: 'assignee_id',
    status: 'status',
    category: 'category',
    subject: 'subject',
    description: 'description',
    channel_id: 'channel_id',
    guild_id: 'guild_id',
    is_closed: 'is_closed',
    created_at: 'created_at',
    updated_at: 'updated_at',
    closed_at: 'closed_at',
    deleted_at: 'deleted_at'
  };

  export type TicketsScalarFieldEnum = (typeof TicketsScalarFieldEnum)[keyof typeof TicketsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ticket_status'
   */
  export type Enumticket_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ticket_status'>
    


  /**
   * Reference to a field of type 'ticket_status[]'
   */
  export type ListEnumticket_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ticket_status[]'>
    


  /**
   * Reference to a field of type 'ticket_category'
   */
  export type Enumticket_categoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ticket_category'>
    


  /**
   * Reference to a field of type 'ticket_category[]'
   */
  export type ListEnumticket_categoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ticket_category[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type chatWhereInput = {
    AND?: chatWhereInput | chatWhereInput[]
    OR?: chatWhereInput[]
    NOT?: chatWhereInput | chatWhereInput[]
    id?: IntFilter<"chat"> | number
    message_id?: StringFilter<"chat"> | string
    discord_id?: StringFilter<"chat"> | string
    username?: StringNullableFilter<"chat"> | string | null
    content?: StringNullableFilter<"chat"> | string | null
    content_type?: StringNullableFilter<"chat"> | string | null
    attachments?: StringNullableListFilter<"chat">
    channel_id?: StringNullableFilter<"chat"> | string | null
    guild_id?: StringNullableFilter<"chat"> | string | null
    created_at?: DateTimeNullableFilter<"chat"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"chat"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"chat"> | Date | string | null
    chat_history?: XOR<Chat_historyNullableScalarRelationFilter, chat_historyWhereInput> | null
  }

  export type chatOrderByWithRelationInput = {
    id?: SortOrder
    message_id?: SortOrder
    discord_id?: SortOrder
    username?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    content_type?: SortOrderInput | SortOrder
    attachments?: SortOrder
    channel_id?: SortOrderInput | SortOrder
    guild_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    chat_history?: chat_historyOrderByWithRelationInput
  }

  export type chatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    message_id?: string
    AND?: chatWhereInput | chatWhereInput[]
    OR?: chatWhereInput[]
    NOT?: chatWhereInput | chatWhereInput[]
    discord_id?: StringFilter<"chat"> | string
    username?: StringNullableFilter<"chat"> | string | null
    content?: StringNullableFilter<"chat"> | string | null
    content_type?: StringNullableFilter<"chat"> | string | null
    attachments?: StringNullableListFilter<"chat">
    channel_id?: StringNullableFilter<"chat"> | string | null
    guild_id?: StringNullableFilter<"chat"> | string | null
    created_at?: DateTimeNullableFilter<"chat"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"chat"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"chat"> | Date | string | null
    chat_history?: XOR<Chat_historyNullableScalarRelationFilter, chat_historyWhereInput> | null
  }, "id" | "message_id">

  export type chatOrderByWithAggregationInput = {
    id?: SortOrder
    message_id?: SortOrder
    discord_id?: SortOrder
    username?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    content_type?: SortOrderInput | SortOrder
    attachments?: SortOrder
    channel_id?: SortOrderInput | SortOrder
    guild_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: chatCountOrderByAggregateInput
    _avg?: chatAvgOrderByAggregateInput
    _max?: chatMaxOrderByAggregateInput
    _min?: chatMinOrderByAggregateInput
    _sum?: chatSumOrderByAggregateInput
  }

  export type chatScalarWhereWithAggregatesInput = {
    AND?: chatScalarWhereWithAggregatesInput | chatScalarWhereWithAggregatesInput[]
    OR?: chatScalarWhereWithAggregatesInput[]
    NOT?: chatScalarWhereWithAggregatesInput | chatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chat"> | number
    message_id?: StringWithAggregatesFilter<"chat"> | string
    discord_id?: StringWithAggregatesFilter<"chat"> | string
    username?: StringNullableWithAggregatesFilter<"chat"> | string | null
    content?: StringNullableWithAggregatesFilter<"chat"> | string | null
    content_type?: StringNullableWithAggregatesFilter<"chat"> | string | null
    attachments?: StringNullableListFilter<"chat">
    channel_id?: StringNullableWithAggregatesFilter<"chat"> | string | null
    guild_id?: StringNullableWithAggregatesFilter<"chat"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"chat"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"chat"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"chat"> | Date | string | null
  }

  export type chat_historyWhereInput = {
    AND?: chat_historyWhereInput | chat_historyWhereInput[]
    OR?: chat_historyWhereInput[]
    NOT?: chat_historyWhereInput | chat_historyWhereInput[]
    id?: IntFilter<"chat_history"> | number
    messageid?: StringFilter<"chat_history"> | string
    old_content?: StringNullableFilter<"chat_history"> | string | null
    new_content?: StringNullableFilter<"chat_history"> | string | null
    old_attachments?: StringNullableListFilter<"chat_history">
    new_attachments?: StringNullableListFilter<"chat_history">
    edited_at?: DateTimeNullableFilter<"chat_history"> | Date | string | null
    chat?: XOR<ChatScalarRelationFilter, chatWhereInput>
  }

  export type chat_historyOrderByWithRelationInput = {
    id?: SortOrder
    messageid?: SortOrder
    old_content?: SortOrderInput | SortOrder
    new_content?: SortOrderInput | SortOrder
    old_attachments?: SortOrder
    new_attachments?: SortOrder
    edited_at?: SortOrderInput | SortOrder
    chat?: chatOrderByWithRelationInput
  }

  export type chat_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    messageid?: string
    AND?: chat_historyWhereInput | chat_historyWhereInput[]
    OR?: chat_historyWhereInput[]
    NOT?: chat_historyWhereInput | chat_historyWhereInput[]
    old_content?: StringNullableFilter<"chat_history"> | string | null
    new_content?: StringNullableFilter<"chat_history"> | string | null
    old_attachments?: StringNullableListFilter<"chat_history">
    new_attachments?: StringNullableListFilter<"chat_history">
    edited_at?: DateTimeNullableFilter<"chat_history"> | Date | string | null
    chat?: XOR<ChatScalarRelationFilter, chatWhereInput>
  }, "id" | "messageid">

  export type chat_historyOrderByWithAggregationInput = {
    id?: SortOrder
    messageid?: SortOrder
    old_content?: SortOrderInput | SortOrder
    new_content?: SortOrderInput | SortOrder
    old_attachments?: SortOrder
    new_attachments?: SortOrder
    edited_at?: SortOrderInput | SortOrder
    _count?: chat_historyCountOrderByAggregateInput
    _avg?: chat_historyAvgOrderByAggregateInput
    _max?: chat_historyMaxOrderByAggregateInput
    _min?: chat_historyMinOrderByAggregateInput
    _sum?: chat_historySumOrderByAggregateInput
  }

  export type chat_historyScalarWhereWithAggregatesInput = {
    AND?: chat_historyScalarWhereWithAggregatesInput | chat_historyScalarWhereWithAggregatesInput[]
    OR?: chat_historyScalarWhereWithAggregatesInput[]
    NOT?: chat_historyScalarWhereWithAggregatesInput | chat_historyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chat_history"> | number
    messageid?: StringWithAggregatesFilter<"chat_history"> | string
    old_content?: StringNullableWithAggregatesFilter<"chat_history"> | string | null
    new_content?: StringNullableWithAggregatesFilter<"chat_history"> | string | null
    old_attachments?: StringNullableListFilter<"chat_history">
    new_attachments?: StringNullableListFilter<"chat_history">
    edited_at?: DateTimeNullableWithAggregatesFilter<"chat_history"> | Date | string | null
  }

  export type moderatorsWhereInput = {
    AND?: moderatorsWhereInput | moderatorsWhereInput[]
    OR?: moderatorsWhereInput[]
    NOT?: moderatorsWhereInput | moderatorsWhereInput[]
    id?: IntFilter<"moderators"> | number
    discord_id?: StringFilter<"moderators"> | string
    username?: StringFilter<"moderators"> | string
    locale?: StringNullableFilter<"moderators"> | string | null
    email?: StringNullableFilter<"moderators"> | string | null
    registration_token?: StringNullableFilter<"moderators"> | string | null
    created_at?: DateTimeNullableFilter<"moderators"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"moderators"> | Date | string | null
  }

  export type moderatorsOrderByWithRelationInput = {
    id?: SortOrder
    discord_id?: SortOrder
    username?: SortOrder
    locale?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    registration_token?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type moderatorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    discord_id?: string
    registration_token?: string
    AND?: moderatorsWhereInput | moderatorsWhereInput[]
    OR?: moderatorsWhereInput[]
    NOT?: moderatorsWhereInput | moderatorsWhereInput[]
    username?: StringFilter<"moderators"> | string
    locale?: StringNullableFilter<"moderators"> | string | null
    email?: StringNullableFilter<"moderators"> | string | null
    created_at?: DateTimeNullableFilter<"moderators"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"moderators"> | Date | string | null
  }, "id" | "discord_id" | "registration_token">

  export type moderatorsOrderByWithAggregationInput = {
    id?: SortOrder
    discord_id?: SortOrder
    username?: SortOrder
    locale?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    registration_token?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: moderatorsCountOrderByAggregateInput
    _avg?: moderatorsAvgOrderByAggregateInput
    _max?: moderatorsMaxOrderByAggregateInput
    _min?: moderatorsMinOrderByAggregateInput
    _sum?: moderatorsSumOrderByAggregateInput
  }

  export type moderatorsScalarWhereWithAggregatesInput = {
    AND?: moderatorsScalarWhereWithAggregatesInput | moderatorsScalarWhereWithAggregatesInput[]
    OR?: moderatorsScalarWhereWithAggregatesInput[]
    NOT?: moderatorsScalarWhereWithAggregatesInput | moderatorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"moderators"> | number
    discord_id?: StringWithAggregatesFilter<"moderators"> | string
    username?: StringWithAggregatesFilter<"moderators"> | string
    locale?: StringNullableWithAggregatesFilter<"moderators"> | string | null
    email?: StringNullableWithAggregatesFilter<"moderators"> | string | null
    registration_token?: StringNullableWithAggregatesFilter<"moderators"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"moderators"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"moderators"> | Date | string | null
  }

  export type ticketsWhereInput = {
    AND?: ticketsWhereInput | ticketsWhereInput[]
    OR?: ticketsWhereInput[]
    NOT?: ticketsWhereInput | ticketsWhereInput[]
    id?: IntFilter<"tickets"> | number
    ticket_id?: UuidFilter<"tickets"> | string
    author_id?: StringFilter<"tickets"> | string
    target_id?: StringNullableFilter<"tickets"> | string | null
    assignee_id?: StringNullableFilter<"tickets"> | string | null
    status?: Enumticket_statusNullableFilter<"tickets"> | $Enums.ticket_status | null
    category?: Enumticket_categoryNullableFilter<"tickets"> | $Enums.ticket_category | null
    subject?: StringNullableFilter<"tickets"> | string | null
    description?: StringNullableFilter<"tickets"> | string | null
    channel_id?: StringNullableFilter<"tickets"> | string | null
    guild_id?: StringNullableFilter<"tickets"> | string | null
    is_closed?: BoolNullableFilter<"tickets"> | boolean | null
    created_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    closed_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
  }

  export type ticketsOrderByWithRelationInput = {
    id?: SortOrder
    ticket_id?: SortOrder
    author_id?: SortOrder
    target_id?: SortOrderInput | SortOrder
    assignee_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    channel_id?: SortOrderInput | SortOrder
    guild_id?: SortOrderInput | SortOrder
    is_closed?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    closed_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type ticketsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ticket_id?: string
    AND?: ticketsWhereInput | ticketsWhereInput[]
    OR?: ticketsWhereInput[]
    NOT?: ticketsWhereInput | ticketsWhereInput[]
    author_id?: StringFilter<"tickets"> | string
    target_id?: StringNullableFilter<"tickets"> | string | null
    assignee_id?: StringNullableFilter<"tickets"> | string | null
    status?: Enumticket_statusNullableFilter<"tickets"> | $Enums.ticket_status | null
    category?: Enumticket_categoryNullableFilter<"tickets"> | $Enums.ticket_category | null
    subject?: StringNullableFilter<"tickets"> | string | null
    description?: StringNullableFilter<"tickets"> | string | null
    channel_id?: StringNullableFilter<"tickets"> | string | null
    guild_id?: StringNullableFilter<"tickets"> | string | null
    is_closed?: BoolNullableFilter<"tickets"> | boolean | null
    created_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    closed_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
  }, "id" | "ticket_id">

  export type ticketsOrderByWithAggregationInput = {
    id?: SortOrder
    ticket_id?: SortOrder
    author_id?: SortOrder
    target_id?: SortOrderInput | SortOrder
    assignee_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    channel_id?: SortOrderInput | SortOrder
    guild_id?: SortOrderInput | SortOrder
    is_closed?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    closed_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ticketsCountOrderByAggregateInput
    _avg?: ticketsAvgOrderByAggregateInput
    _max?: ticketsMaxOrderByAggregateInput
    _min?: ticketsMinOrderByAggregateInput
    _sum?: ticketsSumOrderByAggregateInput
  }

  export type ticketsScalarWhereWithAggregatesInput = {
    AND?: ticketsScalarWhereWithAggregatesInput | ticketsScalarWhereWithAggregatesInput[]
    OR?: ticketsScalarWhereWithAggregatesInput[]
    NOT?: ticketsScalarWhereWithAggregatesInput | ticketsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tickets"> | number
    ticket_id?: UuidWithAggregatesFilter<"tickets"> | string
    author_id?: StringWithAggregatesFilter<"tickets"> | string
    target_id?: StringNullableWithAggregatesFilter<"tickets"> | string | null
    assignee_id?: StringNullableWithAggregatesFilter<"tickets"> | string | null
    status?: Enumticket_statusNullableWithAggregatesFilter<"tickets"> | $Enums.ticket_status | null
    category?: Enumticket_categoryNullableWithAggregatesFilter<"tickets"> | $Enums.ticket_category | null
    subject?: StringNullableWithAggregatesFilter<"tickets"> | string | null
    description?: StringNullableWithAggregatesFilter<"tickets"> | string | null
    channel_id?: StringNullableWithAggregatesFilter<"tickets"> | string | null
    guild_id?: StringNullableWithAggregatesFilter<"tickets"> | string | null
    is_closed?: BoolNullableWithAggregatesFilter<"tickets"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tickets"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"tickets"> | Date | string | null
    closed_at?: DateTimeNullableWithAggregatesFilter<"tickets"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"tickets"> | Date | string | null
  }

  export type chatCreateInput = {
    message_id: string
    discord_id: string
    username?: string | null
    content?: string | null
    content_type?: string | null
    attachments?: chatCreateattachmentsInput | string[]
    channel_id?: string | null
    guild_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    chat_history?: chat_historyCreateNestedOneWithoutChatInput
  }

  export type chatUncheckedCreateInput = {
    id?: number
    message_id: string
    discord_id: string
    username?: string | null
    content?: string | null
    content_type?: string | null
    attachments?: chatCreateattachmentsInput | string[]
    channel_id?: string | null
    guild_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    chat_history?: chat_historyUncheckedCreateNestedOneWithoutChatInput
  }

  export type chatUpdateInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    discord_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    content_type?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: chatUpdateattachmentsInput | string[]
    channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    guild_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_history?: chat_historyUpdateOneWithoutChatNestedInput
  }

  export type chatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_id?: StringFieldUpdateOperationsInput | string
    discord_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    content_type?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: chatUpdateattachmentsInput | string[]
    channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    guild_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_history?: chat_historyUncheckedUpdateOneWithoutChatNestedInput
  }

  export type chatCreateManyInput = {
    id?: number
    message_id: string
    discord_id: string
    username?: string | null
    content?: string | null
    content_type?: string | null
    attachments?: chatCreateattachmentsInput | string[]
    channel_id?: string | null
    guild_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type chatUpdateManyMutationInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    discord_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    content_type?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: chatUpdateattachmentsInput | string[]
    channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    guild_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_id?: StringFieldUpdateOperationsInput | string
    discord_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    content_type?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: chatUpdateattachmentsInput | string[]
    channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    guild_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chat_historyCreateInput = {
    old_content?: string | null
    new_content?: string | null
    old_attachments?: chat_historyCreateold_attachmentsInput | string[]
    new_attachments?: chat_historyCreatenew_attachmentsInput | string[]
    edited_at?: Date | string | null
    chat: chatCreateNestedOneWithoutChat_historyInput
  }

  export type chat_historyUncheckedCreateInput = {
    id?: number
    messageid: string
    old_content?: string | null
    new_content?: string | null
    old_attachments?: chat_historyCreateold_attachmentsInput | string[]
    new_attachments?: chat_historyCreatenew_attachmentsInput | string[]
    edited_at?: Date | string | null
  }

  export type chat_historyUpdateInput = {
    old_content?: NullableStringFieldUpdateOperationsInput | string | null
    new_content?: NullableStringFieldUpdateOperationsInput | string | null
    old_attachments?: chat_historyUpdateold_attachmentsInput | string[]
    new_attachments?: chat_historyUpdatenew_attachmentsInput | string[]
    edited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat?: chatUpdateOneRequiredWithoutChat_historyNestedInput
  }

  export type chat_historyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    messageid?: StringFieldUpdateOperationsInput | string
    old_content?: NullableStringFieldUpdateOperationsInput | string | null
    new_content?: NullableStringFieldUpdateOperationsInput | string | null
    old_attachments?: chat_historyUpdateold_attachmentsInput | string[]
    new_attachments?: chat_historyUpdatenew_attachmentsInput | string[]
    edited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chat_historyCreateManyInput = {
    id?: number
    messageid: string
    old_content?: string | null
    new_content?: string | null
    old_attachments?: chat_historyCreateold_attachmentsInput | string[]
    new_attachments?: chat_historyCreatenew_attachmentsInput | string[]
    edited_at?: Date | string | null
  }

  export type chat_historyUpdateManyMutationInput = {
    old_content?: NullableStringFieldUpdateOperationsInput | string | null
    new_content?: NullableStringFieldUpdateOperationsInput | string | null
    old_attachments?: chat_historyUpdateold_attachmentsInput | string[]
    new_attachments?: chat_historyUpdatenew_attachmentsInput | string[]
    edited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chat_historyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    messageid?: StringFieldUpdateOperationsInput | string
    old_content?: NullableStringFieldUpdateOperationsInput | string | null
    new_content?: NullableStringFieldUpdateOperationsInput | string | null
    old_attachments?: chat_historyUpdateold_attachmentsInput | string[]
    new_attachments?: chat_historyUpdatenew_attachmentsInput | string[]
    edited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type moderatorsCreateInput = {
    discord_id: string
    username: string
    locale?: string | null
    email?: string | null
    registration_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type moderatorsUncheckedCreateInput = {
    id?: number
    discord_id: string
    username: string
    locale?: string | null
    email?: string | null
    registration_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type moderatorsUpdateInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    registration_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type moderatorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    discord_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    registration_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type moderatorsCreateManyInput = {
    id?: number
    discord_id: string
    username: string
    locale?: string | null
    email?: string | null
    registration_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type moderatorsUpdateManyMutationInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    registration_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type moderatorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    discord_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    registration_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsCreateInput = {
    ticket_id?: string
    author_id: string
    target_id?: string | null
    assignee_id?: string | null
    status?: $Enums.ticket_status | null
    category?: $Enums.ticket_category | null
    subject?: string | null
    description?: string | null
    channel_id?: string | null
    guild_id?: string | null
    is_closed?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    closed_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ticketsUncheckedCreateInput = {
    id?: number
    ticket_id?: string
    author_id: string
    target_id?: string | null
    assignee_id?: string | null
    status?: $Enums.ticket_status | null
    category?: $Enums.ticket_category | null
    subject?: string | null
    description?: string | null
    channel_id?: string | null
    guild_id?: string | null
    is_closed?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    closed_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ticketsUpdateInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    assignee_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumticket_statusFieldUpdateOperationsInput | $Enums.ticket_status | null
    category?: NullableEnumticket_categoryFieldUpdateOperationsInput | $Enums.ticket_category | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    guild_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_closed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    assignee_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumticket_statusFieldUpdateOperationsInput | $Enums.ticket_status | null
    category?: NullableEnumticket_categoryFieldUpdateOperationsInput | $Enums.ticket_category | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    guild_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_closed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsCreateManyInput = {
    id?: number
    ticket_id?: string
    author_id: string
    target_id?: string | null
    assignee_id?: string | null
    status?: $Enums.ticket_status | null
    category?: $Enums.ticket_category | null
    subject?: string | null
    description?: string | null
    channel_id?: string | null
    guild_id?: string | null
    is_closed?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    closed_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ticketsUpdateManyMutationInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    assignee_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumticket_statusFieldUpdateOperationsInput | $Enums.ticket_status | null
    category?: NullableEnumticket_categoryFieldUpdateOperationsInput | $Enums.ticket_category | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    guild_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_closed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    assignee_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumticket_statusFieldUpdateOperationsInput | $Enums.ticket_status | null
    category?: NullableEnumticket_categoryFieldUpdateOperationsInput | $Enums.ticket_category | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    guild_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_closed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Chat_historyNullableScalarRelationFilter = {
    is?: chat_historyWhereInput | null
    isNot?: chat_historyWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type chatCountOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    discord_id?: SortOrder
    username?: SortOrder
    content?: SortOrder
    content_type?: SortOrder
    attachments?: SortOrder
    channel_id?: SortOrder
    guild_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type chatAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type chatMaxOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    discord_id?: SortOrder
    username?: SortOrder
    content?: SortOrder
    content_type?: SortOrder
    channel_id?: SortOrder
    guild_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type chatMinOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    discord_id?: SortOrder
    username?: SortOrder
    content?: SortOrder
    content_type?: SortOrder
    channel_id?: SortOrder
    guild_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type chatSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ChatScalarRelationFilter = {
    is?: chatWhereInput
    isNot?: chatWhereInput
  }

  export type chat_historyCountOrderByAggregateInput = {
    id?: SortOrder
    messageid?: SortOrder
    old_content?: SortOrder
    new_content?: SortOrder
    old_attachments?: SortOrder
    new_attachments?: SortOrder
    edited_at?: SortOrder
  }

  export type chat_historyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type chat_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    messageid?: SortOrder
    old_content?: SortOrder
    new_content?: SortOrder
    edited_at?: SortOrder
  }

  export type chat_historyMinOrderByAggregateInput = {
    id?: SortOrder
    messageid?: SortOrder
    old_content?: SortOrder
    new_content?: SortOrder
    edited_at?: SortOrder
  }

  export type chat_historySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type moderatorsCountOrderByAggregateInput = {
    id?: SortOrder
    discord_id?: SortOrder
    username?: SortOrder
    locale?: SortOrder
    email?: SortOrder
    registration_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type moderatorsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type moderatorsMaxOrderByAggregateInput = {
    id?: SortOrder
    discord_id?: SortOrder
    username?: SortOrder
    locale?: SortOrder
    email?: SortOrder
    registration_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type moderatorsMinOrderByAggregateInput = {
    id?: SortOrder
    discord_id?: SortOrder
    username?: SortOrder
    locale?: SortOrder
    email?: SortOrder
    registration_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type moderatorsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type Enumticket_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_status | Enumticket_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ticket_status[] | ListEnumticket_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ticket_status[] | ListEnumticket_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumticket_statusNullableFilter<$PrismaModel> | $Enums.ticket_status | null
  }

  export type Enumticket_categoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_category | Enumticket_categoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ticket_category[] | ListEnumticket_categoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ticket_category[] | ListEnumticket_categoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumticket_categoryNullableFilter<$PrismaModel> | $Enums.ticket_category | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ticketsCountOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
    author_id?: SortOrder
    target_id?: SortOrder
    assignee_id?: SortOrder
    status?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    channel_id?: SortOrder
    guild_id?: SortOrder
    is_closed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    closed_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ticketsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ticketsMaxOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
    author_id?: SortOrder
    target_id?: SortOrder
    assignee_id?: SortOrder
    status?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    channel_id?: SortOrder
    guild_id?: SortOrder
    is_closed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    closed_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ticketsMinOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
    author_id?: SortOrder
    target_id?: SortOrder
    assignee_id?: SortOrder
    status?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    channel_id?: SortOrder
    guild_id?: SortOrder
    is_closed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    closed_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ticketsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumticket_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_status | Enumticket_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ticket_status[] | ListEnumticket_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ticket_status[] | ListEnumticket_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumticket_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ticket_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumticket_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumticket_statusNullableFilter<$PrismaModel>
  }

  export type Enumticket_categoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_category | Enumticket_categoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ticket_category[] | ListEnumticket_categoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ticket_category[] | ListEnumticket_categoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumticket_categoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.ticket_category | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumticket_categoryNullableFilter<$PrismaModel>
    _max?: NestedEnumticket_categoryNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type chatCreateattachmentsInput = {
    set: string[]
  }

  export type chat_historyCreateNestedOneWithoutChatInput = {
    create?: XOR<chat_historyCreateWithoutChatInput, chat_historyUncheckedCreateWithoutChatInput>
    connectOrCreate?: chat_historyCreateOrConnectWithoutChatInput
    connect?: chat_historyWhereUniqueInput
  }

  export type chat_historyUncheckedCreateNestedOneWithoutChatInput = {
    create?: XOR<chat_historyCreateWithoutChatInput, chat_historyUncheckedCreateWithoutChatInput>
    connectOrCreate?: chat_historyCreateOrConnectWithoutChatInput
    connect?: chat_historyWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type chatUpdateattachmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type chat_historyUpdateOneWithoutChatNestedInput = {
    create?: XOR<chat_historyCreateWithoutChatInput, chat_historyUncheckedCreateWithoutChatInput>
    connectOrCreate?: chat_historyCreateOrConnectWithoutChatInput
    upsert?: chat_historyUpsertWithoutChatInput
    disconnect?: chat_historyWhereInput | boolean
    delete?: chat_historyWhereInput | boolean
    connect?: chat_historyWhereUniqueInput
    update?: XOR<XOR<chat_historyUpdateToOneWithWhereWithoutChatInput, chat_historyUpdateWithoutChatInput>, chat_historyUncheckedUpdateWithoutChatInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type chat_historyUncheckedUpdateOneWithoutChatNestedInput = {
    create?: XOR<chat_historyCreateWithoutChatInput, chat_historyUncheckedCreateWithoutChatInput>
    connectOrCreate?: chat_historyCreateOrConnectWithoutChatInput
    upsert?: chat_historyUpsertWithoutChatInput
    disconnect?: chat_historyWhereInput | boolean
    delete?: chat_historyWhereInput | boolean
    connect?: chat_historyWhereUniqueInput
    update?: XOR<XOR<chat_historyUpdateToOneWithWhereWithoutChatInput, chat_historyUpdateWithoutChatInput>, chat_historyUncheckedUpdateWithoutChatInput>
  }

  export type chat_historyCreateold_attachmentsInput = {
    set: string[]
  }

  export type chat_historyCreatenew_attachmentsInput = {
    set: string[]
  }

  export type chatCreateNestedOneWithoutChat_historyInput = {
    create?: XOR<chatCreateWithoutChat_historyInput, chatUncheckedCreateWithoutChat_historyInput>
    connectOrCreate?: chatCreateOrConnectWithoutChat_historyInput
    connect?: chatWhereUniqueInput
  }

  export type chat_historyUpdateold_attachmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type chat_historyUpdatenew_attachmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type chatUpdateOneRequiredWithoutChat_historyNestedInput = {
    create?: XOR<chatCreateWithoutChat_historyInput, chatUncheckedCreateWithoutChat_historyInput>
    connectOrCreate?: chatCreateOrConnectWithoutChat_historyInput
    upsert?: chatUpsertWithoutChat_historyInput
    connect?: chatWhereUniqueInput
    update?: XOR<XOR<chatUpdateToOneWithWhereWithoutChat_historyInput, chatUpdateWithoutChat_historyInput>, chatUncheckedUpdateWithoutChat_historyInput>
  }

  export type NullableEnumticket_statusFieldUpdateOperationsInput = {
    set?: $Enums.ticket_status | null
  }

  export type NullableEnumticket_categoryFieldUpdateOperationsInput = {
    set?: $Enums.ticket_category | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedEnumticket_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_status | Enumticket_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ticket_status[] | ListEnumticket_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ticket_status[] | ListEnumticket_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumticket_statusNullableFilter<$PrismaModel> | $Enums.ticket_status | null
  }

  export type NestedEnumticket_categoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_category | Enumticket_categoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ticket_category[] | ListEnumticket_categoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ticket_category[] | ListEnumticket_categoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumticket_categoryNullableFilter<$PrismaModel> | $Enums.ticket_category | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumticket_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_status | Enumticket_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ticket_status[] | ListEnumticket_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ticket_status[] | ListEnumticket_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumticket_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ticket_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumticket_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumticket_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumticket_categoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_category | Enumticket_categoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ticket_category[] | ListEnumticket_categoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ticket_category[] | ListEnumticket_categoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumticket_categoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.ticket_category | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumticket_categoryNullableFilter<$PrismaModel>
    _max?: NestedEnumticket_categoryNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type chat_historyCreateWithoutChatInput = {
    old_content?: string | null
    new_content?: string | null
    old_attachments?: chat_historyCreateold_attachmentsInput | string[]
    new_attachments?: chat_historyCreatenew_attachmentsInput | string[]
    edited_at?: Date | string | null
  }

  export type chat_historyUncheckedCreateWithoutChatInput = {
    id?: number
    old_content?: string | null
    new_content?: string | null
    old_attachments?: chat_historyCreateold_attachmentsInput | string[]
    new_attachments?: chat_historyCreatenew_attachmentsInput | string[]
    edited_at?: Date | string | null
  }

  export type chat_historyCreateOrConnectWithoutChatInput = {
    where: chat_historyWhereUniqueInput
    create: XOR<chat_historyCreateWithoutChatInput, chat_historyUncheckedCreateWithoutChatInput>
  }

  export type chat_historyUpsertWithoutChatInput = {
    update: XOR<chat_historyUpdateWithoutChatInput, chat_historyUncheckedUpdateWithoutChatInput>
    create: XOR<chat_historyCreateWithoutChatInput, chat_historyUncheckedCreateWithoutChatInput>
    where?: chat_historyWhereInput
  }

  export type chat_historyUpdateToOneWithWhereWithoutChatInput = {
    where?: chat_historyWhereInput
    data: XOR<chat_historyUpdateWithoutChatInput, chat_historyUncheckedUpdateWithoutChatInput>
  }

  export type chat_historyUpdateWithoutChatInput = {
    old_content?: NullableStringFieldUpdateOperationsInput | string | null
    new_content?: NullableStringFieldUpdateOperationsInput | string | null
    old_attachments?: chat_historyUpdateold_attachmentsInput | string[]
    new_attachments?: chat_historyUpdatenew_attachmentsInput | string[]
    edited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chat_historyUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    old_content?: NullableStringFieldUpdateOperationsInput | string | null
    new_content?: NullableStringFieldUpdateOperationsInput | string | null
    old_attachments?: chat_historyUpdateold_attachmentsInput | string[]
    new_attachments?: chat_historyUpdatenew_attachmentsInput | string[]
    edited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chatCreateWithoutChat_historyInput = {
    message_id: string
    discord_id: string
    username?: string | null
    content?: string | null
    content_type?: string | null
    attachments?: chatCreateattachmentsInput | string[]
    channel_id?: string | null
    guild_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type chatUncheckedCreateWithoutChat_historyInput = {
    id?: number
    message_id: string
    discord_id: string
    username?: string | null
    content?: string | null
    content_type?: string | null
    attachments?: chatCreateattachmentsInput | string[]
    channel_id?: string | null
    guild_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type chatCreateOrConnectWithoutChat_historyInput = {
    where: chatWhereUniqueInput
    create: XOR<chatCreateWithoutChat_historyInput, chatUncheckedCreateWithoutChat_historyInput>
  }

  export type chatUpsertWithoutChat_historyInput = {
    update: XOR<chatUpdateWithoutChat_historyInput, chatUncheckedUpdateWithoutChat_historyInput>
    create: XOR<chatCreateWithoutChat_historyInput, chatUncheckedCreateWithoutChat_historyInput>
    where?: chatWhereInput
  }

  export type chatUpdateToOneWithWhereWithoutChat_historyInput = {
    where?: chatWhereInput
    data: XOR<chatUpdateWithoutChat_historyInput, chatUncheckedUpdateWithoutChat_historyInput>
  }

  export type chatUpdateWithoutChat_historyInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    discord_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    content_type?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: chatUpdateattachmentsInput | string[]
    channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    guild_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chatUncheckedUpdateWithoutChat_historyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_id?: StringFieldUpdateOperationsInput | string
    discord_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    content_type?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: chatUpdateattachmentsInput | string[]
    channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    guild_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}