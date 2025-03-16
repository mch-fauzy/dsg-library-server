import postgres from 'postgres';
declare const client: postgres.Sql<{}>;
declare const db: import("drizzle-orm/postgres-js").PostgresJsDatabase<Record<string, never>> & {
    $client: postgres.Sql<{}>;
};
export { client, db };
