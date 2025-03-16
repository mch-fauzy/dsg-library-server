import { db, client } from "../configs/drizzle-client.js";
import { handleError } from "../utils/error-handler.js";
import { logInfo } from "../utils/logger.js";
import { dsgBooks } from "./schema.js";
const seedDatabase = async () => {
    try {
        logInfo("Seeding database...");
        await db.insert(dsgBooks).values([
            {
                name: "Clean Code",
                category: "Programming",
                publisher: "Prentice Hall",
                isbn: "9780132350884",
                issn: null,
                author: "Robert C. Martin",
                year: 2008,
                price: 39.99,
                description: "A Handbook of Agile Software Craftsmanship",
            },
            {
                name: "The Pragmatic Programmer",
                category: "Programming",
                publisher: "Addison-Wesley",
                isbn: "9780201616224",
                issn: null,
                author: "Andrew Hunt, David Thomas",
                year: 1999,
                price: 42.99,
                description: "Your Journey To Mastery",
            },
            {
                name: "Design Patterns",
                category: "Software Engineering",
                publisher: "Addison-Wesley",
                isbn: "9780201633610",
                issn: null,
                author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
                year: 1994,
                price: 49.99,
                description: "Elements of Reusable Object-Oriented Software",
            },
        ]);
        logInfo('Seeding complete');
    }
    catch (error) {
        throw handleError({
            operationName: 'seedDatabase',
            error,
        });
    }
    finally {
        await client.end();
    }
};
void seedDatabase();
//# sourceMappingURL=seed-database.js.map