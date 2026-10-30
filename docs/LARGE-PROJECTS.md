# Embedded media in large projects

A video can appear both on the canvas and in retained timeline assets or
clips. Writing each copy of its data URL can exceed JavaScript's maximum
string length even when the underlying video is much smaller.

JSON serialization now stores repeated data URLs of at least 64 KiB once
in a `mediaSources` array. Those files use wire format version 2 and
`opendesign-media:<index>` source references. Opening a file restores its
ordinary version 1 runtime document before validating nodes and timelines;
the caller's input is not mutated. Files without large repeated media keep
the existing version 1 representation. Older files continue to open.

Version 2 files need this updated client and local API. Invalid media tables
or references are rejected, and the existing project lease and revision
checks still apply. The data URLs remain embedded; no media is uploaded to
an external service. Projects containing more than the string limit in
unique media may still need splitting, and serialization failure is now
returned as a storage error rather than escaping as a `RangeError`.
