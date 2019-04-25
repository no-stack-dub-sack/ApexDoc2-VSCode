import ApexDocError from './ApexDocError';
import { readFileSync } from 'fs';

/**
 * A utility class similar to C#'s LineReader for synchronously reading a file line by line.
 * Uses Node's `readFileSync` to produce an array of lines and implements a simple iterator
 * to advance through them. This may be less space efficient than using Node's native line
 * reader, however, it keeps things synchronous, and avoids callbacks.
 */
class LineReader {
    private lines: string[];
    private nextIndex: number = 0;
    private end: number;

    public constructor(filePath: string) {
        try {
            // NOTE: could use Node's os.EOL constant instead of the regexp
            // but hesitant because user could have EOL set contrary to the
            // platform they're on in VSCode. This might be safer in the end.
            const EOL = /(?:\r\n|[\r\n])/;
            this.lines = readFileSync(filePath).toString('utf8').split(EOL);
            this.end = this.lines.length;
        } catch (e) {
            throw new ApexDocError(e);
        }
    }

    /**
     * Returns the next line and advances the reader a single step.
     * @returns The next line, or null if there is no next line.
     */
    public readLine(): string | null {
        let result;
        if (this.nextIndex < this.end) {
            result = this.lines[this.nextIndex];
            this.nextIndex++;
            return result;
        }

        this.lines = [];
        return null;
    }

    /**
     * Returns the previous line without affecting the reader's position.
     * @returns String, the previous line, or null if there is no previous line.
     */
    public peekPrevLine(): string | null {
        if ((this.nextIndex - 1) > 0) {
            return this.lines[this.nextIndex - 2];
        }
        return null;
    }

    /**
     * Returns the next line without advancing the reader.
     * @returns String, the next line, or null if there is no next line.
     */
    public peekNextLine(): string | null {
        if ((this.nextIndex + 1) < this.end) {
            return this.lines[this.nextIndex + 2];
        }
        return null;
    }
}

export default LineReader;