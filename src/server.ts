import { app } from "./app";

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`API successfully started at port ${port}`);
});
