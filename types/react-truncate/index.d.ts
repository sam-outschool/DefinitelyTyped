// Type definitions for react-truncate 2.3
// Project: https://github.com/One-com/react-truncate
// Definitions by: Matt Perry <https://github.com/mattvperry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';

export interface TruncateProps extends React.HTMLProps<Truncate> {
    lines?: number | false;
    ellipsis?: React.ReactNode;
    onTruncate?(isTruncated: boolean): void;
    trimWhitespace?: boolean;
}

declare class Truncate extends React.Component<TruncateProps> { }
export default Truncate;
