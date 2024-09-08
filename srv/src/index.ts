import app from "./server";
import { connect } from "./infrastructure/database/mongodb";

const PORT = process.env.PORT || 8080;

(async function init() {
  await connect();
  const server = app.listen(PORT, () =>
    console.log(`Server listening on PORT ${PORT}`)
  );

  process.on("SIGINT", () => {
    console.log("SIGINT - Shutdown", new Date().toISOString());
    shutdown();
  });

  process.on("SIGTERM", () => {
    console.log("SIGTERM - Shutdown", new Date().toISOString());
    shutdown;
  });

  function shutdown() {
    server.close((error) => {
      if (error) {
        console.error(error);
        process.exit(1);
      }
      process.exit(0);
    });
  }
})();
