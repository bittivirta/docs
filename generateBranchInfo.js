const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

try {
  // Get current Git branch
  const branch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();

  // Make directory .tmp if it does not exist
  const dirPath = path.resolve(__dirname, ".tmp");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  // Write the branch info to info.json
  const filePath = path.resolve(dirPath, "info.json");
  const data = JSON.stringify({ branch }, null, 2); // Adding spacing for better readability
  fs.writeFileSync(filePath, data);

  console.log("Branch info successfully written to ./.tmp/info.json");
} catch (error) {
  console.error("Failed to generate branch info:", error);
  process.exit(1);
}
