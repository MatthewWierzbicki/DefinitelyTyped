// Type definitions for write-file-atomic 4.0
// Project: https://github.com/npm/write-file-atomic
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = writeFile;

declare function writeFile(
    filename: string,
    data: string | Buffer,
    options: writeFile.Options | BufferEncoding,
    callback: (error?: Error) => void,
): void;
declare function writeFile(filename: string, data: string | Buffer, callback: (error?: Error) => void): void;
declare function writeFile(
    filename: string,
    data: string | Buffer,
    options?: writeFile.Options | BufferEncoding,
): Promise<void>;

declare namespace writeFile {
    function sync(filename: string, data: string | Buffer, options?: Options | BufferEncoding): void;

    interface Options {
        chown?:
            | {
                uid: number;
                gid: number;
            }
            | undefined;
        /**
         * @default 'utf8'
         */
        encoding?: BufferEncoding | undefined;
        fsync?: boolean | undefined;
        mode?: number | undefined;
        tmpfileCreated?: ((tmpfile: string) => void) | undefined;
    }
}
