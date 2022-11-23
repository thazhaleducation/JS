try {
  console.log("Open DB connection");
  // throw Error("Issue in Writing to DB");
  console.log("Write to DB");
} catch (err) {
  console.error(err.message);
} finally {
  console.log("Close DB connection");
}

