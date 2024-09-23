//#!usr/bin/env node

import { getArgs } from "./helpers/args.js";

const iniCLI = () => {
  const args = getArgs(process.argv);
  console.log(args)
};

iniCLI();
