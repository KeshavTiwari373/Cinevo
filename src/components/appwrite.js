import { Client, TablesDB, Query, ID } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(PROJECT_ID);

const tablesDB = new TablesDB(client);

export const updateSearchCount = async (searchQuery, movie) => {
    try {
        const result = await tablesDB.listRows({
            databaseId: DATABASE_ID,
            tableId: TABLE_ID,
            queries: [Query.equal("searchTerms", searchQuery)],
        });

        if (result.rows.length > 0) {
            const row = result.rows[0];
            await tablesDB.updateRow({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                rowId: row.$id,
                data: {
                    searchCount: Number(row.searchCount || 0) + 1,
                },
            });
        } else {
            await tablesDB.createRow({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                rowId: ID.unique(),
                data: {
                    searchTerms: searchQuery,
                    searchCount: 1,
                    movie_id: movie.id,
                    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                },
            });
        }
    } catch (error) {
        console.error("Error updating search count:", error);
    }
};