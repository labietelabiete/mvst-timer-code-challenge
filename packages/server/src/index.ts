import { app } from "./server";
import { config } from "./config/config";
import { connect } from "./db/connect";
import { resetTimer } from "./db/seed";

console.log(config.db.url);
connect()
  .then(async () => {
    await resetTimer();
    app.listen(config.app.port, () => {
      console.log(`Server is now running at port ${config.app.port}!`);
    });
  })
  .catch((error) => {
    console.log(`Error connecting the server: ${error}`);
  });
