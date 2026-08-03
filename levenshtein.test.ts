import assert from "node:assert/strict";
import { levenshtein } from "./levenshtein.ts";

assert.equal(levenshtein("kitten", "sitting"), 3);
assert.equal(levenshtein("same", "same"), 0);
