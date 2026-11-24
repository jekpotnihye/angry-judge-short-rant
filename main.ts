import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The hand dryer in the office toilet saw my hands for half a second, blew one heroic puff, then quit on me. I waved. I begged. I danced. Nothing. I left wiping wet hands on my jeans like a criminal, while a machine invented for exactly this moment stood there dry, smug, and still employed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`${entry.length} characters`);
console.log(entry);
