"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const username = encodeURIComponent('YifanZou');
const password = encodeURIComponent('ZYFzyf1352109513266');
const app = (0, express_1.default)();
const PORT = 4000;
// const PORT: string | number = process.env.PORT || 4000;
console.log(process.env.PORT);
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(routes_1.default);
const uri = `mongodb+srv://${username}:${password}@cluster0.xptzrma.mongodb.net/?retryWrites=true&w=majority`;
// 这段 url 来自mongoDB cloud
mongoose_1.default
    .connect(uri)
    .then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
})
    .catch((error) => {
    throw error;
});
